<template>
    <div>
      <h1>Корзина</h1>
      <ul>
        <li v-for="item in cart" :key="item.id">
          {{ item.name }} - {{ item.price }} руб.
        </li>
      </ul>
      <p v-if="cart.length === 0">Корзина пуста.</p>
      <p v-if="cart.length > 0">Общая стоимость: {{ totalPrice }} руб.</p>
      <router-link to="/">Вернуться в магазин</router-link>
    </div>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  export default {
    setup() {
      const cart = ref(JSON.parse(localStorage.getItem('cart')) || []);
  
      const totalPrice = computed(() => {
        return cart.value.reduce((total, item) => total + item.price, 0);
      });
  
      return { cart, totalPrice };
    },
  };
  </script>
  