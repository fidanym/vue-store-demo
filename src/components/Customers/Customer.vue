<template>
  <div class="customer row custom-list-item">
    <div class="col-3">
      <h5>{{customer.name}}</h5>
    </div>
    <div class="col">
      <div class="customer-email">{{customer.email}}</div>
    </div>
  </div>
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
