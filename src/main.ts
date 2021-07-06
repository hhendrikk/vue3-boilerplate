import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'

import '@/assets/css/main.css'
import '@/assets/css/components.css'
import useFortAwesome from './plugins/font-awesome'

const app = createApp(App)

/**
 * Plugins
 */
useFortAwesome(app)

app.use(store).use(router).mount('#app')
