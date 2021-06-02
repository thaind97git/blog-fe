import { lazy } from 'react';

const Tags = lazy(() => import('./index'));
const PostListByTag = lazy(() => import('./components/PostListByTag'));

export default [
  {
    name: 'list of tag',
    path: '/tags',
    exact: true,
    layout: {
      header: true,
      footer: true,
    },
    component: Tags,
  },
  {
    name: 'list of post by tag',
    path: '/tags/:slug',
    exact: true,
    layout: {
      header: true,
      footer: true,
    },
    component: PostListByTag,
  },
];
