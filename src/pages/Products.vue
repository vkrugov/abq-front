<template>
    <div class="products">
        <div v-if="status !== ''">
            <transition name="fade">
                <div class="row" v-if="status === 'success'" key='product'>
                    <div class="col-md-3" v-for="product in products" :key="product">
                        <div class="product-box">
                            <div class="mt-2" :class="(product.img ? 'image' : 'dark-image')">{{ product.img }}</div>
                            <div class="mt-2 title">{{ product.name }}</div>
                            <div class="row">
                                <div class="col-md 9">
                                    <div class="mt-2 desc">{{ product.desc }}</div>
                                    <div class="mt-2 mb-2 price">{{ (product.cost).toFixed(2) }} ₴</div>
                                </div>
                                <div class="col-md-3">
                                    <a class="btn btn-success add-to-cart" @click="addToCart($event, product.id)">
                                        <b-icon icon="archive"></b-icon>
                                    </a>
                                </div>
                            </div>
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
    import {mapState} from 'vuex';
    import SkeletonProduct from '../components/SkeletonProduct'
    import {ADD_TO_CART, GET_PRODUCTS} from "../store/actions/product.actions";
    //import api from "../config";

    export default {
        name: "Products",
        data() {
            return {
            }
        },
        components: {
            appSkeletonProduct: SkeletonProduct
        },
        computed: mapState({
            products: (state) => state.product.products,
            status: (state) => state.product.status
        }),
        methods: {
            getProducts() {
                 this.$store.dispatch(GET_PRODUCTS);
            },
           addToCart(event, productId) {
               this.$store.dispatch(ADD_TO_CART, productId);
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
        display: block;
    }

    .product-box:hover {
        background-color: rgba(255, 222, 158, 0.31);
    }

    .image {
        width: 250px;
        height: 250px;
    }

    .dark-image {
        width: 100%;
        height: 350px;
        background-color: rebeccapurple;
    }

    .title {
        font-size: 16px;
        color: darkred;
    }

    .desc {
        font-size: 12px;
        color: darkgray;
    }

    .add-to-cart {
        font-size: 20px;
        color: aliceblue;
        transition: 0.2s;
    }

    .add-to-cart:hover {
        font-size: 22px;
        color: aliceblue;
    }

    .price {
    }
</style>