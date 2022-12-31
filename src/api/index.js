import {API} from './api';

export const createCart = (data, userId) => API.post(`carts/${userId}`, data)