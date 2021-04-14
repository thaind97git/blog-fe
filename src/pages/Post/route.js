import { lazy } from 'react';

const Blogs = lazy(() => import('./index'));
const PostDetails = lazy(() => import('./components/PostDetails/index'));

export default [
  {
    name: 'blog post list',
    path: '/blogs',
    exact: true,
    layout: {
      header: true,
      footer: true,
    },
    component: Blogs,
  },
  {
    name: 'blog post details',
    path: '/blogs/:slug',
    exact: true,
    layout: {
      header: true,
      footer: true,
    },
    component: PostDetails,
  },
];
