import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [],
        user: {name: 'Ivan', id: 3, token: '123'},
        cart: []
    }
})