<template>
  <div id="register">
    <h4>Register an administrator account</h4>
    <form @submit.prevent class="m-t-30">
        <div class="form-group">
          <input type="text" class="form-control" v-model="username" name="username" placeholder="Username">
        </div>
      <div class="form-group">
        <input type="email" class="form-control" v-model="email" name="email" placeholder="Email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" v-model="password" name="password" placeholder="Password">
      </div>
      <button class="btn btn-primary btn-block" @click="register">Register</button>
    </form>
    <p class="m-t-15">
      Already have an account?
      <router-link to="/auth/login">Sign in!</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data () {
      return {
        username: '',
        password: '',
        email: ''
      }
    },
    methods: {
      register () {
        this.$auth.register(this.username, this.password, this.email)
          .then(message => {
            alert(message)
            this.$router.push('login')
          })
          .catch(error => {
            alert(error)
          })
      }
    }
  }
</script>

<style scoped>
  #register {
    max-width: 400px;
    margin: 0 auto;
    margin-top: 50px;
  }

  a {
    color: #130f40;
    text-decoration: underline;
  }
</style>
