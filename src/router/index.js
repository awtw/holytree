import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Contact from '../components/Contact.vue'
import Experiment from '../components/Experiment.vue'
import Feature from '../components/Feature.vue'
import Product from '../components/Product.vue'

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
            path: '/Experiment',
            name: 'Experiment',
            component: Experiment
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