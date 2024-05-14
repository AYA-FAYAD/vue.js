import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/index.css'
import './assets/main.css'

const app = createApp(App)
// app.provide(/* key */ 'message', /* value */ 'hello from app level!')

app.use(createPinia())
app.use(router)

app.mount('#app')
