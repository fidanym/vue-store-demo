<template>
  <div id="customers">
    <h1>Customers</h1>
    <div v-if="!isLoading && customers !== null" class="customer-list">
      <div class="row table-header">
        <div class="col-3">Name</div>
        <div class="col">E-mail</div>
      </div>
      <customer v-for="customer in customers" :customer="customer"></customer>
    </div>
    <loader :is-loading="isLoading"></loader>
  </div>
</template>

<script>
  import Customer from './Customer'
  import Loader from '../Loader'

  export default {
    name: 'Customers',
    components: {
      customer: Customer,
      loader: Loader
    },
    computed: {
      customers () {
        return this.$store.getters.customers
      },
      isLoading () {
        return this.customers === 'loading'
      }
    },
    created () {
      this.$store.dispatch('loadCustomers')
    }
  }
</script>

<style scoped>
  .table-header {
    border-bottom: 1px solid #a7a7a7;
    font-weight: bold;
    font-size: 1.3em;
    padding-bottom: 5px;
    margin-bottom: 10px;
  }
</style>
