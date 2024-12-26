<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>Цена: {{ product.price }} руб.</p>
    <button @click="addToCart(product)">Добавить в корзину</button>
    <router-link to="/">Назад</router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'ProductPage', // Измените имя компонента
  setup() {
    const product = ref({});

    onMounted(() => {
      const productId = parseInt(window.location.pathname.split('/').pop());
      const products = [
        { id: 1, name: 'Товар 1', price: 100 },
        { id: 2, name: 'Товар 2', price: 200 },
        { id: 3, name: 'Товар 3', price: 300 },
      ];
      product.value = products.find(p => p.id === productId);
    });

    const addToCart = (product) => {
      alert(`${product.name} добавлен в корзину!`);
    };

    return { product, addToCart };
  },
};
</script>
