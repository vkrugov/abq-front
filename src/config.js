import axios from 'axios'

const api = axios.create({
    baseURL: 'http://abq.loc/api/',
    timeout: 10000,
    params: {}
});

export default api