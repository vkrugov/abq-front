<template>
   <div>
       <div v-if="products.length === 0">
           Yor Cart is empty. Chose some products
           <router-link to="products">here</router-link>
       </div>
       <div v-else>
       </div>
   </div>
</template>

<script>
    import {GET_CART} from "../store/actions/product.actions";

    export default {
        name: "Cart",
        created() {
            this.getCart()
        },
        methods: {
            getCart() {
                this.$store.dispatch(GET_CART);
            }
        }
    }
</script>

<style scoped>

</style>