import HttpRequest from '@/services/http-request';

export const getTags = () => HttpRequest.get('/tags/all');
