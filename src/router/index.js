import { createRouter, createWebHistory } from 'vue-router'
import WorldLiterature from '../views/WorldLiterature.vue'
import NationalLiterature from '../views/NationalLiterature.vue'

const routes = [
  { path: '/world', component: WorldLiterature },
  { path: '/national', component: NationalLiterature }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
