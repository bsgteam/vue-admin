import { createApp } from 'vue'
import '@/style/style.css'
import App from './App.vue'
import router from '@/routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const app = createApp(App)

app.use(router).mount('#app')
import 'bootstrap/dist/js/bootstrap.js';