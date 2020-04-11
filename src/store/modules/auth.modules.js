class User {
    constructor(data) {
        this.id = data.id || null;
        this.first_name = data.first_name || null;
        this.last_name = data.last_name || null;
        this.email = data.email || null;
        this.phone = data.phone || null;
        this.gender = data.gender || null;
        this.created_at = data.birthday_at|| 0;
        this.created_at = data.created_at || 0;
        this.updated_at = data.updated_at || 0;
    }
}

import {
    AUTH_REQUEST,
    AUTH_ERROR,
    AUTH_SUCCESS,
    AUTH_LOGOUT,
    USER_LOAD,
    USER_UPDATE,
    /*   AUTH_FORGOT,
    AUTH_NEW,
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
                    let usr = new User(data.user);
                    localStorage.setItem('token', data.token);
                    commit(AUTH_SUCCESS, usr, data.token);
                    resolve(usr);
                })
                .catch(err => {
                    commit(AUTH_ERROR, err);
                    localStorage.removeItem('token');
                    reject(err);
                })
        });
    },
    [AUTH_LOGOUT]: ({commit}) => {
        return new Promise((resolve) => {
            commit(AUTH_LOGOUT);
            localStorage.removeItem("token");
            resolve();
        })
    },
    [REGISTRATION_REQUEST]: ({commit}, user) => {
        return new Promise((resolve, reject) => {
            let params = Object.assign({}, user);
            params.password = sha256(user.password);
            params.password_confirmation = sha256(user.password_confirmation);
            commit(REGISTRATION_REQUEST);
            api.post('/auth/register', params)
                .then(({data}) => {
                    let usr = new User(data.user);
                    localStorage.setItem('token', data.token);
                    commit(REGISTRATION_SUCCESS, usr, data.token);
                    resolve(usr);
                })
                .catch(err => {
                    commit(REGISTRATION_ERROR, err);
                    localStorage.removeItem('token');
                    reject(err);
                })
        });
    },
    [USER_LOAD]: ({commit}) => {
        return new Promise((resolve, reject) => {
            if (state.user instanceof User) {
                resolve(state.user);
                return;
            }
            commit(USER_LOAD);
            api.post('/auth/me?XDEBUG_SESSION_START=PHPSTORM')
                .then(({data}) => {
                    let usr = new User(data);
                    commit(USER_UPDATE, usr);
                    resolve(usr);
                }).catch(() => {
                commit(AUTH_LOGOUT);
                localStorage.removeItem("token");
                reject();
            })
        });
    },
};

const mutations = {
    [AUTH_REQUEST]: (state) => {
        state.status = "loading";
    },
    [AUTH_SUCCESS]: (state, user, token) => {
        state.status = "success";
        state.user = user;
        state.token = token;
    },
    [AUTH_ERROR]: (state) => {
        state.status = "error";
    },
    [AUTH_LOGOUT]: (state) => {
        state.token = "";
        state.user = {};
    },
    [USER_LOAD]: (state) => {
        state.status = "loading"
    },
    [USER_UPDATE]: (state, user) => {
        state.user = user;
        state.status = "success"
    },
    [REGISTRATION_REQUEST]: (state) => {
        state.status = "loading";
    },
    [REGISTRATION_SUCCESS]: (state, user, token) => {
        state.status = "success";
        state.user = user;
        state.token = token;
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