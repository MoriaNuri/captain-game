import axios from "axios";

const BASE_URL = (process.env.NODE_ENV === 'production') ? '/api/' : 'http://localhost:5000/api/';
// const BASE_URL = '//localhost:5000/api/';
// const BASE_URL =  '/api/' ;


export const httpService = {
    get(endpoint, data) {
      return ajax(endpoint, 'GET', data);
    },
    post(endpoint, data) {
      console.log(data, 'data');
      return ajax(endpoint, 'POST', data);
    },
}

async function ajax(endpoint, method = 'GET', data = null) {
    try {
      console.log(endpoint,'endpoint');
      const res = await axios({
        url: `${BASE_URL}${endpoint}`,
        method,
        data,
        params: method === 'GET' ? data : null,
      });
      return res.data;
    } catch (err) {
      console.log(
        `Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`
      );
      console.dir(err);
      if (err.response && err.response.status === 401) {
        // Depends on routing startegy - hash or history
        // window.location.assign('/#/login')
        // window.location.assign('/login')
        // history.push('/login');
      }
      throw err;
    }
  }

export default httpService;