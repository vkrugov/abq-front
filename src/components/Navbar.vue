<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <router-link class="nav-link" to="/"> Home </router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link class="nav-link" to="/"> Home </router-link>
                    <router-link class="nav-link" to="/products"> Products </router-link>
                    <router-link class="nav-link" to="/cart"> Cart ({{ cartLength }}) </router-link>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown v-if="user.id != null" :text="user.first_name" right>
                        <b-dropdown-item> <router-link to="/profile"> Profile </router-link> </b-dropdown-item>
                        <b-dropdown-item> <router-link to="/order-history"> Order History </router-link> </b-dropdown-item>
                        <b-dropdown-item @click="logout"> <span> Logout </span> </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <div v-else class="">
                        <router-link class="" to="/login"> Login </router-link>
                        <router-link class="" to="/register"> Sing Up </router-link>
                    </div>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import {AUTH_LOGOUT} from "../store/actions/auth.actions";
    export default {
        name: "Navbar",
        computed: mapState({
            user: (state) => state.auth.user,
            cartLength: (state) => state.product.cart.length,
        }),
        methods: {
            logout() {
                this.$store.dispatch(AUTH_LOGOUT)
                    .then(() => {
                        this.$router.push("/");
                    });
            }
        }
    }
</script>

<style scoped>

</style>