import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'; // Обновите путь
import ProductPage from '../views/ProductPage.vue'; // Обновите путь
import CartPage from '../views/CartPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/product/:id', component: ProductPage },
  { path: '/cart', component: CartPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
