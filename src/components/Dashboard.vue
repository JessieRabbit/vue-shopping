<template>
  <div>
    <Navbar :cartItems="cartItems" @offcanvasShow="getCarts" :totalItems="totalItems"/>
    <Breadcrumb :currentPage="currentPage" v-if="currentPage !=='Home'"/>
    <main>
      <router-view @emitAddtoCart="(item) => addtoCart(item)"></router-view>
    </main>
    <Footer/>
    <!-- CartOffcanvas Start -->
    <CartOffcanvas
      :cart="cart"
      :isCartLoading="isCartLoading"
      @emitRemoveCart="(id) => removeToCart(id)"
      @emitAddtoCart="(item) => addtoCart(item)"
      @emitPlusAndminustoCart = "(item, action) => plusAndminusItem(item, action)"
    />
    <!-- CartOffcanvas end -->

    <!-- Back to Top Start -->
    <BackToTop/>
    <!-- Back to Top end -->

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
import BackToTop from './BackToTop.vue';
import CartOffcanvas from './CartOffcanvas.vue';

export default {
  name: 'DashboardView',
  components: {
    Navbar,
    Footer,
    Breadcrumb,
    SearchModal,
    BackToTop,
    CartOffcanvas,
  },
  data() {
    return {
      cartItems: [],
      cart: [],
      isCartLoading: false,
      totalItems: 0,
    };
  },
  computed: {
    // 取得路徑顯示麵包屑名稱
    currentPage() {
      const vm = this;
      switch (vm.$route.name) {
        case 'Home':
          return 'Home';
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
    // 取得購物車商品
    getCarts() {
      const vm = this;
      vm.cart = JSON.parse(localStorage.getItem('cart'));
    },
    // 計算購物車產品總數量
    getTotalItems() {
      const vm = this;
      vm.cart = JSON.parse(localStorage.getItem('cart'));
      if (vm.cart && vm.cart.length > 0) {
        vm.totalItems = vm.cart.reduce((accumulator, item) => accumulator + item.qty, 0);
      } else {
        vm.totalItems = 0;
      }
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cartItems));
      this.getTotalItems();
    },
    // 加入購物車
    addtoCart(itemToAdd) {
      const vm = this;
      this.getCarts();
      this.$bus.$emit('message:push', '加入購物車成功', 'success');
      let itemInCart = [];
      if (vm.cart) {
        itemInCart = vm.cart.filter((item) => item.id === itemToAdd.id);
      }
      const isItemInCart = itemInCart.length > 0;
      if (!isItemInCart) {
        this.cartItems.push({ ...itemToAdd, qty: 1 });
      } else {
        Object.keys(this.cartItems).forEach((item) => {
          if (this.cartItems[item].id === itemToAdd.id) {
            if (itemToAdd.qty) {
              this.cartItems[item].qty += itemToAdd.qty;
            } else {
              this.cartItems[item].qty += 1;
            }
          }
        });
      }

      this.saveCart();
    },
    removeToCart(id) {
      if (this.cartItems.length === 0) {
        this.cartItems = JSON.parse(localStorage.getItem('cart'));
      }

      this.cartItems.forEach((item, i) => {
        if (item.id === id) {
          this.cartItems.splice(i, 1);
        }
      });

      this.saveCart();
      this.getCarts();
    },
    plusAndminusItem(item, action) {
      const vm = this;
      vm.cartItems = JSON.parse(localStorage.getItem('cart'));
      Object.keys(vm.cartItems).forEach((i) => {
        if (vm.cartItems[i].id === item.id) {
          if (action === 'plus') {
            vm.cartItems[i].qty += 1;
          } else {
            vm.cartItems[i].qty -= 1;
          }
        }
      });

      this.saveCart();
    },
  },
  created() {
    this.getTotalItems();
  },
};
</script>
