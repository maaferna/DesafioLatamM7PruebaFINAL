import { createRouter, createWebHistory } from 'vue-router';
import Home from '../src/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  {path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/views/NotFound.vue')},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
