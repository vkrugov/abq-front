import {GET_PRODUCTS, GET_PRODUCTS_SUCCESS, GET_PRODUCTS_ERROR} from "../actions/product.actions";
import api from "../../config";

const state = {
    products: [],
    status: 'loading'
};

const actions = {
    [GET_PRODUCTS]: ({commit}) => {
        return new Promise((resolve, reject) => {
            commit(GET_PRODUCTS);
            api.get('/products')
                .then(({data}) => {
                    commit(GET_PRODUCTS_SUCCESS);
                    state.products = data
                })
                .catch(err => {
                    commit(GET_PRODUCTS_ERROR);
                    reject(err);
                })
        });
    },
};

const mutations = {
    [GET_PRODUCTS]: (state) => {
        state.status = "loading";
    },
    [GET_PRODUCTS_SUCCESS]: (state) => {
        state.status = "success";
    },
    [GET_PRODUCTS_ERROR]: (state) => {
        state.status = "";
    },
};

export default {
    state,
    actions,
    mutations
}