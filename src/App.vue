<template>
  <div id="app">
    <nav v-if="isLoggedIn" class="main-nav">
      <loader :key="isLoading" :is-loading="isLoading"></loader>
      <burger></burger>
    </nav>

    <sidebar v-if="isLoggedIn" :user="currentUser"></sidebar>

    <div class="container">
      <router-view/>
    </div>
  </div>

</template>

<script>

    import Burger from "./components/Menu/Burger";
    import Sidebar from "./components/Menu/Sidebar";
    import Loader from "./components/Loader";

    export default {
        name: 'App',
        components: {
            burger: Burger,
            sidebar: Sidebar,
            loader: Loader
        },
        computed: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn
            },
            currentUser() {
                return sessionStorage.getItem('currentUser')
            },
            isLoading() {
                return this.$store.state.isLoading
            }
        }
    }
</script>

<style>
  html {
    height: 100%;
    overflow: hidden;
  }

  body {
    border: 0;
    margin: 0;
    padding: 0;
    height: 100%;
    background: rgb(101, 31, 87);
    background: linear-gradient(45deg, rgba(101, 31, 87, 1) 0%, rgba(225, 113, 87, 1) 48%, rgba(249, 248, 113, 1) 100%);
  }

  .container {
    padding: 50px;
    margin-top: 50px;
    background-color: #fff;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    box-shadow: #000 0 5px 5px -6px;
  }

  .main-nav {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  ul.sidebar-panel-nav {
    list-style-type: none;
  }

  ul.sidebar-panel-nav > li > a {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    display: block;
    padding-bottom: 0.5em;
  }
</style>
