<template>
  <div class="navbar">
    <nav class="deep-purple darken-1">
      <div class="container">
        <router-link :to="{ name: 'home' }" class="brand-logo left">
          GeoNinjas
        </router-link>
        <ul class="right">
          <li>
            <router-link to="/signup">
              Sign up
            </router-link>
          </li>
          <li>
            <router-link to="/login">
              Login
            </router-link>
          </li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Navbar',
  data() {
    return {}
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: 'login' })
        })
    }
  }
}
</script>

<style></style>
