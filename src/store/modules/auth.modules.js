class User {
    constructor(data) {
        this.id = data.id || null;
        this.name = data.name || null;
        this.last_name = data.last_name || null;
        this.gender = data.gender || null;
        this.email = data.email || null;
        this.created_at = data.created_at || 0;
        this.updated_at = data.updated_at || 0;
    }
}

import {
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_LOGOUT,
 /*   AUTH_FORGOT,
    AUTH_NEW,
    USER_LOAD,
    USER_UPDATE,
    USER_ACTIVATE,
    PASSWORD_CHANGE,*/
    REGISTRATION_ERROR,
    REGISTRATION_REQUEST,
    REGISTRATION_SUCCESS,
} from "../actions/auth.actions";

import api from "../../config";
import {sha256} from "js-sha256";

const state = {
    token: localStorage.getItem("token") || "",
    user: {},
    status: "",
};

const getters = {
    isAuthenticated: state => state.token !== '',
};

const actions = {
    [AUTH_REQUEST]: ({commit}, user) => {
        return new Promise((resolve, reject) => {
            commit(AUTH_REQUEST);
            api.post('/auth/login', {email: user.email, password: sha256(user.password)})
                .then(({data}) => {
                    let usr = new User(data);
                    localStorage.setItem('token', data.token);
                    commit(AUTH_SUCCESS, usr);
                    resolve(usr);
                })
                .catch(err => {
                    commit(AUTH_ERROR, err);
                    localStorage.removeItem('token');
                    reject(err);
                })
        });
    },
    [REGISTRATION_REQUEST]: ({commit}, user) => {
        return new Promise((resolve, reject) => {
            let params = Object.assign({}, user);
            params.password = sha256(user.password);
            params.password_confirmation = sha256(user.password_confirmation);
            commit(REGISTRATION_REQUEST);
            api.post('/auth/register?XDEBUG_SESSION_START=PHPSTORM', params)
                .then(({data}) => {
                    console.log(data);
                    let usr = new User(data);
                    localStorage.setItem('token', usr.auth_token);
                    commit(REGISTRATION_SUCCESS, usr);
                    resolve(usr);
                })
                .catch(err => {
                    commit(REGISTRATION_ERROR, err);
                    localStorage.removeItem('token');
                    reject(err);
                })
        });
    },
};

const mutations = {
    [AUTH_REQUEST]: (state) => {
        state.status = "loading";
    },
    [AUTH_SUCCESS]: (state, user) => {
        state.status = "success";
        state.token = user.auth_token;
        state.user = user;
    },
    [AUTH_ERROR]: (state) => {
        state.status = "error";
    },
    [AUTH_LOGOUT]: (state) => {
        state.token = "";
        state.user = {};
    },
    [REGISTRATION_SUCCESS]: (state, user) => {
        state.status = "success";
        state.token = user.auth_token;
        state.user = user;
    },
    [REGISTRATION_ERROR]: (state) => {
        state.status = "error";
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
}