import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { getTodoList } from '@/apis/todo';
import Button from '@/components/Button';
import useGet from '@/hooks/useGet';

const TodoList = () => {
  const history = useHistory();
  const [refreshTodo, setRefreshTodo] = useState(false);

  const { data: todoList = [] } = useGet({
    func: getTodoList,
    refresh: refreshTodo,
  });

  if (todoList.length === 0) {
    return <span>Loading...</span>;
  }

  return (
    <div className="">
      <Button primary onClick={() => history.push('/')}>
        Go to home page
      </Button>
      <Button primary onClick={() => setRefreshTodo(prev => !prev)}>
        Re-call todo
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
