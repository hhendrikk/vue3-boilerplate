import { createRouter, createWebHashHistory } from 'vue-router'
import MainPage from '@/pages/main.page.vue'

const routes = [
  { path: '/', component: MainPage },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
