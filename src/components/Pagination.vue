<template>
  <div>
    <div class="pagination d-flex justify-content-center mt-5">
      <a href="javascript:void(0);" class="rounded"
        :class="{'disabled': !pagination.has_pre}"
        @click.prevent="$emit('pageEvent', pagination.current_page - 1)">
        &laquo;
      </a>
      <a href="javascript:void(0);" class="rounded"
        v-for="page in pagination.total_pages" :key="page"
        :class="{'active': pagination.current_page === page}"
        @click.prevent="$emit('pageEvent', page)">
        {{ page }}
      </a>
      <a href="javascript:void(0);" class="rounded"
        :class="{'disabled': !pagination.has_next}"
        @click.prevent="$emit('pageEvent', pagination.current_page + 1)">
        &raquo;
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationView',
  props: {
    pagination: Object,
  },
};
</script>
