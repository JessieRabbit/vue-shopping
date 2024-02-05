<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <!-- Loading Spinner Start -->
    <Spinner :isLoading="isLoading"/>
    <!-- Loading Spinner End -->
    <form class="container-fluid py-5" @submit.prevent="payOrder">
      <div class="container py-5">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" width="43%">Name</th>
                <th scope="col">Price</th>
                <th scope="col" width="15%">Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td>
                  <p class="mb-0 mt-4">{{ item.product.title }}</p>
                </td>
                <td>
                  <p class="mb-0 mt-4">{{ item.qty }}/{{ item.product.unit }}</p>
                </td>
                <td>
                  <p class="mb-0 mt-4">{{ item.total | currency }}</p>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-end">總計</td>
                <td>{{ order.total * 100 | currency }}</td>
              </tr>
            </tfoot>
          </table>

          <table class="table">
            <tbody>
              <tr>
                <th scope="col">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th scope="col">姓名</th>
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
          <div class="text-end" v-if="order.is_paid === false">
            <button type="submit" class="btn btn-danger">確認付款去</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';

export default {
  name: 'PayPage',
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
    payOrder() {
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/pay/${vm.orderId}`;
      this.$http.post(api).then((response) => {
        if (response.data.success) {
          vm.getOrder();
          this.$bus.$emit('message:push', response.data.message, 'success');
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
