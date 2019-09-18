<template>
  <div id="customers">
    <h1>Customers</h1>
    <customer v-if="loaded" v-for="customer in customers" :customer="customer"></customer>
  </div>
</template>

<script>
    import Customer from "./Customer";

    export default {
        name: "Customers",
        data: function () {
            return {
                customers: [],
                loaded: false
            }
        },
        components: {
            customer: Customer
        },
        methods: {
          loadCustomers() {
              let self = this;
              this.$store.dispatch('loadCustomers')
                  .then(customers => {
                      debugger;
                      self.customers = customers
                      self.loaded = true
                  })
          }
        },
        created() {
            this.loadCustomers()
        }
    }
</script>

<style scoped>

</style>