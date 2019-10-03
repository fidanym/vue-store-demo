<template>
  <div>
    <transition name="fade" mode="out-in" appear>
      <router-view/>

    </transition>
  </div>
</template>

<script>
  export default {
    name: 'Auth'
  }
</script>

<style scoped>
</style>
