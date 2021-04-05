import { getTodoList } from '@/api/todo';
import Button from '@/components/button';
import { setLoading } from '@/store/actions';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        dispatch(setLoading(true));
        const res = await getTodoList();
        res?.data && setTodoList(res.data);
      } catch (error) {
        console.log({ error });
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchTodoList();
  }, [dispatch]);

  if (todoList.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <div className="">
      <Button primary onClick={() => history.push('/')}>
        Go to home page
      </Button>
      <ul>
        {todoList.map(todo => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoList;
