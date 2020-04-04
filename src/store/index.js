import Vue from 'vue'
import Vuex from 'vuex'
import auth from "./modules/auth.modules";
import product from "./modules/product.modules";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        product
    }
})