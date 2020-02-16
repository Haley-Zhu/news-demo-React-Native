import axios from 'axios';
import { baseURL } from './constants';

export const getNewsList = (page = 1, per_page = 15) => {
  return axios.get(`${baseURL}?page=${page}&per_page=${per_page}`).then(res => res.data);
}

export const getDetailById = (id) => {
  return axios.get(`${baseURL}/${id}`).then(res => res.data);
}