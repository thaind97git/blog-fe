import NotFound from '@/components/Not-Found';
import RouteModules from '../pages/**/route.js';

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
