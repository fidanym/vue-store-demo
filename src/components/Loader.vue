<template>
  <div v-show="isLoading" class="loading-spinner">
    <font-awesome-icon icon="spinner" spin/>
  </div>

</template>

<script>
    export default {
        name: "Loader",
        props: {
            isLoading: Boolean
        }
    }
</script>

<style scoped>
  .loading-spinner {
    font-size: 3em;
    color: #ababab;
    position: absolute;
    left: 50%;
  }
</style>