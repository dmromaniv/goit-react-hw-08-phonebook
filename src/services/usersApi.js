import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registerUser = async userInfo => {
  const { data } = await axios.post('/users/signup', userInfo);
  return data;
};

export const loginUser = async userInfo => {
  const { data } = await axios.post('/users/login', userInfo);
  return data;
};

export const getCurrentUser = async () => {
  const { data } = await axios.get('/users/current');
  return data;
};

export const logoutUser = async () => {
  const { data } = await axios.post('/users/logout');
  return data;
};
