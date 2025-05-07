import './assets/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MyUILib from './plugin' // plugin.js
import { useApiMode } from './stores/apiMode'

const app = createApp(App)
const { setApiMode } = useApiMode();
setApiMode(import.meta.env.VITE_API_MODE || 'options')

app.use(router)
app.use(MyUILib) // 전역 등록

app.mount('#app')
