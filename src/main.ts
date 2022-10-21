import { createApp } from 'vue'
import 'destyle.css'
import './reset.scss'
import router from './router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
