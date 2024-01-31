<template>
  <div>
    <h4 class="mb-3">Featured products</h4>
    <div class="d-flex align-items-center justify-content-start"
      v-for="(item, i) in featureProducts.slice(0,3)" :key="`feature ${i}`">
      <div class="rounded me-4" style="width: 100px; height: 100px">
        <img :src="item.imageUrl" class="img-fluid rounded" alt="" />
      </div>
      <div>
        <h6 class="mb-2">{{ item.title }}</h6>
        <div class="d-flex mb-2">
          <i class="fa fa-star text-secondary"></i>
          <i class="fa fa-star text-secondary"></i>
          <i class="fa fa-star text-secondary"></i>
          <i class="fa fa-star text-secondary"></i>
          <i class="fa fa-star text-secondary"></i>
        </div>
        <div class="d-flex mb-2">
          <h5 class="fw-bold me-2">${{ item.price }}</h5>
          <h5 class="text-danger text-decoration-line-through">${{ item.origin_price }}</h5>
        </div>
      </div>
    </div>
    <!-- 保留 -->
    <!-- <div class="d-flex justify-content-center my-4">
      <a
        href="#"
        class="btn border border-secondary
        px-4 py-3 rounded-pill text-primary w-100"
      >
        View More
      </a>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'FeatureProducts',
  props: {
    featureProducts: Array,
  },
};
</script>
