import './assets/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '../router';

import App from './App.vue';

const app = createApp(App)

app.use(createPinia())

app.use(router).mount('#app')