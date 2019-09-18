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
    min-height: 250px;
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

  .fade-enter-active {
    transition: opacity 1s;
    -webkit-transition: opacity 1s;
    opacity: 1;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-leave {
    display: none;
  }
  .fade-leave-active {
    display: none;
  }
</style>
