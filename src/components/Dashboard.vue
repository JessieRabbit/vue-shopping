<template>
  <div>
    <Navbar :cartItems="cartItems"/>
    <Breadcrumb :currentPage="currentPage"/>
    <main>
      <router-view @emitAddtoCart="(item) => addtoCart(item)"></router-view>
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
  data() {
    return {
      cartItems: [],
    };
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
  methods: {
    // 加入購物車
    addtoCart(itemToAdd) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      const cart = {
        product_id: itemToAdd.id,
        qty: itemToAdd.qty || 1,
      };
      this.$http.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          this.$bus.$emit('message:push', response.data.message, 'success');
          const itemInCart = this.cartItems.filter((item) => item.id === itemToAdd.id);
          const isItemInCart = itemInCart.length > 0;
          if (!isItemInCart) {
            // https://contactmentor.com/add-property-to-object-javascript/
            this.cartItems.push({ ...itemToAdd, qty: 1 });
          } else {
            if (itemToAdd.qty) {
              itemInCart[0].qty += itemToAdd.qty;
            }
            itemInCart[0].qty += 1;
          }
        }
      });
    },
  },
};
</script>
