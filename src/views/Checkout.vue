<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div>
    <!-- Loading Spinner Start -->
    <Spinner :isLoading="isLoading"/>
    <!-- Loading Spinner End -->
    <div class="container-fluid py-5">
      <div class="container py-5">
        <h1 class="mb-4">Billing details</h1>
        <validation-observer class="col-md-6" v-slot="{ invalid }">
          <form @submit.prevent="createOrder">
            <div class="row g-5">
              <div class="col-md-12 col-lg-6 col-xl-7">
                <validation-provider rules="required" v-slot="{ errors, classes }">
                  <div class="form-item">
                    <label class="form-label my-3" for="username">Name<sup>*</sup></label>
                    <input
                      type="text"
                      class="form-control"
                      :class="classes"
                      v-model="form.user.name"
                      placeholder="輸入姓名"
                      id="username"
                      name="name"
                    />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </div>
                </validation-provider>

                <validation-provider rules="required" v-slot="{ errors, classes }">
                  <div class="form-item">
                    <label class="form-label my-3" for="useraddress">Address <sup>*</sup></label>
                    <input
                      type="text"
                      class="form-control"
                      :class="classes"
                      v-model="form.user.address"
                      placeholder="請輸入地址"
                      name="address"
                      id="useraddress"
                    />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </div>
                </validation-provider>

                <validation-provider rules="required|digits:10" v-slot="{ errors, classes }">
                  <div class="form-item">
                    <label class="form-label my-3" for="usertel">Mobile<sup>*</sup></label>
                    <input
                      type="tel"
                      class="form-control"
                      :class="classes"
                      v-model="form.user.tel"
                      placeholder="請輸入電話"
                      name="tel"
                      id="usertel"
                    />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </div>
                </validation-provider>

                <validation-provider rules="required|email" v-slot="{ errors, classes }">
                  <div class="form-item">
                    <label class="form-label my-3" for="email">Email Address<sup>*</sup></label>
                    <input
                      type="email"
                      class="form-control"
                      v-model="form.user.email"
                      :class="classes"
                      placeholder="輸入email"
                      name="email"
                      id="email"
                    />
                    <span class="invalid-feedback">{{ errors[0] }}</span>
                  </div>
                </validation-provider>

                <div class="form-item">
                  <label class="form-label my-3" for="comment">Message</label>
                  <textarea
                    class="form-control"
                    spellcheck="false"
                    cols="30"
                    rows="11"
                    placeholder="Oreder Notes (Optional)"
                    v-model="form.message"
                    name="comment"
                    id="comment"
                  >
                  </textarea>
                </div>
              </div>
              <div class="col-md-12 col-lg-6 col-xl-5">
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Products</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in cart.carts" :key="item.id">
                        <th scope="row">
                          <div class="d-flex align-items-center mt-2">
                            <img
                              :src="item.product.imageUrl"
                              class="img-fluid rounded-circle"
                              style="width: 90px; height: 90px"
                              alt=""
                            />
                          </div>
                        </th>
                        <td class="py-5">
                          {{ item.product.title }}
                          <div class="text-success" v-if="item.coupon">
                            已套用優惠券
                          </div>
                        </td>
                        <td class="py-5">{{ item.product.price | currency }}</td>
                        <td class="py-5">{{ item.qty }}</td>
                        <td class="py-5">
                          <p :class="{'text-decoration-line-through':
                            item.final_total !== item.total}">
                            {{ item.total | currency }}
                          </p>
                          <p v-if="item.final_total !== item.total">
                            {{ item.final_total | currency }}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td class="py-5" colspan="4">
                          <input
                            type="text"
                            class="border-0 border-bottom rounded me-2 py-3"
                            placeholder="Coupon Code"
                            v-model="coupon_code"
                          />
                          <button class="btn border-secondary rounded-pill px-4 py-3 text-primary"
                            type="button"
                            @click="addCuponCode"
                          >
                            Apply Coupon
                          </button>
                        </td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td class="py-5">
                          <p class="mb-0 text-dark text-uppercase py-3">TOTAL</p>
                        </td>
                        <td class="py-5"></td>
                        <td class="py-5"></td>
                        <td class="py-5">
                          <div class="py-3 border-bottom border-top">
                            <p class="mb-0 text-dark">
                              {{ cart.total | currency }}
                            </p>
                          </div>
                        </td>
                      </tr>
                      <tr v-if="cart.final_total !== cart.total">
                        <th scope="row"></th>
                        <td class="py-5">
                          <p class="mb-0 text-success text-uppercase py-3">Discount</p>
                        </td>
                        <td class="py-5"></td>
                        <td class="py-5"></td>
                        <td class="py-5">
                          <div class="py-3 border-bottom border-top">
                            <p class="mb-0 text-success">
                              {{ cart.final_total | currency }}
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- 保留 -->
                <!-- <div
                  class="row g-4 text-center align-items-center
                  justify-content-center border-bottom py-3"
                >
                  <div class="col-12">
                    <div class="form-check text-start my-3">
                      <input
                        type="radio"
                        class="form-check-input bg-primary border-0"
                        id="Transfer-1"
                        name="Transfer"
                        value="Transfer1"
                      />
                      <label class="form-check-label" for="Transfer-1">Direct Bank Transfer</label>
                    </div>
                    <p class="text-start text-dark">
                      Make your payment directly into our bank account. Please use your Order ID as
                      the payment reference. Your order will not be shipped until the funds have
                      cleared in our account.
                    </p>
                  </div>
                </div> -->
                <!-- 保留 -->
                <!-- <div
                  class="row g-4 text-center align-items-center
                  justify-content-center border-bottom py-3"
                >
                  <div class="col-12">
                    <div class="form-check text-start my-3">
                      <input
                        type="checkbox"
                        class="form-check-input bg-primary border-0"
                        id="Payments-1"
                        name="Payments"
                        value="Payments"
                      />
                      <label class="form-check-label" for="Payments-1">Check Payments</label>
                    </div>
                  </div>
                </div> -->
                <!-- 保留 -->
                <!-- <div
                  class="row g-4 text-center align-items-center
                  justify-content-center border-bottom py-3"
                >
                  <div class="col-12">
                    <div class="form-check text-start my-3">
                      <input
                        type="radio"
                        class="form-check-input bg-primary border-0"
                        id="Transfer-2"
                        name="Transfer"
                        value="Transfer2"
                      />
                      <label class="form-check-label" for="Transfer-2">Cash On Delivery</label>
                    </div>
                  </div>
                </div> -->
                <div class="row g-4 text-center align-items-center justify-content-center pt-4">
                  <button
                    type="submit"
                    class="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary"
                    :disabled="invalid"
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'CheckoutPage',
  components: {
    Spinner,
  },
  data() {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      isLoading: false,
      cart: {},
      discount: 0,
      coupon_code: '',
    };
  },
  computed: {
    // 計算總價
    total() {
      let total = 0;
      const vm = this;
      if (!vm.cart.carts) {
        return 0;
      }
      vm.cart.carts.forEach((item) => {
        total += (parseFloat(item.product.price) * item.qty);
      });
      return total;
    },
  },
  methods: {
    createOrder() {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order`;
      const vm = this;
      const order = vm.form;
      this.$http.post(api, { data: order }).then((response) => {
        if (response.data.success) {
          vm.$router.push(`/pay/${response.data.orderId}`);
        } else {
          this.$bus.$emit('message:push', response.data.message, 'danger');
        }
      });
    },
    getCarts() {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.cart = response.data.data;
        vm.isLoading = false;
      });
    },
    // 檢查總價有無運費
    checkShipping() {
      const vm = this;
      return vm.total < 149 ? 60 : 0;
    },
    // 前往購物車頁
    gotoCart() {
      this.$router.push('/cart');
    },
    // 增加優惠碼
    addCuponCode() {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/coupon`;
      const vm = this;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      this.$http.post(api, { data: coupon }).then((response) => {
        if (!response.data.success) {
          this.$bus.$emit('message:push', response.data.message, 'danger');
        }
        vm.getCarts();
        vm.isLoading = false;
      });
    },
  },
  created() {
    localStorage.removeItem('cart');
    this.getCarts();
  },
};
</script>
