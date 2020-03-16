<template>
    <div id="app">
        <app-navbar></app-navbar>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from './components/Navbar'

    export default {
        name: 'App',
        data() {
            return {
            }
        },
        components: {
            appNavbar: Navbar
        }
    }
</script>

<style>
</style>
