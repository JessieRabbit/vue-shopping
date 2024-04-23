<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <!-- Loading Spinner Start -->
    <Spinner :isLoading="isLoading"/>
    <!-- Loading Spinner End -->
    <div class="container py-5 px-5 bg-table">
      <a
        href="javascript:void(0)"
        class="btn border border-secondary
        px-4 py-3 rounded-pill text-primary mb-4"
        @click.prevent="gotoOrders"
      >
        <i class="bi bi-arrow-left"></i>
        上一頁
      </a>
      <div class="table-responsive">
        <h3>
          <i class="fas fa-store"></i>
          購物明細
        </h3>
        <table class="table border mb-5">
          <thead class="table-bg bg-secondary">
            <tr>
              <th scope="col" class="text-white detail"></th>
              <th scope="col" class="text-white detail">Name</th>
              <th scope="col" class="text-white detail">Quantity</th>
              <th scope="col" class="text-white detail">Price</th>
              <th scope="col" class="text-white detail">小計</th>
            </tr>
          </thead>
          <tbody class="orders">
            <tr v-for="item in order.products" :key="item.id">
              <td>
                <img
                  :src="item.product.imageUrl"
                  class="img-fluid rounded-circle"
                  style="width: 80px; height: 80px"
                  alt=""
                />
              </td>
              <td>
                <p class="mb-0 mt-4">{{ item.product.title }}</p>
              </td>
              <td>
                <p class="mb-0 mt-4">{{ item.qty }}/{{ item.product.unit }}</p>
              </td>
              <td>
                <p class="mb-0 mt-4">{{ item.product.price | currency }}</p>
              </td>
              <td>
                <p class="mb-0 mt-4">{{ item.total | currency }}</p>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" class="text-end text-danger">總計</td>
              <td class="text-danger totalAlign">{{ order.total | currency }}</td>
            </tr>
          </tfoot>
        </table>

        <h3>
          <i class="fas fa-envelope"></i>
          寄送資料
        </h3>
        <table class="table border">
          <tbody>
            <tr>
              <th scope="col">Email</th>
              <td>{{ order.user.email }}</td>
            </tr>
            <tr>
              <th scope="col">收件人姓名</th>
              <td>{{ order.user.name }}</td>
            </tr>
            <tr>
              <th scope="col">收件人電話</th>
              <td>{{ order.user.tel }}</td>
            </tr>
            <tr>
              <th scope="col">收件人地址</th>
              <td>{{ order.user.address }}</td>
            </tr>
            <tr>
              <th scope="col">付款狀態</th>
              <td>
                <span v-if="!order.is_paid">尚未付款</span>
                <span v-else class="text-success fw-bolder">付款完成</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'OrderDetail',
  components: {
    Spinner,
  },
  data() {
    return {
      order: {
        user: {},
      },
      orderId: '',
      isLoading: false,
    };
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.order = response.data.order;
        vm.isLoading = false;
      });
    },
    gotoOrders() {
      this.$router.push('/orders');
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
