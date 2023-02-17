import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(VueAxios, axios, createPinia())
app.mount('#app')