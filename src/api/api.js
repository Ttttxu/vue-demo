import axios from 'axios';
import http from './axios';

let base = 'http://192.168.1.102:1101/';

// 修改当前登录用户密码
export const login = params => { return axios.post(`${base}user/login`, params); };
