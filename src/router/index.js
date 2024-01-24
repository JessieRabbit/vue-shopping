import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/components/Dashboard.vue';
import ShoppingCart from '@/views/ShoppingCart.vue';

Vue.use(VueRouter);

const routes = [
  // 輸入不存在頁面導到購物首頁
  {
    path: '*',
    redirect: 'shoppingCart',
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: 'shoppingCart',
        name: 'ShoppingCart',
        component: ShoppingCart,
        meta: { requiresAuth: true },
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
