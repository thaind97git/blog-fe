import HttpRequest from '@/services/http-request';

export const getPostDetailsById = postId => HttpRequest.get(`/posts/${postId}`);

// export const getPostDetailsBySlug = slug => HttpRequest.get(``)

export const getAllPost = () => HttpRequest.get('/posts/all');

export const getPostPaging = ({ pageIndex, pageSize }) =>
  HttpRequest.get(`/posts?limit=${pageSize}&page=${pageIndex}`);
