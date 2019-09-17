<template>
  <div class="sidebar">
    <div class="sidebar-backdrop" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
    <transition name="slide">
      <div v-if="isPanelOpen"
           class="sidebar-panel">
        <h4><font-awesome-icon icon="user" /> {{username}}</h4>
        <hr>
        <ul class="sidebar-panel-nav">
          <li @click="logout"><font-awesome-icon icon="power-off" /> Logout</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
    export default {
        name: "Sidebar",
        methods: {
            closeSidebarPanel() {
                this.$store.dispatch('toggleNav')
            },

            logout() {
                this.$store.dispatch('logout')
                    .then(() => {
                        this.closeSidebarPanel()
                        this.$router.push('auth')
                    })
            }
        },
        computed: {
            isPanelOpen() {
                return this.$store.getters.isNavOpen
            },
            username() {
                let user = sessionStorage.getItem('currentUser');
                debugger;
                if (!user) {
                    return 'error';
                }

                user = JSON.parse(user);

                if (typeof user.username !== 'undefined') {
                    return user.username;
                }
            }
        }
    }
</script>

<style scoped>
  .sidebar {
    color: #fff;
  }

  .slide-enter-active,
  .slide-leave-active
  {
    transition: transform 0.2s ease;
  }

  .slide-enter,
  .slide-leave-to {
    transform: translateX(-100%);
    transition: all 150ms ease-in 0s
  }

  .sidebar-backdrop {
    background-color: rgba(0,0,0,.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  .sidebar-panel {
    overflow-y: auto;
    background-color: #130f40;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    padding: 3rem 20px 2rem 20px;
    width: 300px;
  }

  .sidebar-panel-nav li {
    font-size: 1.4em;
    cursor: pointer;
  }

  .sidebar-panel-nav li:hover {
    color: #cccccc;
  }

  .sidebar-panel hr {
    border-top: 2px solid rgb(255, 255, 255);
  }
</style>