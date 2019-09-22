<template>
  <div id="login">
    <h4>Welcome to your store manager</h4>
    <form @submit.prevent class="m-t-30">
      <div class="form-group">
        <input type="text" class="form-control" name="username" v-model="username" placeholder="Username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" name="password" v-model="password" v-on:keyup.enter="login"
               placeholder="Password">
      </div>
      <button class="btn btn-primary btn-block m-t-15" @click="login">Sign in</button>
      <p class="m-t-15">
        Don't have an account?
        <router-link to="/auth/register">Sign up!</router-link>
      </p>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      login () {
        this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        }).then(() => {
          this.$router.push('/')
        })
          .catch(e => {
            alert('login fail')
          })
      }
    }
  }
</script>

<style scoped>
  #login {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 50px;
  }

  a {
    color: #130f40;
    text-decoration: underline;
  }
</style>
