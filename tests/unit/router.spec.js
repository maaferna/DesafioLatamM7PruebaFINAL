import { mount } from '@vue/test-utils';
import { createRouter, createWebHistory } from 'vue-router';
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
  it('renderiza el componente Home a través de la ruta', async () => {
    router.push('/');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.findComponent(Home).exists()).toBe(true);
  });

  it('renderiza el componente About a través de la ruta', async () => {
    router.push('/about');
    await router.isReady();
    const wrapper = mount(App, {
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.findComponent(About).exists()).toBe(true);
  });
});
