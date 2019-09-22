<template>
  <div class="product-list">
    <div class="row custom-list-header">
      <div class="col-7 col-md-4">Name</div>
      <div class="col col-md-3">Price</div>
    </div>
    <product v-for="product in products" :customer_id="customer_id" :product="product"></product>
  </div>
</template>

<script>
  import ProductListItem from './ProductListItem'

  export default {
    name: 'ProductList',
    components: {
      product: ProductListItem
    },
    props: {
      products: Array,
      customer_id: String
    }
  }
</script>

<style scoped>

</style>
