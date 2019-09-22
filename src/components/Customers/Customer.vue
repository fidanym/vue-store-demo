<template>
  <router-link :to="{name: 'customerDetails', params: { id: customer.id }}" class="customer row custom-list-item">
    <div class="col-3">
      <h5>{{customer.name}}</h5>
    </div>
    <div class="col">
      <div class="customer-email">{{customer.email}}</div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'Customer',
    props: {
      customer: Object
    }
  }
</script>

<style scoped>
</style>
