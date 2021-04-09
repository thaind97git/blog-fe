import { getHeaders } from '@/utils';

export const objectToQuery = (object = {}) => {
  return Object.keys(object)
    .map(key => `${key}=${object[key]}`)
    .join('&')
    .trim();
};

const nfetch = ({ endpoint, method = 'POST' }) => (
  variables = {},
  opts = {},
) => {
  if (method === 'GET') {
    const query = objectToQuery(variables);
    return {
      endpoint: query ? endpoint + '?' + query : endpoint,
      method,
      headers: getHeaders(opts.headers),
    };
  } else {
    return {
      endpoint,
      method,
      headers: getHeaders(opts.headers),
      body: JSON.stringify(variables),
    };
  }
};
export default nfetch;
