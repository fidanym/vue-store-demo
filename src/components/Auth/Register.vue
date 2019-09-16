<template>
    <div>
        <h4>Register</h4>
        <input type="text" v-model="username" name="username" placeholder="Username">
        <input type="email" v-model="email" name="email" placeholder="Email">
        <input type="password" v-model="password" name="password" placeholder="Password">
        <button @click="register">Register</button>
        <p>
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
</style>
