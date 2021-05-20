import { getHeaders } from '@/utils';

import axios from 'axios';
// Make an 'instance' of axios
const instance = axios.create({
  // .. where we make our configurations
  baseURL: process.env.REACT_APP_API_SERVER_URL || 'http://localhost:3000/v1',
});

// Where you would set stuff like your 'Authorization' header, etc ...
instance.defaults.headers = getHeaders();

instance.interceptors.request.use(
  request => {
    request.params = {};
    request.params['fromOrigin'] = 'client';
    return request;
  },
  error => {
    return Promise.reject(error.message);
  },
);

// Add configure interceptors && all the other cool stuff
instance.interceptors.response.use(
  response => {
    if (response.config.parse) {
      //perform the manipulation here and change the response object
    }
    return response;
  },
  error => {
    return Promise.reject(error.message);
  },
);

export default instance;
