<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div>
    <div class="offcanvas offcanvas-end" tabindex="-1"
      id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header bg-dark">
        <h5 class="offcanvas-title text-white" id="offcanvasRightLabel">我的購物車</h5>
        <button type="button" class="btn-close text-white"
          data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <template v-if="cart && cart.length > 0">
          <ul class="list-unstyled">
            <li class="rounded border border-secondary-subtle border-3 mb-2 py-3"
              v-for="(item, i) in cart" :key="`canvas${i}`" >
              <div class="d-flex justify-content-around">
                <div class="rounded me-4" style="width: 100px; height: 100px">
                  <img :src="item.imageUrl" class="img-fluid rounded" alt="" />
                </div>
                <div>
                  {{ item.title }}
                  <p>1 {{ item.unit }}</p>
                  <div class="input-group quantity mb-5" style="width: 100px">
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
                  <div>{{ item.qty * item.price | currency }}</div>
                </div>
                <button type="button" class="btn btn-outline-danger btn-sm"
                  style="width: 40px; height: 40px"
                  @click="removeCartItem(item.id)"
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
              </div>
            </li>
          </ul>
          <button
            type="button"
            class="btn btn-danger w-100"
            style="height: 5%;"
            @click.prevent="gotoCart"
          >
            前往結帳
          </button>
        </template>
        <template v-else>
          <div class="d-flex justify-content-center align-items-center fs-1">
            <i class="fas fa-shopping-cart"></i>
          </div>
          <div class="text-center mt-2">購物車內無任何商品!</div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { Offcanvas } from 'bootstrap';

export default {
  name: 'CartOffcanvas',
  props: {
    cart: Array,
  },
  methods: {
    removeCartItem(id) {
      this.$emit('emitRemoveCart', id);
    },
    // 前往結帳頁面
    gotoCart() {
      this.$router.push('/cart');
      const offcanvasElementById = document.getElementById('offcanvasRight');
      const offcanvas = Offcanvas.getOrCreateInstance(offcanvasElementById);
      offcanvas.hide();
    },
  },
};
</script>
