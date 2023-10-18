import { createRouter, createWebHistory } from 'vue-router'
import StoreView from '../views/StoreView.vue'
import BasketView from '../views/BasketView.vue'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: StoreView
        },
        {
            path: '/backet',
            name: 'backet',
            component: BasketView

        }
    ]
})

export default router