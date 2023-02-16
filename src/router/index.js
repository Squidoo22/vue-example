import { createRouter, createWebHistory } from 'vue-router';
import { store } from '@/store/index.js';

const ifNotAuthenticated = (to, from, next) => {
    const isAuthenticated = store.getters['users/isAuthenticated'];

    if (isAuthenticated) {
        next();

        return;
    }

    next('/auth');
};

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/ProfileView.vue'),
            beforeEnter: ifNotAuthenticated
        },

        {
            path: '/auth',
            name: 'auth',
            component: () => import('@/views/AuthView.vue')
        },

        {
            path: '/:pathMatch(.*)',
            name: 'not-found',
            component: () => import('@/views/NotFoundView.vue')
        }
    ]
});

export default router;
