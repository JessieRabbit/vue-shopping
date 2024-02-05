<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <!-- Loading Spinner Start -->
    <Spinner :isLoading="isLoading"/>
    <!-- Loading Spinner End -->
    <div class="container-fluid fruite py-5">
      <div class="container py-5">
        <h1 class="mb-4">Fresh fruits shop</h1>
        <div class="row g-4">
          <div class="col-lg-12">
            <div class="row g-4">
              <div class="col-xl-3">
                <KeyWord class="w-100" @checkProductsTilte="(title) => onKeyword(title)"/>
              </div>
              <div class="col-6"></div>
              <div class="col-xl-3">
                <div class="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                  <label for="fruits">Default Sorting:</label>
                  <select
                    id="fruits"
                    name="fruitlist"
                    class="border-0 form-select-sm bg-light me-3"
                    form="fruitform"
                    @change="onProductSort($event)"
                  >
                    <option value="low">價格低->高</option>
                    <option value="hight">價格高->低</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row g-4">
              <div class="col-lg-3">
                <div class="row g-4">
                  <div class="col-lg-12">
                    <Category :products = products
                      @categoryEvent="(category) => onCategory(category)"/>
                  </div>
                  <div class="col-lg-12">
                    <div class="mb-3">
                      <h4 class="mb-2">Price</h4>
                      <input
                        type="range"
                        class="form-range w-100"
                        id="rangeInput"
                        name="rangeInput"
                        :min="getPrice.min"
                        :max="getPrice.max"
                        value="0"
                        oninput="amount.value=rangeInput.value"
                        v-model="range"
                        @change="onRange"
                      />
                      <output
                        id="amount"
                        name="amount"
                        :min-velue="getPrice.min"
                        :max-value="getPrice.max"
                        for="rangeInput"
                      >
                        0
                      </output>
                    </div>
                  </div>
                  <!-- 雖無欄位資料，但保留 -->
                  <!-- <div class="col-lg-12">
                    <div class="mb-3">
                      <h4>Additional</h4>
                      <div class="mb-2">
                        <input
                          type="radio"
                          class="me-2"
                          id="Categories-1"
                          name="Categories-1"
                          value="Beverages"
                        />
                        <label for="Categories-1"> Organic</label>
                      </div>
                      <div class="mb-2">
                        <input
                          type="radio"
                          class="me-2"
                          id="Categories-2"
                          name="Categories-1"
                          value="Beverages"
                        />
                        <label for="Categories-2"> Fresh</label>
                      </div>
                      <div class="mb-2">
                        <input
                          type="radio"
                          class="me-2"
                          id="Categories-3"
                          name="Categories-1"
                          value="Beverages"
                        />
                        <label for="Categories-3"> Sales</label>
                      </div>
                      <div class="mb-2">
                        <input
                          type="radio"
                          class="me-2"
                          id="Categories-4"
                          name="Categories-1"
                          value="Beverages"
                        />
                        <label for="Categories-4"> Discount</label>
                      </div>
                      <div class="mb-2">
                        <input
                          type="radio"
                          class="me-2"
                          id="Categories-5"
                          name="Categories-1"
                          value="Beverages"
                        />
                        <label for="Categories-5"> Expired</label>
                      </div>
                    </div>
                  </div> -->
                  <div class="col-lg-12">
                    <FeatureProducts :featureProducts = featureProducts />
                  </div>
                  <div class="col-lg-12">
                    <Banner/>
                  </div>
                </div>
              </div>
              <div class="col-lg-9">
                <div class="row g-4 justify-content-center">
                  <div class="col-md-6 col-lg-6 col-xl-4"
                    v-for="item in filterProducts" :key="item.id">
                    <div class="rounded position-relative fruite-item">
                      <div class="fruite-img"
                        @click.prevent="goShopDetail(item.id)"
                        @keyup.enter="goShopDetail(item.id)"
                      >
                        <img
                          :src="item.imageUrl"
                          class="img-fluid w-100 rounded-top"
                          alt=""
                        />
                      </div>
                      <div
                        class="text-white bg-secondary px-3 py-1 rounded position-absolute"
                        style="top: 10px; left: 10px"
                      >
                        {{ item.category }}
                      </div>
                      <div class="p-4 border border-secondary border-top-0 rounded-bottom">
                        <h4>{{ item.title }}</h4>
                        <p>
                          {{ item.description }}
                        </p>
                        <div class="d-flex justify-content-between flex-lg-wrap">
                          <p class="text-dark fs-5 fw-bold mb-0">
                            {{ item.price | currency }} / {{ item.unit }}
                          </p>
                          <a
                            href="javascript:void(0);"
                            class="btn border border-secondary rounded-pill px-3 text-primary"
                            @click.prevent="$emit('emitAddtoCart', item)"
                          >
                            <i class="fa fa-shopping-bag me-2 text-primary"></i>
                            Add to cart
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="pagination d-flex justify-content-center mt-5">
                      <a href="javascript:void(0);" class="rounded"
                        :class="{'disabled': !pagination.has_pre}"
                        @click.prevent="getProducts(pagination.current_page - 1)">
                        &laquo;
                      </a>
                      <a href="javascript:void(0);" class="rounded"
                        v-for="page in pagination.total_pages" :key="page"
                        :class="{'active': pagination.current_page === page}"
                        @click.prevent="getProducts(page)">
                        {{ page }}
                      </a>
                      <a href="javascript:void(0);" class="rounded"
                        :class="{'disabled': !pagination.has_next}"
                        @click.prevent="getProducts(pagination.current_page + 1)">
                        &raquo;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import KeyWord from '@/components/KeyWord.vue';
import Category from '@/components/Category.vue';
import FeatureProducts from '@/components/FeatureProducts.vue';
import Banner from '@/components/Banner.vue';

export default {
  name: 'ShopPage',
  components: {
    Spinner,
    KeyWord,
    Category,
    FeatureProducts,
    Banner,
  },
  data() {
    return {
      products: [],
      featureProducts: [],
      category: '',
      keywordTitle: '',
      range: 0,
      isLoading: false,
      pagination: {},
      // 3個filter狀態切換
      hasKeyword: false,
      hasCategory: false,
      hasRange: false,
    };
  },
  computed: {
    // 篩選產品分類
    filterProducts() {
      const vm = this;
      if (vm.hasKeyword) {
        return vm.products
          .filter((product) => product.title === vm.keywordTitle);
      }

      if (vm.hasRange) {
        return vm.products
          .filter((product) => parseFloat(product.price) <= vm.range);
      }

      if (vm.hasCategory) {
        return vm.products.filter((product) => product.category === vm.category);
      }
      return vm.products;
    },
    // 取得產品價格最大最小值
    getPrice() {
      const vm = this;
      return {
        max: vm.products.map((it) => parseFloat(it.price))
          .reduce((a, b) => Math.max(a, b), 0),
        min: vm.products.map((it) => parseFloat(it.price))
          .reduce((a, b) => Math.min(a, b), 0),
      };
    },
  },
  methods: {
    // 取得商品列表
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.products = response.data.products.filter((it) => it.is_enabled);
        vm.featureProducts = response.data.products.filter((it) => it.is_enabled);
        vm.pagination = response.data.pagination;
        vm.isLoading = false;
      });
    },
    // 產品分類 click
    onCategory(category) {
      const vm = this;
      vm.category = category;
      vm.hasCategory = true && vm.category.length > 0;
      vm.hasKeyword = false;
      vm.hasRange = false;
    },
    // 產品列表排序
    onProductSort(event) {
      const vm = this;
      if (event.target.value === 'low') {
        return vm.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      }
      return vm.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    },
    onRange() {
      const vm = this;
      vm.hasCategory = false;
      vm.hasKeyword = false;
      vm.hasRange = true;
    },
    onKeyword(title) {
      const vm = this;
      vm.keywordTitle = title;
      vm.hasCategory = false;
      vm.hasKeyword = true && vm.keywordTitle.length > 0;
      vm.hasRange = false;
    },
    // 前往產品詳細頁
    goShopDetail(productId) {
      this.$router.push(`/page/shop-detail/${productId}`);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
