<template>
  <div>
    <Alert/>
    <div class="container-fluid fixed-top" @scroll="handleScroll">
      <div class="container topbar bg-primary d-none d-lg-block">
        <div class="d-flex justify-content-between">
          <div class="top-info ps-2">
            <small class="me-3">
              <i class="fas fa-map-marker-alt me-2 text-secondary"></i>
              <a href="javascript:void(0);" class="text-white">123 Street Tapiei</a>
            </small>
            <small class="me-3">
              <i class="fas fa-envelope me-2 text-secondary"></i>
              <a href="javascript:void(0);" class="text-white">shenFamily@gmail.com</a>
            </small>
          </div>
          <div class="top-link pe-2">
            <router-link to="/privacyPolicy">
              <a href="javascript:void(0);" class="text-white">
                <small class="text-white mx-2">Privacy Policy</small>/
              </a>
            </router-link>
            <router-link to="/termsOfUse">
              <a href="javascript:void(0);" class="text-white">
                <small class="text-white mx-2">Terms of Use</small>/
              </a>
            </router-link>
            <router-link to="/salesAndRefunds">
              <a href="javascript:void(0);" class="text-white">
                <small class="text-white ms-2">Sales and Refunds</small>
              </a>
            </router-link>
          </div>
        </div>
      </div>
      <div class="container px-0">
        <nav class="navbar navbar-light bg-white navbar-expand-xl">
          <router-link to="/home">
            <a href="javascript:void(0);">
              <h1 class="text-primary display-6">Fruitables</h1>
            </a>
          </router-link>
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
              <router-link class="nav-item nav-link" to="/home">Home</router-link>
              <router-link class="nav-item nav-link" to="/shop">Shop</router-link>
              <router-link class="nav-item nav-link" to="/orders">Orders</router-link>
              <router-link class="nav-item nav-link" to="/testimonial">Testimonial</router-link>
              <router-link class="nav-item nav-link" to="/contact">Contact</router-link>
              <!-- 保留 -->
              <!-- <div class="nav-item dropdown">
                <router-link class="nav-link dropdown-toggle" data-bs-toggle="dropdown" to="#">
                  Pages
                </router-link>
                <div class="dropdown-menu m-0 bg-secondary rounded-0">
                  <router-link class="dropdown-item" to="/cart">Cart</router-link>
                  <router-link class="dropdown-item" to="/checkout">Chackout</router-link>
                  <router-link class="dropdown-item" to="/testimonial">
                    Testimonial
                  </router-link>
                  <router-link class="dropdown-item" to="*">404 Page</router-link>
                </div>
              </div> -->
            </div>
            <div class="d-flex m-3 me-0">
              <!-- 保留 -->
              <!-- <button
                class="btn-search btn border border-secondary
                btn-md-square rounded-circle bg-white me-4"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
              >
                <i class="fas fa-search text-primary"></i>
              </button> -->
              <a href="javascript:void(0);" class="position-relative me-4 my-auto"
                data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
                @click.prevent="$emit('offcanvasShow')"
                v-if="isCartIcon"
              >
                <i class="fa fa-shopping-bag fa-2x"></i>
                <span class="position-absolute bg-secondary
                  rounded-circle d-flex align-items-center justify-content-center text-dark px-1"
                  style="top: -5px; left: 15px; height: 20px; min-width: 20px">
                  {{ totalItems }}
                </span>
              </a>
              <template v-if="!isLogin">
                <router-link to="/login">
                  <a href="javascript:void(0);" class="my-auto" aria-label="Auto">
                    <i class="fas fa-user fa-2x"></i>
                  </a>
                </router-link>
              </template>
              <template v-else>
                <a href="javascript:void(0);" class="my-auto" aria-label="Auto"
                  @click.prevent="logout">
                  <i class="fas fa-door-closed fa-2x"></i>
                </a>
              </template>
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
    totalItems: Number,
    currentPage: String,
  },
  computed: {
    isLogin() {
      return JSON.parse(localStorage.getItem('login'));
    },
    // 是否顯示購物車 icon
    isCartIcon() {
      const vm = this;
      if (vm.currentPage === 'Cart' || vm.currentPage === 'Checkout'
        || vm.currentPage === 'Pay' || !vm.currentPage) {
        return false;
      }
      return true;
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
    logout() {
      const api = `${process.env.VUE_APP_API_PATH}/logout`;
      const vm = this;
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          localStorage.removeItem('login');
          vm.$router.push('/login');
        }
      });
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
