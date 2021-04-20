import { lazy } from 'react';

const Tags = lazy(() => import('./index'));

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
];
