import HttpRequest from '@/services/http-request';

export const getPostDetailsByParam = param =>
  HttpRequest.get(`/posts/${param}`);

export const getPostDetailsBySlug = ({ slug }) =>
  slug && HttpRequest.get(`/posts/slug/${slug}`);

export const getAllPost = () => HttpRequest.get('/posts/all');

export const getPostPaging = ({ pageIndex, pageSize }) =>
  HttpRequest.get(`/posts?limit=${pageSize}&page=${pageIndex}`);
