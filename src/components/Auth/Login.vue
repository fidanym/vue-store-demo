<template>
    <div>
        <h4>Login</h4>
        <input type="text" name="username" v-model="username" placeholder="Username">
        <input type="password" name="password" v-model="password" placeholder="Password">
        <button @click="login">Sign in</button>
        <button @click="userExists">Exist?</button>
        <p>
            Don't have an account?
            <router-link to="/auth/register">Sign up!</router-link>
        </p>
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
          this.$router.push('/');
          alert('login success')
        }).catch(e => {
          alert('login fail')
        })
      },
      userExists() {
          this.$auth.userExists(this.username)
              .then(data => console.log(data))
              .catch(error => console.log(error))
      }
    }
  }
</script>

<style scoped>

</style>
