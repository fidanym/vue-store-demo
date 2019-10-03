<template>
  <div id="products">
    <products v-if="!isLoading && this.products !== null" :products="products" />
    <loader :is-loading="isLoading"></loader>
  </div>
</template>

<script>
  import Products from './Products'
  import Loader from '../Loader'

  export default {
    name: 'ProductsView',
    components: {
      products: Products,
      loader: Loader
    },
    computed: {
      products () {
        return this.$store.getters.products
      },
      isLoading () {
        return this.products === 'loading'
      }
    },
    created () {
      this.$store.dispatch('loadProducts')
    }
  }
</script>

<style scoped>

</style>
