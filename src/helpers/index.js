import { getToken } from './local-storage';

export const getResetter = api =>
  typeof api === 'object' && api.resetter(['data', 'error']);

export const getHeaders = (options = {}) =>
  Object.assign(
    {},
    {
      Authorization: `Bearer ${getToken()}`,
      'Content-Type': 'application/json',
    },
    options,
  );
