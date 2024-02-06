<template>
  <div>
    <Navbar :cartItems="cartItems" @offcanvasShow="getCarts"/>
    <Breadcrumb :currentPage="currentPage"/>
    <main>
      <router-view @emitAddtoCart="(item) => addtoCart(item)"></router-view>
    </main>
    <Footer/>
    <!-- CartOffcanvas Start -->
    <CartOffcanvas
      :cart="cart"
      :isCartLoading="isCartLoading"
      @emitGetCarts="getCarts"
    />
    <!-- CartOffcanvas end -->

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
import CartOffcanvas from './CartOffcanvas.vue';

export default {
  name: 'DashboardView',
  components: {
    Navbar,
    Footer,
    Breadcrumb,
    SearchModal,
    CartOffcanvas,
  },
  data() {
    return {
      cartItems: [],
      cart: {},
      isCartLoading: false,
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
        case 'Checkout':
          return 'Checkout';
        case 'Testimonial':
          return 'Testimonial';
        case 'Contact':
          return 'Contact';
        case 'Pay':
          return 'Pay';
        case 'Orders':
          return 'Orders';
        case 'OrderDetail':
          return 'OrderDetail';
        case 'About':
          return 'About';
        case 'PrivacyPolicy':
          return 'PrivacyPolicy';
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
            if (itemToAdd.qty > 1) {
              this.cartItems.push({ ...itemToAdd, qty: itemToAdd.qty });
            } else {
              this.cartItems.push({ ...itemToAdd, qty: 1 });
            }
          } else if (itemToAdd.qty > 1) {
            itemInCart[0].qty += itemToAdd.qty;
          } else {
            itemInCart[0].qty += 1;
          }
        }
      });
    },
    // 取得購物車商品
    getCarts() {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      const vm = this;
      vm.isCartLoading = true;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.isCartLoading = false;
      });
    },
  },
};
</script>
