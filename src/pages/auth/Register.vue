<template>
    <div>
        <h1>Create your account in a few seconds</h1>
        <b-form @submit.prevent="signUp" ref="signInForm" data-vv-scope="signInForm">
            <b-form-group label="First Name" class="text-left">
                <b-form-input
                        v-model="user.first_name"
                        name="first_name"
                        type="text"
                        placeholder="First Name"
                >
                </b-form-input>
            </b-form-group>
            <b-form-group label="Last Name" class="text-left">
                <b-form-input
                        v-model="user.last_name"
                        name="last-name"
                        type="text"
                        placeholder="Last Name"
                >
                </b-form-input>
            </b-form-group>
            <b-form-group label="Email Address" class="text-left">
                <b-form-input
                        v-model="user.email"
                        name="email"
                        type="text"
                        placeholder="Email Address"
                >
                </b-form-input>
            </b-form-group>
            <b-form-group label="Gender" class="text-left">
                <b-form-input
                        v-model="user.gender"
                        name="gender"
                        type="text"
                        placeholder="Gender"
                >
                </b-form-input>
            </b-form-group>
            <b-form-group label="Password" class="text-left">
                <b-form-input
                        v-model="user.password"
                        name="password"
                        type="password"
                        placeholder="Password"
                >
                </b-form-input>
            </b-form-group>
            <b-form-group label="Confirm Password" class="text-left">
                <b-form-input
                        v-model="user.password_confirmation"
                        name="password_confirmation"
                        type="password"
                        placeholder="Confirm Password"
                >
                </b-form-input>
            </b-form-group>
            <b-button type="submit" class="bg-success">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
    import {REGISTRATION_REQUEST} from "../../store/actions/auth.actions";

    export default {
        name: "Register",
        data() {
            return {
                user: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    gender: '',
                    password: '',
                    password_confirmation: '',
                }
            }
        },
        methods: {
            signUp() {
                this.$store.dispatch(REGISTRATION_REQUEST, this.user)
                    .then(() => {
                            this.$router.push("/");
                    });
            }
        }
    }
</script>

<style scoped>

</style>