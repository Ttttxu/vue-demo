import axios from 'axios';
import cookie from 'js-cookie';

let token = "";
try {
  token = JSON.parse(cookie.get('token'));
} catch (error){
  console.log('查看有没有登陆',error);
}
// axios.defaults.headers.common['Authorization'] = 'Bearer ' + AUTH_TOKEN;
const service = axios.create({
  headers: {
    'userId': token.id
  }
})

export default service;
