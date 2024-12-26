<template>
    <div>
      <div v-for="product in products" :key="product.id">
        <ProductCard :product="product" @add-to-cart="addToCart" />
      </div>
    </div>
  </template>
  
  <script>
  import ProductCard from './ProductCard.vue';
  
  export default {
    components: { ProductCard },
    props: {
      products: Array,
    },
    emits: ['add-to-cart'],
    setup(props, { emit }) {
      const addToCart = (product) => {
        emit('add-to-cart', product);
      };
  
      return { addToCart };
    },
  };
  </script>
  