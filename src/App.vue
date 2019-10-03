<template>
  <div id="app">
    <nav v-if="isLoggedIn" class="main-nav">
      <burger></burger>
    </nav>

    <sidebar v-if="isLoggedIn" :user="currentUser"></sidebar>

    <div class="container">
      <transition name="fade" mode="out-in" appear>
        <router-view/>
      </transition>
    </div>
  </div>

</template>

<script>

    import Burger from "./components/Menu/Burger";
    import Sidebar from "./components/Menu/Sidebar";

    export default {
        name: 'App',
        components: {
            burger: Burger,
            sidebar: Sidebar,
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            },
            currentUser() {
                return sessionStorage.getItem('currentUser')
            }
        }
    }
</script>

<style src="@/assets/css/style.css"></style>
