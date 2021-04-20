import HttpRequest from '@/services/http-request';

export const getSocials = () => HttpRequest.get('/socials/all');

export const getProfile = () => HttpRequest.get('/users/me');
