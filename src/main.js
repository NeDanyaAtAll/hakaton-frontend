import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createPinia } from 'pinia'
import Popper from "vue3-popper";

const app = createApp(App);
const pinia = createPinia()

app.use(VueAxios, axios)
app.use(pinia)
app.use("Popper", Popper)

app.mount('#app')