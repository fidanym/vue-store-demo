<template>
  <div class="tiles product-grid">
    <product v-for="product in products" :customer_id="customer_id" :product="product"></product>
  </div>
</template>

<script>

  import ProductGridItem from './ProductGridItem'

  export default {
    name: 'ProductList',
    components: {
      product: ProductGridItem
    },
    props: {
      products: Array,
      customer_id: String
    }
  }
</script>

<style scoped>
  .tiles {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>
