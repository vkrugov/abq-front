<template>
    <div id="app">
        <app-navbar></app-navbar>
        <b-container>
            <router-view></router-view>
        </b-container>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'

    export default {
        name: 'App',
        data() {
            return {}
        },
        components: {
            appNavbar: Navbar
        }
    }
</script>

<style>
</style>
