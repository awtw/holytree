import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'
import Feature from '../components/Feature.vue'
import Product from '../components/Product.vue'
import AboutMe from '../components/AboutMe.vue'

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/Contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/AboutMe',
            name: 'AboutMe',
            component: AboutMe
        },
        {
            path: '/Feature',
            name: 'Feature',
            component: Feature
        },
        {
            path: '/Product',
            name: 'Product',
            component: Product
        },
    ]
})

export default router