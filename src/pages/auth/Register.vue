<template>
    <div>
        <h1>Create your account in a few seconds</h1>
        <b-form @submit.prevent="signUp" ref="signInForm" data-vv-scope="signInForm">
            <profile-form :user="user"></profile-form>
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
    import ProfileForm from "../forms/ProfileForm";

    export default {
        name: "Register",
        data() {
            return {
                user: {
                    first_name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                    gender: '',
                    birthday_at: '',
                    password: '',
                    password_confirmation: '',
                }
            }
        },
        components: {
            profileForm: ProfileForm
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