import {creatRouter，createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    }
]

const router = creatRouter({ 
    history: createWebHashHistory(),
    routes
})

export default router