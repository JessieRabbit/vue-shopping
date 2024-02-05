import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/components/Dashboard.vue';
import Login from '@/views/Login.vue';
import Home from '@/views/Home.vue';
import Shop from '@/views/Shop.vue';
import ShopDetail from '@/views/ShopDetail.vue';
import Cart from '@/views/Cart.vue';
import Checkout from '@/views/Checkout.vue';
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
        path: 'shop-detail/:productId',
        name: 'ShopDetail',
        component: ShopDetail,
      },
      {
        path: 'cart',
        name: 'Cart',
        component: Cart,
      },
      {
        path: 'checkout',
        name: 'Checkout',
        component: Checkout,
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
  // remove hashbang #! from url 參考 https://stackoverflow.com/questions/34623833/vue-js-how-to-remove-hashbang-from-url
  mode: 'history',
  routes,
});

export default router;
