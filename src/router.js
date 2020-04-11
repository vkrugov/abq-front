import Vue from 'vue'
import store from './store';
import VueRouter from 'vue-router'
import Products from './pages/Products'
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

Vue.use(VueRouter);

import {USER_LOAD} from "./store/actions/auth.actions";

const router =  new VueRouter ({
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
});

router.beforeEach((to, from, next) => {
    if (store.getters.isAuthenticated) {
        store.dispatch(USER_LOAD)
            .catch(() => {
                next('/')
            });
    }
    next();
});

export default router