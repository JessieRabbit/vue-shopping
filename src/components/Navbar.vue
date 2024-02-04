<template>
  <div>
    <Alert/>
    <div class="container-fluid fixed-top" @scroll="handleScroll">
      <div class="container topbar bg-primary d-none d-lg-block">
        <div class="d-flex justify-content-between">
          <div class="top-info ps-2">
            <small class="me-3">
              <i class="fas fa-map-marker-alt me-2 text-secondary"></i>
              <a href="javascript:void(0);" class="text-white">123 Street, New York</a>
            </small>
            <small class="me-3">
              <i class="fas fa-envelope me-2 text-secondary"></i>
              <a href="javascript:void(0);" class="text-white">Email@Example.com</a>
            </small>
          </div>
          <div class="top-link pe-2">
            <a href="javascript:void(0);" class="text-white">
              <small class="text-white mx-2">Privacy Policy</small>/
            </a>
            <a href="javascript:void(0);" class="text-white">
              <small class="text-white mx-2">Terms of Use</small>/
            </a>
            <a href="javascript:void(0);" class="text-white">
              <small class="text-white ms-2">Sales and Refunds</small>
            </a>
          </div>
        </div>
      </div>
      <div class="container px-0">
        <nav class="navbar navbar-light bg-white navbar-expand-xl">
          <a href="/" class="navbar-brand">
            <h1 class="text-primary display-6">Fruitables</h1>
          </a>
          <button
            class="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="fa fa-bars text-primary"></span>
          </button>
          <div class="collapse navbar-collapse bg-white" id="navbarCollapse">
            <div class="navbar-nav mx-auto">
              <router-link class="nav-item nav-link" to="/">Home</router-link>
              <router-link class="nav-item nav-link" to="/page/shop">Shop</router-link>
              <div class="nav-item dropdown">
                <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#">
                  Pages
                </router-link>
                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                  <router-link class="dropdown-item" to="/page/cart">Cart</router-link>
                  <router-link class="dropdown-item" to="/page/chackout">Chackout</router-link>
                  <router-link class="dropdown-item" to="/page/testimonial">
                    Testimonial
                  </router-link>
                  <router-link class="dropdown-item" to="*">404 Page</router-link>
                </div>
              </div>
              <router-link class="nav-item nav-link" to="/page/contact">Contact</router-link>
            </div>
            <div class="d-flex m-3 me-0">
              <button
                class="btn-search btn border border-secondary
                btn-md-square rounded-circle bg-white me-4"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i class="fas fa-search text-primary"></i>
              </button>
              <a href="javascript:void(0);" class="position-relative me-4 my-auto"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                @click.prevent="$emit('offcanvasShow')"
              >
                <i class="fa fa-shopping-bag fa-2x"></i>
                <span class="position-absolute bg-secondary
                  rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                  style="top: -5px; left: 15px; height: 20px; min-width: 20px">
                  {{ totalItems }}
                </span>
              </a>
              <a href="/login" class="my-auto" aria-label="Auto">
                <i class="fas fa-user fa-2x"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import Alert from './AlertMessage.vue';

export default {
  name: 'NavbarView',
  components: {
    Alert,
  },
  props: {
    cartItems: Array,
  },
  computed: {
    // 計算購物車產品數量
    totalItems() {
      return this.cartItems.reduce((accumulator, item) => accumulator + item.qty, 0);
    },
  },
  methods: {
    // nav scroll 參考網址
    // https://stackoverflow.com/questions/52534477/add-remove-class-on-scroll-in-vuejs
    // https://medium.com/@michelle210181/%E6%80%8E%E9%BA%BC%E5%9C%A8-vue-%E8%A3%A1%E9%9D%A2%E7%9B%A3%E8%81%BD-scroll-7e6abc2746d9
    // https://stackoverflow.com/questions/5195303/set-css-property-in-javascript
    handleScroll() {
      const navheader = document.querySelector('.fixed-top');

      if ($(window).width() < 992) {
        if (window.scrollY > 55) {
          navheader.classList.add('shadow');
        } else {
          navheader.classList.remove('shadow');
        }
      } else if (window.scrollY > 55) {
        navheader.classList.add('shadow');
        navheader.style.top = '-55px';
      } else {
        navheader.classList.remove('shadow');
        navheader.style.top = '0px';
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>
