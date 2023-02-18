import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'
const app = createApp(App);
const pinia = createPinia()

app.use(VueAxios, axios)
app.use(pinia)

app.mount('#app')