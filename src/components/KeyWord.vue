<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="input-group mx-auto d-flex">
    <input
      type="search"
      class="form-control p-3"
      placeholder="keywords"
      aria-describedby="search-icon-1"
    />
    <span id="search-icon-1" class="input-group-text p-3">
      <i class="fa fa-search"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'KeyWord',
};
</script>
