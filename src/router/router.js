import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/coms/Home.vue';
import CompanyIntro from '../components/coms/CompanyIntro.vue';
import CompanyHistory from '../components/coms/CompanyHistory.vue';
import AcKang from '../components/coms/AcKang.vue';

const routes = [
    { path: '/', redirect: '/home' }, // 기본 리디렉션
    { path: '/home', component: Home},
    { path: '/companyintro', component: CompanyIntro},
    { path: '/companyhistory', component: CompanyHistory},
    { path: '/ackang', component: AcKang},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;