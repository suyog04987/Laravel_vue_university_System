import "bootstrap";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'vue-multiselect/dist/vue-multiselect.css';
import './assets/main.scss';


import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);
const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia);
app.use(router)

app.mount('#app');
