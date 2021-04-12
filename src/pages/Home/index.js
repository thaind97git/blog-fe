import React, { useState } from 'react';
import Button from '@/components/Button';
import { getTodoList } from '@/apis/todo';
import useGetRequest from '@/hooks/useGetRequest';
import { Link } from 'react-router-dom';
import PostTags from './components/PostTags';
const BLOGS = [
  {
    id: '1',
    date: '26 February, 2020',
    tags: ['Javascript', 'Scrum', 'Github'],
    slug:
      '/2020-02-23-chuy%E1%BB%87n-c%E1%BB%A7a-dev-ph%E1%BA%A7n-2-control-m%E1%BB%99t-pull-request-trong-m%C3%B4-h%C3%ACnh-scrum-v%E1%BB%9Bi-github/',
    title:
      '[ Chuyện của DEV - Phần 1 ] Tối Ưu Hóa Source Code Với Coding Convention',
    excerpt:
      'Xin chào mọi người ! Mình là Thái, hiện tại mình đang làm vị trí . Mình viết ra Series này mong muốn chia sẻ những kinh nghiệm ít ỏi của',
  },
];
const Home = () => {
  const [refreshTodo, setRefreshTodo] = useState(false);

  const { data: todoList = [] } = useGetRequest({
    promiseFunction: getTodoList,
    refresh: refreshTodo,
  });

  if (todoList.length === 0) {
    return <span>Fetching...</span>;
  }

  return (
    <div className="home">
      <Button primary onClick={() => setRefreshTodo(prev => !prev)}>
        Re-call API
      </Button>
      <ul>
        {/* {todoList.map(todo => {
          return <li key={todo.id}>{todo.title}</li>;
        })} */}
      </ul>
      {BLOGS.map(blog => {
        return (
          <div className="blog-list" key={blog.id}>
            <span className="blog-list--date">{blog.date}</span>{' '}
            <PostTags tags={blog.tags} />
            <Link className="blog-list--link" to={blog.slug}>
              <h3 className="blog-list--title">{blog.title} </h3>
            </Link>
            <p>{blog.excerpt}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
