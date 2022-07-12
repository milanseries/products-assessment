import axios from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 12000;
axios.defaults.baseURL = process.env.REACT_APP_BASE_API;
axios.defaults.headers['ApiKey'] = process.env.REACT_APP_API_KEY;

export const req = {
  async get(url) {
    return await axios.get(url).then(res => res.data);
  },
};
