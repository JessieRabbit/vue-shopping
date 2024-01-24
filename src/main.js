import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
// 需註冊 BS5 carousel 才會生效
import 'bootstrap';
import 'jquery';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
  configure,
} from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import * as rules from 'vee-validate/dist/rules';
// 需註冊 owl.carousel 才會生效 https://github.com/OwlCarousel2/OwlCarousel2
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';

import App from './App.vue';
import router from './router';
import './bus';
import currencyFilter from './filters/currency';
import dateFilter from './filters/date';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});
// eslint-disable-next-line vue/multi-word-component-names
Vue.component('Loading', Loading);
Vue.filter('currency', currencyFilter);
Vue.filter('date', dateFilter);

axios.defaults.withCredentials = true;

// 模板參考 https://themewagon.com/theme-price/free/?swoof=1&product_tag=ecommerce-template&paged=1&pa_price=free&pa_frameworks=bootstrap-5&really_curr_tax=40-pa_price
// https://themewagon.github.io/fruitables/
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
