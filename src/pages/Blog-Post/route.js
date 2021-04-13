import { lazy } from 'react';

const BlogDetails = lazy(() => import('./Details/index'));

export default [
  {
    name: 'blog post details',
    path: '/blogs/1',
    exact: true,
    layout: {
      header: true,
      footer: true,
    },
    component: BlogDetails,
  },
];
