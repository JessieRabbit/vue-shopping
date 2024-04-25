<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <!-- Loading Spinner Start -->
    <Spinner :isLoading="isLoading"/>
    <!-- Loading Spinner End -->
    <div class="container-fluid pb-5">
      <div class="container py-5">
        <a
          href="javascript:void(0)"
          class="btn border border-secondary
          px-4 py-3 rounded-pill text-primary mb-2"
          @click.prevent="gotoShop"
        >
          <i class="bi bi-arrow-left"></i>
          回到產品列表
        </a>
        <div class="row g-4 mb-5">
          <div class="col-lg-8 col-xl-9">
            <div class="row g-4">
              <div class="col-lg-6">
                <div class="border rounded">
                  <a href="javascript:void(0);">
                    <img :src="product.imageUrl" class="img-fluid rounded" alt="Image" />
                  </a>
                </div>
              </div>
              <div class="col-lg-6">
                <h4 class="fw-bold mb-3">{{ product.title }}</h4>
                <p class="mb-3">Category: {{ product.category }}</p>
                <h5 class="fw-bold mb-3">{{ product.price | currency }}</h5>
                <div class="d-flex mb-4">
                  <i class="fa fa-star text-secondary"></i>
                  <i class="fa fa-star text-secondary"></i>
                  <i class="fa fa-star text-secondary"></i>
                  <i class="fa fa-star text-secondary"></i>
                  <i class="fa fa-star text-secondary"></i>
                </div>
                <p class="mb-4">
                  {{ product.description }}
                </p>
                <div class="input-group quantity mb-5" style="width: 100px">
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-minus rounded-circle bg-light border"
                      @click.prevent="product.qty --"
                      :disabled="product.qty === 1"
                    >
                      <i class="fa fa-minus"></i>
                    </button>
                  </div>
                  <input
                    type="text"
                    class="form-control form-control-sm text-center border-0"
                    value="1"
                    v-model="product.qty"
                  />
                  <div class="input-group-btn">
                    <button class="btn btn-sm btn-plus rounded-circle bg-light border"
                      @click.prevent="product.qty ++"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
                <a href="javascript:void(0);"
                  class="btn border border-secondary rounded-pill px-4 py-2 mb-4 text-primary"
                  @click.prevent="$emit('emitAddtoCart', product, 'detailShop')"
                >
                  <i class="fa fa-shopping-bag me-2 text-primary"></i>
                  Add to cart
                </a>
              </div>
              <div class="col-lg-12">
                <nav>
                  <div class="nav nav-tabs mb-3">
                    <button
                      class="nav-link active border-white border-bottom-0"
                      type="button"
                      role="tab"
                      id="nav-about-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-about"
                      aria-controls="nav-about"
                      aria-selected="true"
                    >
                      Description
                    </button>
                  </div>
                </nav>
                <div class="tab-content mb-5">
                  <div
                    class="tab-pane active"
                    id="nav-about"
                    role="tabpanel"
                    aria-labelledby="nav-about-tab"
                  >
                    <p>
                      {{ product.content }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-xl-3">
            <div class="col-lg-12">
              <FeatureProducts :featureProducts = featureProducts />
            </div>
            <div class="col-lg-12">
              <Banner/>
            </div>
          </div>
        </div>
      </div>
      <FreshOrganic v-if="vegetables && vegetables.length"
        :vegetables="vegetables"
        @emitAddtoCart="(item) => $emit('emitAddtoCart', item)"
      />
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import FeatureProducts from '@/components/FeatureProducts.vue';
import Banner from '@/components/Banner.vue';
import FreshOrganic from '@/components/FreshOrganic.vue';

export default {
  name: 'ShopDetail',
  components: {
    Spinner,
    FeatureProducts,
    Banner,
    FreshOrganic,
  },
  data() {
    return {
      product: {},
      productId: '',
      vegetables: [],
      featureProducts: [],
      isLoading: false,
    };
  },
  methods: {
    getProduct(id) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/product/${id}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.product = { ...response.data.product, qty: 1 };
        vm.isLoading = false;
      });
    },
    getProducts() {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/products`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.featureProducts = response.data.products.filter((it) => it.is_enabled);
        vm.vegetables = response.data.products.filter((it) => it.is_enabled && it.category === 'Vegetables');
        vm.isLoading = false;
      });
    },
    // 前往產品列表頁
    gotoShop() {
      this.$router.push('/shop');
    },
  },
  created() {
    this.productId = this.$route.params.productId;
    this.getProduct(this.productId);
    this.getProducts();
  },
};
</script>
