import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/styles/reset.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import yButton from './components/button/index.vue';
const app = createApp(App)
app.component('yButton', yButton);
app.use(router)
app.use(ElementPlus)
app.mount('#app')

