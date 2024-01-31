<template>
  <div>
    <Navbar/>
    <Breadcrumb :currentPage="currentPage"/>
    <main>
      <router-view></router-view>
    </main>
    <Footer/>

    <!-- Modal Search Start -->
    <SearchModal/>
    <!-- Modal Search End -->
  </div>
</template>

<script>
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
import Breadcrumb from './Breadcrumb.vue';
import SearchModal from './SearchModal.vue';

export default {
  name: 'DashboardView',
  components: {
    Navbar,
    Footer,
    Breadcrumb,
    SearchModal,
  },
  computed: {
    // 取得路徑顯示麵包屑名稱
    currentPage() {
      const vm = this;
      switch (vm.$route.name) {
        case 'Shop':
          return 'Shop';
        case 'ShopDetail':
          return 'Shop Detail';
        case 'Cart':
          return 'Cart';
        case 'Chackout':
          return 'Chackout';
        case 'Testimonial':
          return 'Testimonial';
        case 'Contact':
          return 'Contact';
        default:
          return '404 Error';
      }
    },
  },
};
</script>
