<template>
  <div id="customers">
    <h1>Customers</h1>
    <div v-if="customers !== 'loading' && customers !== null" class="customer-list">
      <customer v-for="customer in customers" :customer="customer"></customer>
    </div>
  </div>
</template>

<script>
    import Customer from "./Customer";

    export default {
        name: "Customers",
        components: {
            customer: Customer
        },
        computed: {
          customers() {
              return this.$store.getters.customers
          }
        },
        created() {
            this.$store.dispatch('loadCustomers')
        }
    }
</script>

<style scoped>

</style>