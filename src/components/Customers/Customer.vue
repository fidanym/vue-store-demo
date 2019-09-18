<template>
    <div class="customer">
      <h1>{{customer.name}}</h1>
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