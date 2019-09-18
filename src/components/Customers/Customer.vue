<template>
    <div class="customer">
      <h3>{{customer.username}}</h3>
    </div>
</template>

<script>
    export default {
        name: "Customer",
        props: {
            customer: Object
        }
    }
</script>

<style scoped>

</style>