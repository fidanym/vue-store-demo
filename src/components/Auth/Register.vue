<template>
    <div>
        <h4>Register</h4>
        <input type="text" name="username" placeholder="Username">
        <input type="email" name="email" placeholder="Email">
        <input type="password" name="password" placeholder="Password">
        <button>Register</button>
        <p>
            Already have an account?
            <router-link to="/auth/login">Sign in!</router-link>
        </p>
    </div>
</template>

<script>
  export default {
    name: 'Register'
  }
</script>

<style scoped>
</style>
