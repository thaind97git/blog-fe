import { lazy } from 'react';

const TodoList = lazy(() => import('./index'));

export default [
  {
    name: 'todo-list',
    path: '/todo-list',
    exact: true,
    layout: {
      header: true,
      footer: true,
    },
    component: TodoList,
  },
];
