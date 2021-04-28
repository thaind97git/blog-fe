import HttpRequest from '@/services/http-request';

export const getResumeSections = (_, config) =>
  HttpRequest.get('/resumes/all', config);
