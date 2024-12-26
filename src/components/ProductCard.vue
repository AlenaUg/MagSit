<template>
    <div>
      <h2>{{ product.name }}</h2>
      <p>Цена: {{ product.price }} руб.</p>
      <router-link :to="'/product/' + product.id">Просмотр</router-link>
      <button @click="addToCart(product)">Добавить в корзину</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
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
  