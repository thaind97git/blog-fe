import HttpRequest from '@/services/http-request';

export const getSocials = () => HttpRequest.get('/socials/all');
