import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from './pages/Products'
import Home from "./pages/Home";
import Cart from "./pages/Cart";

Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home'
        },
        {
            path: '/products',
            component: Products,
            name: 'products'
        },
        {
            path: '/cart',
            component: Cart,
            name: 'cart'
        },
    ],
    mode: 'history'
})