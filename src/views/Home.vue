<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <!-- Loading Spinner Start -->
    <Spinner :isLoading="isLoading"/>
    <!-- Loading Spinner End -->

    <!-- Hero Start -->
    <div class="container-fluid py-5 mb-5 hero-header">
      <div class="container py-5">
        <div class="row g-5 align-items-center">
          <div class="col-md-12 col-lg-7">
            <h4 class="mb-3 text-secondary">100% Organic Foods</h4>
            <h1 class="mb-5 display-3 text-primary">Organic Veggies & Fruits Foods</h1>
            <!-- 保留 -->
            <!-- <div class="position-relative mx-auto">
              <input
                class="form-control border-2 border-secondary
                w-75 py-3 px-4 rounded-pill"
                type="number"
                placeholder="Search"
              />
              <button
                type="submit"
                class="btn btn-primary border-2
                border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100"
                style="top: 0; right: 25%"
              >
                Submit Now
              </button>
            </div> -->
          </div>
          <div class="col-md-12 col-lg-5">
            <div id="carouselId" class="carousel slide position-relative" data-bs-ride="carousel">
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active rounded">
                  <img
                    src="https://images.unsplash.com/photo-1681840531300-55f69047ccfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDI2fHx8ZW58MHx8fHx8"
                    class="img-fluid w-100 h-100 bg-secondary rounded"
                    alt="First slide"
                  />
                  <a href="javascript:void(0);" class="btn px-4 py-2 text-white rounded">Fruites</a>
                </div>
                <div class="carousel-item rounded">
                  <img
                    src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmVnZXRhYmxlc3xlbnwwfDB8MHx8fDI%3D"
                    class="img-fluid w-100 h-100 rounded"
                    alt="Second slide"
                  />
                  <a href="javascript:void(0);"
                    class="btn px-4 py-2 text-white rounded">Vesitables</a>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselId"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Hero End -->

    <!-- Featurs Section Start -->
    <div class="container-fluid featurs py-5">
      <div class="container py-5">
        <div class="row g-4">
          <div class="col-md-6 col-lg-3">
            <div class="featurs-item text-center rounded bg-light p-4">
              <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                <i class="fas fa-car-side fa-3x text-white"></i>
              </div>
              <div class="featurs-content text-center">
                <h5>Free Shipping</h5>
                <p class="mb-0">Free on order over $149</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="featurs-item text-center rounded bg-light p-4">
              <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                <i class="fas fa-user-shield fa-3x text-white"></i>
              </div>
              <div class="featurs-content text-center">
                <h5>Security Payment</h5>
                <p class="mb-0">100% security payment</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="featurs-item text-center rounded bg-light p-4">
              <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                <i class="fas fa-exchange-alt fa-3x text-white"></i>
              </div>
              <div class="featurs-content text-center">
                <h5>30 Day Return</h5>
                <p class="mb-0">30 day money guarantee</p>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-3">
            <div class="featurs-item text-center rounded bg-light p-4">
              <div class="featurs-icon btn-square rounded-circle bg-secondary mb-5 mx-auto">
                <i class="fa fa-phone-alt fa-3x text-white"></i>
              </div>
              <div class="featurs-content text-center">
                <h5>24/7 Support</h5>
                <p class="mb-0">Support every time fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Featurs Section End -->

    <!-- Fruits Shop Start-->
    <div class="container-fluid fruite py-5">
      <div class="container py-5">
        <div class="tab-class text-center">
          <div class="row g-4">
            <div class="col-lg-4 text-start">
              <h1>Our Organic Products</h1>
            </div>
            <div class="col-lg-8 text-end">
              <ul class="nav nav-pills d-inline-flex text-center mb-5">
                <li class="nav-item">
                  <a
                    class="d-flex m-2 py-2 bg-light rounded-pill active"
                    data-bs-toggle="pill"
                    href="#"
                    @click.prevent="onCategory('')"
                  >
                    <span class="text-dark" style="width: 130px">All Products</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="d-flex py-2 m-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#"
                    @click.prevent="onCategory('Vegetables')"
                  >
                    <span class="text-dark" style="width: 130px">Vegetables</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#"
                    @click.prevent="onCategory('Fruits')"
                  >
                    <span class="text-dark" style="width: 130px">Fruits</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#"
                    @click.prevent="onCategory('Bread')"
                  >
                    <span class="text-dark" style="width: 130px">Bread</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#"
                    @click.prevent="onCategory('Meat')"
                  >
                    <span class="text-dark" style="width: 130px">Meat</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade show p-0 active">
              <div class="row g-4">
                <div class="col-lg-12">
                  <div class="row g-4">
                    <div class="col-md-6 col-lg-4 col-xl-3"
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
                          <p class="lineClamp">
                            {{ item.description}}
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Fruits Shop End-->

    <!-- Featurs Start -->
    <div class="container-fluid service py-5">
      <div class="container py-5">
        <div class="row g-4 justify-content-center">
          <div class="col-md-6 col-lg-4">
            <a href="javascript:void(0);">
              <div class="service-item bg-secondary rounded border border-secondary">
                <img src="https://unsplash.com/photos/1OhHaIGGq4Y/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8ODV8fHxlbnwwfHx8fDE3MDcyMTEyMzB8&force=true&w=640" class="img-fluid rounded-top w-100" alt="" />
                <div class="px-4 rounded-bottom">
                  <div class="service-content bg-primary text-center p-4 rounded">
                    <h5 class="text-white">Fresh Apples</h5>
                    <h3 class="mb-0">20% OFF</h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a href="javascript:void(0);">
              <div class="service-item bg-dark rounded border border-dark">
                <img src="https://unsplash.com/photos/j2qY5wJma88/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8c3RyYXdiZXJyeXxlbnwwfHx8fDE3MTQzNzcwMzF8MA&force=true&w=640" class="img-fluid rounded-top w-100" alt="" />
                <div class="px-4 rounded-bottom">
                  <div class="service-content bg-light text-center p-4 rounded">
                    <h5 class="text-primary">Tasty Fruits</h5>
                    <h3 class="mb-0">Free delivery</h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div class="col-md-6 col-lg-4">
            <a href="javascript:void(0);">
              <div class="service-item bg-primary rounded border border-primary">
                <img src="https://unsplash.com/photos/4fTaeH37eH0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8ODR8fHxlbnwwfHx8fDE3MDcyMTI1MTl8&force=true&w=640" class="img-fluid rounded-top w-100" alt="" />
                <div class="px-4 rounded-bottom">
                  <div class="service-content bg-secondary text-center p-4 rounded">
                    <h5 class="text-white">Exotic Vegitable</h5>
                    <h3 class="mb-0">Discount 30$</h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Featurs End -->

    <!-- Vesitable Shop Start-->
    <FreshOrganic v-if="vegetables && vegetables.length"
      :vegetables="vegetables"
      @emitAddtoCart="(item) => addtoCart(item)"
    />
    <!-- Vesitable Shop End -->

    <!-- Banner Section Start-->
    <div class="container-fluid banner bg-secondary my-5"
      v-if="products && products.length">
      <div class="container py-5">
        <div class="row g-4 align-items-center">
          <div class="col-lg-6">
            <div class="py-4">
              <h1 class="display-3 text-white">Fresh Exotic Fruits</h1>
              <p class="fw-normal display-3 text-dark mb-4">in Our Store</p>
              <p class="mb-4 text-dark">
                {{ products[products.length-1].description }}
              </p>
              <a
                href="javascript:void(0);"
                class="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
                @click.prevent="$emit('emitAddtoCart', products[products.length-1])"
              >
                BUY
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="position-relative">
              <img :src="products[products.length-1].imageUrl"
                class="img-fluid w-100 rounded" alt="" />
              <div
                class="d-flex align-items-center
                justify-content-center bg-white rounded-circle position-absolute"
                style="width: 140px; height: 140px; top: 0; left: 0"
              >
                <h1 style="font-size: 100px">1</h1>
                <div class="d-flex flex-column">
                  <span class="h2 mb-0">{{ products[products.length-1].price | currency }}</span>
                  <span class="h4 text-muted mb-0">{{ products[products.length-1].unit }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Banner Section End -->

    <!-- Bestsaler Product Start -->
    <div class="container-fluid py-5">
      <div class="container py-5">
        <div class="text-center mx-auto mb-5" style="max-width: 700px">
          <h1 class="display-4">Bestseller Products</h1>
          <p>
            暢銷蔬果種類豐富
          </p>
        </div>
        <div class="row g-4">
          <div class="col-lg-6 col-xl-4"
            v-for="(item, i) in products.slice(0,6)" :key="`xl-${i}`">
            <div class="p-4 rounded bg-light">
              <div class="row align-items-center">
                <div class="col-6">
                  <img :src="item.imageUrl"
                   class="img-fluid rounded-circle w-100" alt="" />
                </div>
                <div class="col-6">
                  <a href="javascript:void(0);" class="h5">{{ item.title }}</a>
                  <div class="d-flex my-3">
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                    <i class="fas fa-star text-primary"></i>
                  </div>
                  <h4 class="mb-3">{{ item.price | currency }}</h4>
                  <a href="javascript:void(0);"
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
          <div class="col-md-6 col-lg-6 col-xl-3"
            v-for="(item, i) in products.slice(-4)" :key="`md-${i}`">
            <div class="text-center">
              <img :src="item.imageUrl" class="img-fluid rounded" alt="" />
              <div class="py-4">
                <a href="javascript:void(0);" class="h5">{{ item.title }}</a>
                <div class="d-flex my-3 justify-content-center">
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                  <i class="fas fa-star text-primary"></i>
                </div>
                <h4 class="mb-3">{{ item.price | currency }}</h4>
                <a href="javascript:void(0);"
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
      </div>
    </div>
    <!-- Bestsaler Product End -->

    <!-- Fact Start -->
    <div class="container-fluid py-5">
      <div class="container">
        <div class="bg-light p-5 rounded">
          <div class="row g-4 justify-content-center">
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="counter bg-white rounded p-5">
                <i class="fa fa-users text-secondary"></i>
                <h4>satisfied customers</h4>
                <h1>1963</h1>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="counter bg-white rounded p-5">
                <i class="fa fa-utensils text-secondary"></i>
                <h4>quality of service</h4>
                <h1>99%</h1>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="counter bg-white rounded p-5">
                <i class="fa fa-certificate text-secondary"></i>
                <h4>quality certificates</h4>
                <h1>33</h1>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-xl-3">
              <div class="counter bg-white rounded p-5">
                <i class="fa fa-carrot text-secondary"></i>
                <h4>Available Products</h4>
                <h1>789</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Fact Start -->

    <!-- Tastimonial Start -->
    <OurTastimonial/>
    <!-- Tastimonial End -->
  </div>
</template>

<script>
import Spinner from '@/components/Spinner.vue';
import FreshOrganic from '@/components/FreshOrganic.vue';
import OurTastimonial from '@/components/OurTastimonial.vue';

export default {
  name: 'HomePage',
  components: {
    Spinner,
    FreshOrganic,
    OurTastimonial,
  },
  data() {
    return {
      products: [],
      vegetables: [],
      category: '',
      isLoading: false,
      cartItems: [],
    };
  },
  computed: {
    // 篩選產品分類
    filterProducts() {
      const vm = this;
      if (!vm.category) {
        return vm.products;
      }
      return vm.products.filter((product) => product.category === vm.category);
    },
  },
  methods: {
    // 取得商品列表_all
    getProducts() {
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/products`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(api).then((response) => {
        vm.products = response.data.products.filter((it) => it.is_enabled);
        vm.vegetables = response.data.products.filter((it) => it.is_enabled && it.category === 'Vegetables');
        vm.isLoading = false;
      });
    },
    // 產品分類 click
    onCategory(category) {
      const vm = this;
      vm.category = category;
    },
    // 前往產品詳細頁
    goShopDetail(productId) {
      this.$router.push(`/shop-detail/${productId}`);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
