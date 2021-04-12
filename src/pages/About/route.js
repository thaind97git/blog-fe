import { lazy } from 'react';

const About = lazy(() => import('./index'));

export default [
  {
    name: 'about',
    path: '/about',
    exact: true,
    layout: {
      header: true,
      footer: true,
    },
    component: About,
  },
];
