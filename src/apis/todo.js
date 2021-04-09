import HttpRequest from '@/services/http-request';

export const getTodoList = config =>
  HttpRequest.get('https://jsonplaceholder.typicode.com/todos', config);
