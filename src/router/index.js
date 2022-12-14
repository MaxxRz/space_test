import { createRouter, createWebHashHistory } from 'vue-router'


import HomeApp from '@/views/Home.vue';
import Destination from '@/views/Destination.vue';
import Crew from '@/views/Crew.vue';

const routes = [
  {
    path: '',
    name: 'Home',
    component: HomeApp,
    props: true,
  },
  {
    path: '/destination',
    name: 'Destination',
    component: Destination
  },
  {
    path: '/crew',
    name: 'Crew',
    component: Crew
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;
