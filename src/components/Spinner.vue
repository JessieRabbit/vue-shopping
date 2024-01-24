<template>
  <div>
    <div
      id="spinner"
      class="show w-100 vh-100 bg-white position-fixed
      translate-middle top-50 start-50 d-flex
      align-items-center justify-content-center"
    >
      <div class="spinner-grow text-primary" role="status"></div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'SpinnerComponent',
  created() {
    const spinner = () => {
      setTimeout(() => {
        if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show');
        }
      }, 1);
    };
    spinner(0);
  },
};
</script>
