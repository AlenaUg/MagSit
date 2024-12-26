<template>
  <div>
    <h1>Магазин</h1>
    <ProductList :products="products" @add-to-cart="addToCart" />
    <router-link to="/cart">Перейти в корзину</router-link>
  </div>
</template>

<script>
import { ref } from 'vue';
import ProductList from '../components/ProductList.vue';

export default {
  name: 'HomePage',
  components: { ProductList },
  setup() {
    const products = ref([
      { id: 1, name: 'Товар 1', price: 100 },
      { id: 2, name: 'Товар 2', price: 200 },
      { id: 3, name: 'Товар 3', price: 300 },
    ]);

    const addToCart = (product) => {
      // Логика добавления товара в корзину
      alert(`${product.name} добавлен в корзину!`);
    };

    return { products, addToCart };
  },
};
</script>
