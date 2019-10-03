<template>
  <div class="customer">
    <div v-if="isLoaded" class="customer-details">
      <products v-if="hasProducts" :products="customer.purchasedProducts" :customer_id="customer.id">{{customer.name}}'s products</products>
    </div>
    <loader :is-loading="!isLoaded"></loader>
  </div>
</template>

<script>
  import Loader from '../Loader'
  import Products from '../Products/Products'

  export default {
    name: 'CustomerDetails',
    components: {
      loader: Loader,
      products: Products
    },
    props: {
      id: String
    },
    computed: {
      customer () {
        return this.$store.getters.customerById(this.id)
      },
      isLoaded () {
        return !!this.customer
      },
      hasProducts () {
        if (this.isLoaded) {
          return typeof this.customer.purchasedProducts !== 'undefined' && !!this.customer.purchasedProducts
        }
      }
    },
    created () {
      if (!this.$store.getters.customers) {
        this.$store.dispatch('loadCustomers')
      }
    }
  }
</script>

<style scoped>

</style>
