<template>
    <div class="product-box">
        <div class="mt-2 image"></div>
        <div class="mt-2 title"></div>
        <div class="mt-2 desc"></div>
        <div class="mt-1 desc"></div>
        <div class="mt-1 desc"></div>
        <div class="mt-2 mb-2 price"></div>
    </div>
</template>

<script>
    export default {
        name: "SkeletonProduct"
    }
</script>

<style scoped>
    .product-box {
        padding-left: 10px;
        padding-right: 10px;
        text-align: left;
        border-radius: 10px;
        float: left;
    }

    .image {
        width: 250px;
        height: 250px;
    }

    .title {
        width: 90%;
        height: 25px;
    }

    .desc {
        width: 80%;
        height: 10px;
    }

    .price {
        width: 25%;
        height: 25px;
    }

    .product-box div {
        background-color: #BEBEBE;
    }
</style>