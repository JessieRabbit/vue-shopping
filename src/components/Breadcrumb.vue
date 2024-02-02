<template>
  <div>
    <!-- Single Page Header start -->
    <div class="container-fluid page-header py-5">
      <h1 class="text-center text-white display-6">{{ currentPage }}</h1>
      <ol class="breadcrumb justify-content-center mb-0">
          <li class="breadcrumb-item"><a href="javascript:void(0);">Home</a></li>
          <li class="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
          <li class="breadcrumb-item active text-white">{{ currentPage }}</li>
      </ol>
    </div>
    <!-- Single Page Header End -->
  </div>
</template>

<script>
export default {
  name: 'BannerView',
  props: {
    currentPage: String,
  },
};
</script>
