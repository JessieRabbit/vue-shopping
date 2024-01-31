<template>
  <div>
    <div class="mb-3">
      <h4>Categories</h4>
      <ul class="list-unstyled fruite-categorie">
        <li>
          <div class="d-flex justify-content-between fruite-name">
            <a href="#" @click.prevent="$emit('categoryEvent', '')">
              <i class="fas fa-apple-alt me-2"></i>All Products
            </a>
            <span>({{ products.length }})</span>
          </div>
        </li>
        <li v-for="(categoryItem, i) in categories" :key="i">
          <div class="d-flex justify-content-between fruite-name">
            <a href="#" @click.prevent="$emit('categoryEvent', categoryItem.category)">
              <i class="fas fa-apple-alt me-2"></i>{{ categoryItem.category }}
            </a>
            <span>({{ categoryItem.count }})</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryView',
  props: {
    products: Array,
  },
  computed: {
    // 組 category 資料
    categories() {
      const data = ['Vegetables', 'Fruits', 'Bread', 'Meat'];
      return data.map((el) => ({
        category: el,
        count: this.products.filter((it) => it.category === el).length,
      }));
    },
  },
};
</script>
