<template>
    <div>
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
                    placeholder="example@domen.com"
            >
            </b-form-input>
        </b-form-group>
        <b-form-group label="Phone Number" class="text-left">
            <b-form-input
                    v-model="user.phone"
                    name="phone"
                    type="text"
                    placeholder="Phone Number"
            >
            </b-form-input>
        </b-form-group>
        <b-form-group label="Gender" class="text-left">
            <b-form-select
                    v-model="user.gender"
                    :options="genders"
                    name="gender"
                    prompt="Gender"
            >
            </b-form-select>
        </b-form-group>
        <b-form-group label="Day Of Birthday" class="text-left">
            <b-form-input
                    v-model="user.birthday_at"
                    name="birthday_at"
                    type="date"
                    placeholder="Birth Day"
            ></b-form-input>
        </b-form-group>
    </div>
</template>

<script>
    import api from "../../config";

    export default {
        name: "ProfileForm",
        props: {
            user: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                genders: {}
            }
        },
        created() {
            api.get('/genders').then((response) => {
                this.genders = response.data;
            })
        }
    }
</script>

<style scoped>

</style>