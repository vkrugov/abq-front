import {
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    ADD_TO_CART,
    ADD_TO_CART_SUCCESS,
    GET_CART,
    CLEAR_CART,
    CART_LOGIN,
    GET_CART_PRODUCTS_SUCCESS
} from "../actions/product.actions";
import api from "../../config";
import store from "../index";

const state = {
    products: [],
    status: 'loading',
    cart:  JSON.parse(localStorage.getItem('cart')) || [],
    cartProducts:  JSON.parse(localStorage.getItem('cart')) || [],
};

const actions = {
    [GET_PRODUCTS]: ({commit}) => {
        return new Promise((resolve, reject) => {
            commit(GET_PRODUCTS);
            api.get('/products')
                .then(({data}) => {
                    commit(GET_PRODUCTS_SUCCESS, data);
                })
                .catch(err => {
                    commit(GET_PRODUCTS_ERROR);
                    reject(err);
                })
        });
    },
    [ADD_TO_CART]: ({commit}, productId) => {
        return new Promise((resolve, reject) => {
            if (store.getters.isAuthenticated) {
                api.post('/cart/add?XDEBUG_SESSION_START=PHPSTORM', {
                    productId: productId
                })
                    .then(({data}) => {
                        commit(ADD_TO_CART_SUCCESS, data);
                    })
                    .catch(err => {
                        reject(err);
                    })
            } else {
                let data = state.cart;
                data.push(productId);
                commit(ADD_TO_CART_SUCCESS, data);
            }
        });
    },
    [GET_CART]: ({commit}) => {
        return new Promise((resolve, reject) => {
            if (store.getters.isAuthenticated) {
                api.get('/get-cart')
                    .then(({data}) => {
                        commit(GET_CART_PRODUCTS_SUCCESS, data);
                    })
                    .catch(err => {
                        reject(err);
                    })
            }
        });
    }
};

const mutations = {
    [GET_PRODUCTS]: (state) => {
        state.status = "loading";
    },
    [GET_PRODUCTS_SUCCESS]: (state, data) => {
        state.status = "success";
        state.products = data
    },
    [GET_PRODUCTS_ERROR]: (state) => {
        state.status = "";
    },
    [ADD_TO_CART_SUCCESS]: (state, data) => {
        state.cart = data;
        localStorage.setItem('cart', JSON.stringify(data));
    },
    [GET_CART_PRODUCTS_SUCCESS]: (state, data) => {
        state.cartProducts = data
    },
    [CLEAR_CART]: (state) => {
        state.cart = []
    },
    [CART_LOGIN]: (state, data) => {
        state.cart = data;
        localStorage.setItem('cart', JSON.stringify(data));
    },
};

export default {
    state,
    actions,
    mutations
}