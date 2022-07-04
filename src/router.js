import { createRouter, createWebHistory } from 'vue-router';
import CoachesList from './components/pages/CoachesList.vue';
import RequestsList from './components/pages/RequestsList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', redirects: '/coaches' },
        { path: '/coaches', component: CoachesList },
        {
            path: '/coaches/:id', component: null, children: [
                { path: 'contact', component: null },
            ]
        },
        { path: '/register', component: null },
        { path: '/requests', component: RequestsList },
        { path: '/:notFound(.*)', component: null },
    ]
});

export default router;