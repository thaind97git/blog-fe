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
    slug: '/blogs/1',
    title:
      '[ Chuyện của DEV - Phần 2 ] Control một Pull Request Trong Mô Hình Scrum với Github',
    excerpt:
      'Xin chào các bạn, ở bài viết trước mình đã chia sẻ một vài mẹo nhỏ để của bạn trở nên dễ đọc và tối ưu hơn. Ở lần này mình sẽ giúp các bạn…',
  },
  {
    id: '2',
    date: '06 February, 2020',
    tags: ['Javascript'],
    slug: '/blogs/2',
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
