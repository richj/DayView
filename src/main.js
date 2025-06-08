import './assets/main.css'
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App);
app.provide('bootstrap', bootstrap);
app.mount('#app');
// createApp(App).mount('#app')
