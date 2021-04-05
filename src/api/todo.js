import base from '@/configs/axios-base';

export const getTodoList = () =>
  base.get('https://jsonplaceholder.typicode.com/todos');
