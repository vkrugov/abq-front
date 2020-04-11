import axios from 'axios'
import toastr from "toastr";

toastr.options.closeButton = true;
toastr.options.positionClass = 'toast-top-center';

const api = axios.create({
    baseURL: 'http://abq.loc/api/',
    timeout: 10000,
    params: {}
});

api.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
        config.headers['Content-Type'] = 'application/json';
    }
    return config;
}, function (err) {
    return Promise.reject(err)
});

/*api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (e) {
        if (e.response.data.errors) {
            e.response.data.errors.forEach((message) => {
                toastr.error(message);
            })
        }
        return Promise.reject(e);
    }
);*/

export default api