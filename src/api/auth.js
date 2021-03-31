import base from '@/configs/axios-base';

export const getCurrentUser = () => base.get('/api/login/GetInfoToken');
