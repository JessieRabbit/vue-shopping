import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/components/Dashboard.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import Shop from '@/views/Shop.vue';
import ShopDetail from '@/views/ShopDetail.vue';
import Cart from '@/views/Cart.vue';
import Chackout from '@/views/Chackout.vue';
import Testimonial from '@/views/Testimonial.vue';
import ErrorPage from '@/views/ErrorPage.vue';
import Contact from '@/views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: '404Page',
    component: ErrorPage,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/page',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'shop',
        name: 'Shop',
        component: Shop,
      },
      {
        path: 'shop-detail',
        name: 'ShopDetail',
        component: ShopDetail,
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart,
      },
      {
        path: 'chackout',
        name: 'Chackout',
        component: Chackout,
      },
      {
        path: 'testimonial',
        name: 'Testimonial',
        component: Testimonial,
      },
      {
        path: 'contact',
        name: 'Contact',
        component: Contact,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
