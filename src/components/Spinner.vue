<template>
  <div>
    <div
      id="spinner"
      class="show w-100 vh-100 bg-white position-fixed
      translate-middle top-50 start-50 d-flex
      align-items-center justify-content-center"
      v-if="isLoading"
    >
      <div class="spinner-grow text-primary" role="status"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpinnerComponent',
  props: {
    isLoading: Boolean,
  },
};
</script>
