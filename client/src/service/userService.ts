import axios from 'axios';
import { userModel } from '../model/user';

export const createUser = (userInfo: userModel) => {
  return axios.post('http://localhost:5000/users', userInfo);
};

export const loginUser = (userInfo: userModel) => {
  return axios.post('http://localhost:5000/login', userInfo);
};
