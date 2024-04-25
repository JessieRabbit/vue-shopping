<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="input-group mx-auto d-flex">
    <input
      type="search"
      class="form-control p-3"
      placeholder="keywords"
      aria-describedby="search-icon-1"
      v-model="keyword"
    />
    <span id="search-icon-1" class="input-group-text p-3 search-pointer"
      @click.prevent="$emit('checkProductsTilte', keyword)"
      @keyup.enter="$emit('checkProductsTilte', keyword)">
      <i class="fa fa-search"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'KeyWord',
  data() {
    return {
      keyword: '',
    };
  },
};
</script>
