import axios from 'axios';
import http from './axios';

let base = 'http://120.78.68.168:1101/';

// 修改当前登录用户密码
export const login = params => { return axios.post(`${base}user/login`, params); };
//查询消费记录
export const select = params => { return http.post(`${base}account/select`, params); };
//新增消费记录
export const save = params => { return http.post(`${base}account/save`, params); };
