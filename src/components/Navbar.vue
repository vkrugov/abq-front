<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <router-link class="nav-link" to="/"> Home </router-link>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <router-link class="nav-link" to="/"> Home </router-link>
                    <router-link class="nav-link" to="/products"> Products </router-link>
                    <router-link class="nav-link" to="/cart"> Cart </router-link>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item-dropdown  right>
                        <b-dropdown-item> <router-link to="/profile"> Profile </router-link> </b-dropdown-item>
                        <b-dropdown-item> <router-link to="/order-history"> Order History </router-link> </b-dropdown-item>
                        <b-dropdown-item> <router-link to="/logout"> Logout </router-link> </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <div  class="nav-link">
                        <router-link class="nav-link" to="/login"> Login </router-link>
                        <router-link class="nav-link" to="/register"> Sing Up </router-link>
                    </div>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>