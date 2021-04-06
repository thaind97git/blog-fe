import NotFound from '@/app/components/Not-Found';
import RouteModules from '../app/pages/**/route.js';

export default [
  ...RouteModules.reduce((prev, module) => {
    prev.push(...module.default);
    return prev;
  }, []),
  {
    path: '*',
    layout: {
      header: false,
      footer: false,
    },
    component: NotFound,
  },
];
