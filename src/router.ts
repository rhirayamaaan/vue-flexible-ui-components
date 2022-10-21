import { createRouter, createWebHistory } from 'vue-router'
import Top from './components/pages/Top.vue'
import Article from './components/pages/Article.vue'

const routes = [
  { path: '/', component: Top },
  { path: '/article', component: Article },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
