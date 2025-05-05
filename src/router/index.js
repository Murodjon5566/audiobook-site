import { createRouter, createWebHistory } from 'vue-router'
import WorldLiterature from '../pages/WorldLiterature.vue'
import NationalLiterature from '../pages/NationalLiterature.vue'

const routes = [
    { path: '/world', component: WorldLiterature },
    { path: '/national', component: NationalLiterature }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router