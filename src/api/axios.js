import axios from 'axios';
import cookie from 'js-cookie';

let AUTH_TOKEN = "";
try {
  AUTH_TOKEN = JSON.parse(cookie.get('token'));
} catch (error){
  console.log('查看有没有登陆',error);
}
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + AUTH_TOKEN;
const service = axios.create({
  headers: {
    'Cache-Control': 'no-cache', 'token': AUTH_TOKEN.access_token
  }
})

export default service;
