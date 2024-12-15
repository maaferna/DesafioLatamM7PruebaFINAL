import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
import { createTestingPinia } from '@pinia/testing';
import App from '@/App.vue';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

describe('Vue Router', () => {
  it('renders the Home component through the route', async () => {
    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, createTestingPinia()],
      },
    });
    expect(wrapper.text()).toContain('Contador Pinia:'); 
  });

  it('renders the About component through the route', async () => {
    router.push('/about');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router, createTestingPinia()],
      },
    });
    expect(wrapper.text()).toContain('Acerca del Proyecto'); 
  });
});
