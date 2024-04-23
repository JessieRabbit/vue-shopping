<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <!-- Loading Spinner Start -->
    <Spinner :isLoading="isLoading"/>
    <!-- Loading Spinner End -->
    <div class="container-fluid py-5">
      <div class="container py-5">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Products</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in cart" :key="item.id" >
                <th scope="row">
                  <div class="d-flex align-items-center">
                    <img
                      :src="item.imageUrl"
                      class="img-fluid me-5 rounded-circle"
                      style="width: 80px; height: 80px"
                      alt=""
                    />
                  </div>
                </th>
                <td>
                  <p class="mb-0 mt-4">{{ item.title }}</p>
                  <div class="text-success" v-if="item.coupon">
                    已套用優惠碼
                  </div>
                </td>
                <td>
                  <p class="mb-0 mt-4">{{ item.price | currency }}</p>
                </td>
                <td>
                  <div class="input-group quantity mt-4" style="width: 100px">
                    <div class="input-group-btn">
                      <button class="btn btn-sm btn-minus rounded-circle bg-light border"
                        @click.prevent="[$emit('emitPlusAndMinustoCart', item, 'minus'),
                          item.qty --]"
                        :disabled="item.qty === 1"
                      >
                        <i class="fa fa-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control form-control-sm text-center border-0"
                      value="1"
                      v-model="item.qty"
                    />
                    <div class="input-group-btn">
                      <button class="btn btn-sm btn-plus rounded-circle bg-light border"
                        @click.prevent="[$emit('emitPlusAndMinustoCart', item, 'plus'),
                          item.qty ++]"
                      >
                        <i class="fa fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td>
                  <p class="mb-0 mt-4">{{ item.qty * item.price | currency }}</p>
                </td>
                <td>
                  <button class="btn btn-md rounded-circle bg-light border mt-4"
                    @click="removeCartItem(item.id)"
                  >
                    <i class="fa fa-times text-danger"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="row g-4 justify-content-end">
          <div class="col-8"></div>
          <div class="col-sm-8 col-md-7 col-lg-6 col-xl-4">
            <div class="bg-light rounded">
              <div class="p-4">
                <h1 class="display-6 mb-4">Cart <span class="fw-normal">Total</span></h1>
                <div class="d-flex justify-content-between mb-4">
                  <h5 class="mb-0 me-4">Total:</h5>
                  <p class="mb-0">{{ total | currency }}</p>
                </div>
              </div>
              <div v-if="cart.final_total !== cart.total"
                class="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                <h5 class="mb-0 ps-4 me-4">Discount</h5>
                <p class="mb-0 pe-4">
                  {{ cart.final_total | currency }}
                </p>
              </div>
              <button
                class="btn border-secondary rounded-pill px-4 py-3
                text-primary text-uppercase mb-4 ms-4"
                type="button"
                @click.prevent="gotoCheckout"
              >
                Proceed Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'CartPage',
  components: {
    Spinner,
  },
  data() {
    return {
      cart: {},
      isLoading: false,
    };
  },
  computed: {
    // 計算總價
    total() {
      let total = 0;
      const vm = this;
      if (!vm.cart) {
        return 0;
      }
      vm.cart.forEach((item) => {
        total += (parseFloat(item.price) * item.qty);
      });
      return total;
    },
  },
  methods: {
    // 取得購物車商品
    getCarts() {
      const vm = this;
      vm.cart = JSON.parse(localStorage.getItem('cart'));
    },
    removeCartItem(id) {
      const vm = this;
      vm.cart.forEach((item, i) => {
        if (item.id === id) {
          vm.cart.splice(i, 1);
        }
      });
      this.$emit('emitRemoveCart', id);
    },
    // 前往購物車確認頁
    gotoCheckout() {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;

      this.cart.forEach((it) => {
        const cart = {
          product_id: it.id,
          qty: it.qty,
        };
        this.$http.post(api, { data: cart });
      });

      this.$router.push('/checkout/');
    },
  },
  created() {
    this.getCarts();
  },
};
</script>
