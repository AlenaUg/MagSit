<template>
    <div>
      <h1>Корзина</h1>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - {{ item.price }} руб.
        </li>
      </ul>
      <p v-if="cart.length === 0">Корзина пуста.</p>
      <router-link to="/">Вернуться в магазин</router-link>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup() {
      const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);
  
      return { cart };
    },
  };
  </script>
  