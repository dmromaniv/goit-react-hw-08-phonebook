import axios from 'axios';

// export const publicApi = axios.create({
//   baseUrl: 'https://connections-api.herokuapp.com',
// });

// export const privateApi = axios.create({
//   baseUrl: 'https://connections-api.herokuapp.com',
// });

// export const token = {
//   set(token) {
//     privateApi.defaults.headers.common.Authorizations = `Bearer ${token}`;
//   },
//   unset() {
//     privateApi.defaults.headers.common.Authorizations = null;
//   },
// };

export const setAuthHeader = token => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.Authorization = '';
};
