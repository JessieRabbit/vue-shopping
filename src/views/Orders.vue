<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <!-- Loading Spinner Start -->
    <Spinner :isLoading="isLoading"/>
    <!-- Loading Spinner End -->
    <div class="container py-5">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead class="table-bg bg-secondary">
            <tr>
              <th scope="col" class="text-white detail">購買時間</th>
              <th scope="col" class="text-white detail">Email</th>
              <th scope="col" class="text-white detail">購買款項</th>
              <th scope="col" class="text-white detail">應付金額</th>
              <th scope="col" class="text-white detail">是否付款</th>
            </tr>
          </thead>
          <tbody class="orders">
            <tr class="pointer"
              v-for="item in orders" :key="item.id" @click.prevent="gotoOrderDetail(item.id)">
              <td>
                <p class="mb-0 mt-4">{{ item.create_at | date  }}</p>
              </td>
              <td>
                <p class="mb-0 mt-4">{{ item.user.email }}</p>
              </td>
              <td>
                <ul class="list-unstyled mt-4">
                  <li v-for="(product, i) in item.products" :key="i">
                    {{ product.product.title }} 數量：{{ product.qty }}
                    {{ product.product.unit }}
                  </li>
                </ul>
              </td>
              <td>
                <p class="mt-4" v-if="!item.final_total">{{ item.total | currency }}</p>
                <p class="mt-4" v-else>
                    {{ item.final_total | currency }}
                </p>
              </td>
              <td>
                <span class="text-success fw-bolder mt-4" v-if="item.is_paid">已付款</span>
                <span class="mt-4" v-else>尚未啟用</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <Pagination :pagination="pagination" @pageEvent="(page) => getOrders(page)"/>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'OrdersPage',
  components: {
    Spinner,
    Pagination,
  },
  data() {
    return {
      orders: [],
      isLoading: false,
      pagination: {},
    };
  },
  methods: {
    getOrders(page = 1) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/orders?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.orders = response.data.orders;
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    },
    // 前往訂單詳細頁
    gotoOrderDetail(orderId) {
      this.$router.push(`/order-detail/${orderId}`);
    },
  },
  created() {
    this.getOrders();
  },
};
</script>
