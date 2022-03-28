import {createRouter, createWebHistory} from 'vue-router'

const Layout = () => import('../pages/Layout.vue')
const Home = () => import('../pages/Home.vue')


const routes = [
    {
        path: '/', name: 'layout', component: Layout,
        children: [
            {
                path: '/',
                component: Home
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router
