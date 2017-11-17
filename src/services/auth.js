import { config } from '../config/config';

function clear() {
  return localStorage.removeItem('access_token');
}

function getToken() {
  return localStorage.getItem('access_token');
}

function setToken(token) {
  return localStorage.setItem('access_token', token);
}

function authenticate(credentials) {
  const qs = require('qs');

  const data = {
    client_id: config.CLIENT_ID,
    client_secret: config.CLIENT_SECRET,
    grant_type: 'password',
    username: credentials.username,
    password: credentials.password
  };

  const headers = new Headers();
  headers.append('X-api-version', '7');

  const init = {
    credentials: 'include',
    method: 'post',
    headers: headers,
    mode: 'cors',
    body: qs.stringify(data)
  };

  return fetch(`${config.API_URL}/token`, init);
}

export default {
  authenticate,
  getToken,
  setToken,
  clear
}