import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' // Importamos Vuex
import ElementPlus from 'element-plus' // Importamos UI Library
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)
app.use(store) // Conectamos Vuex
app.use(ElementPlus) // Conectamos UI Library

app.mount('#app')