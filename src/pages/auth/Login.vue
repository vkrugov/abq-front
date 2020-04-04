<template>
    <b-container>
        <form action="" @submit.prevent="signIn">
            <label>
                <input type="text" name="email" v-model="email">
            </label>
            <label>
                <input type="password" name="password" v-model="password">
            </label>
            <button type="submit">login</button>
        </form>
    </b-container>
</template>

<script>
    import {AUTH_REQUEST} from "../../store/actions/auth.actions";

    export default {
        name: "Login",
        data() {
            return {
                email: "",
                password: "",
            };
        },
        methods: {
            signIn() {
                this.$store.dispatch(AUTH_REQUEST, {email: this.email, password: this.password})
                    .then(() => {
                        this.$router.push("/");
                    });
            }

        },
    }
</script>

<style scoped>

</style>