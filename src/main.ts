import './assets/main.css'
import 'buefy/dist/css/buefy.css'

import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from 'pinia'
import router from './router'
import Buefy from 'buefy'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Buefy)

app.mount('#app')
