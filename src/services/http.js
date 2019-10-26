import axios from 'axios';

const instance = axios.create();
instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers.common['Content-Type'] = 'application/json';
instance.defaults.headers.common.dataType = 'json';
instance.defaults.headers.common.responseType = 'json';
instance.defaults.headers.post['Content-Type'] = 'application/json';

// Custom
instance.defaults.headers.common['x-frontend-test'] = 'aurumtest';
instance.defaults.baseURL = 'http://frontendtest.aurum.com.br:3000/';

export default instance;
