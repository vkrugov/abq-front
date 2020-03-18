<template>
    <div class="products">
        <div v-if="hasProduct">
            <transition name="fade">
                <div class="row" v-if="this.$store.state.products.length > 0" key= 'product'>
                    <div class="col-md-3" v-for="product in products" :key="product">
                        <div class="product-box">
                            <div class="mt-2" :class="(product.img ? 'image' : 'dark-image')">{{ product.img }}</div>
                            <div class="mt-2 title">{{ product.name }}</div>
                            <div class="mt-2 desc">{{ product.desc }}</div>
                            <div class="mt-2 mb-2 price">{{ (product.cost).toFixed(2) }} ₴</div>
                        </div>
                    </div>
                </div>
                <div class="row" v-else key='skeleton'>
                    <app-skeleton-product class="col-md-3" v-for="c in 4" :key="c"></app-skeleton-product>
                </div>
            </transition>
        </div>
        <div v-else>
            <h1>
                Sorry, but we don't have any products now
            </h1>
        </div>
    </div>
</template>

<script>
    import SkeletonProduct from '../components/SkeletonProduct'

    export default {
        name: "Products",
        data() {
            return {
                hasProduct: true,
                products: [],
            }
        },
        components: {
            appSkeletonProduct: SkeletonProduct
        },
        methods: {
            getProducts() {
                this.$http.get('http://abq.loc/api/users').then((response) => {
                    if (Object.keys(response.data).length !== 0) {
                        this.products = this.$store.state.products = response.data
                    } else {
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

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    .products {
        margin-top: 30px;
        padding: 15px;
    }

    .product-box {

    }

    .image {
        width: 250px;
        height: 250px;
    }

    .dark-image {
        width: 250px;
        height: 250px;
        background-color: rebeccapurple;
    }

    .title {

    }

    .desc {

    }

    .price {

    }
</style>