<template>
    <div class="new-product">
        <router-link to="products">X</router-link>
        <b-form @submit="addProduct">
            <div class="col-md-6">
                <b-form-group label="Name" class="text-left">
                    <b-form-input
                            v-model="product.name"
                            name="name"
                            type="text"
                            placeholder="Name"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Description" class="text-left">
                    <b-form-textarea
                            v-model="product.desc"
                            name="desc"
                            type="text"
                            placeholder="Description"
                    >
                    </b-form-textarea>
                </b-form-group>
                <b-form-group label="Cost" class="text-left">
                    <b-form-input
                            v-model="product.cost"
                            name="cost"
                            type="text"
                            placeholder="Cost"
                    >
                    </b-form-input>
                </b-form-group>
                <b-form-group label="Product Type" class="text-left">
                    <b-form-select
                            v-model="product.type_id"
                            name="type_id"
                            :options="types"
                            placeholder="Product Type"
                    >
                    </b-form-select>
                </b-form-group>
            </div>
        </b-form>
        <b-button type="submit" class="bg-success">Submit</b-button>
    </div>
</template>

<script>
    import api from "../config";

    export default {
        name: "NewProduct",
        data() {
            return {
                types: [],
                product: {
                    name: '',
                    desc: '',
                    cost: '',
                    type_id: '',
                    img: '',
                }
            }
        },
        created() {
            api.get('/product-types').then((response) => {
                this.types = response.data;
            })
        },
        methods: {
            addProduct() {

            }
        }
    }
</script>

<style scoped>
    .new-product {
        border: 2px solid rebeccapurple;
        padding: 10px;
    }
</style>