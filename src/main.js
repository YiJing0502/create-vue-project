import './assets/main.css';
// 載入 vue
import { createApp } from 'vue';
// 載入 Pinia
import { createPinia } from 'pinia';
// 載入 vue-axios
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
// eslint-disable-next-line import/no-extraneous-dependencies
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.mount('#app');
