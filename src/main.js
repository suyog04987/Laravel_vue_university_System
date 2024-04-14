import './assets/main.css'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'

const app = createApp(App);
const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia);
app.use(router)

app.mount('#app');
