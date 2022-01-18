import axios from 'axios';
import { userModel } from '../model/user';

export const createUser = (userInfo: userModel) => {
  return axios.post('http://localhost:3000/users', userInfo);
};

export const loginUser = (userInfo: userModel) => {
  return axios.post('http://localhost:3000/login', userInfo);
};
