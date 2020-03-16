<template>
    <div class="products">
        <div class="col-md-12" v-if="hasProduct">
            {{ this.$store.state.products }}
        </div>
        <div v-else>
            <h1>
                Sorry, but we don't have any products now
            </h1>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Products",
        data() {
            return {
                hasProduct: true,
            }
        },
        methods: {
            getProducts() {
                this.$http.get('http://abq.loc/api/users').then((response) => {
                    if (Object.keys(response.data).length !== 0) {
                        this.$store.state.products = response.data
                    }
                    else {
                        this.hasProduct = false
                    }
                })
            }
        },
        created() {
            this.getProducts()
        }

    }
</script>

<style scoped>

</style>