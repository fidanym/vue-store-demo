<template>
    <div>
        <h1>Home component</h1>
        <h3 v-if="isLoggedIn">You are logged in</h3>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    computed: {
      isLoggedIn() {
        return this.$store.getters.isLoggedIn;
      }
    }
  }
</script>

<style scoped>

</style>
