<template>
  <div>
    <div class="container-fluid vesitable py-5">
      <div class="container py-5">
        <h1 class="mb-0">Fresh Organic Vegetables</h1>
        <div class="owl-carousel vegetable-carousel justify-content-center">
          <div class="border border-primary rounded position-relative vesitable-item"
            v-for="item in vegetables" :key="item.id">
            <div class="vesitable-img">
              <img :src="item.imageUrl"
              class="img-fluid w-100 rounded-top" alt="" />
            </div>
            <div
              class="text-white bg-primary px-3 py-1 rounded position-absolute"
              style="top: 10px; right: 10px"
            >
              {{ item.category }}
            </div>
            <div class="p-4 rounded-bottom">
              <h4>{{ item.title }}</h4>
              <p>
                {{ item.description}}
              </p>
              <div class="d-flex justify-content-between flex-lg-wrap">
                <p class="text-dark fs-5 fw-bold mb-0">${{ item.price }} / {{ item.unit }}</p>
                <a href="#" class="btn border border-secondary rounded-pill px-3 text-primary">
                  <i class="fa fa-shopping-bag me-2 text-primary"></i> Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'FreshOrganic',
  props: {
    vegetables: Array,
  },
  created() {
    $(document).ready(() => {
      // vegetable carousel
      $('.vegetable-carousel').owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: true,
        navText: ['<i class="bi bi-arrow-left"></i>', '<i class="bi bi-arrow-right"></i>'],
        navClass: ['owl-prev-btn', 'owl-next-btn'],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 1,
          },
          768: {
            items: 2,
          },
          992: {
            items: 3,
          },
          1200: {
            items: 4,
          },
        },
      });
    });
  },
};
</script>
