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
import Pay from '@/views/Pay.vue';
import Orders from '@/views/Orders.vue';
import OrderDetail from '@/views/OrderDetail.vue';
import About from '@/views/About.vue';
import PrivacyPolicy from '@/views/PrivacyPolicy.vue';
import TermsOfUse from '@/views/TermsOfUse.vue';
import SalesAndRefunds from '@/views/SalesAndRefunds.vue';

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
    name: 'Dashboard',
    component: Dashboard,
    redirect: 'home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home,
      },
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
      {
        path: 'pay/:orderId',
        name: 'Pay',
        component: Pay,
      },
      {
        path: 'orders',
        name: 'Orders',
        component: Orders,
      },
      {
        path: 'order-detail/:orderId',
        name: 'OrderDetail',
        component: OrderDetail,
      },
      {
        path: 'about',
        name: 'About',
        component: About,
      },
      {
        path: 'privacyPolicy',
        name: 'PrivacyPolicy',
        component: PrivacyPolicy,
      },
      {
        path: 'termsOfUse',
        name: 'TermsOfUse',
        component: TermsOfUse,
      },
      {
        path: 'salesAndRefunds',
        name: 'SalesAndRefunds',
        component: SalesAndRefunds,
      },
    ],
  },
];

const router = new VueRouter({
  // remove hashbang #! from url 參考 https://stackoverflow.com/questions/34623833/vue-js-how-to-remove-hashbang-from-url
  // mode: 'history',
  routes,
});

export default router;
