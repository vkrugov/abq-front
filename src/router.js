import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from './pages/Products'
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

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
        {
            path: '/login',
            component: Login,
            name: 'login'
        },
        {
            path: '/register',
            component: Register,
            name: 'register'
        },
    ],
    mode: 'history'
})