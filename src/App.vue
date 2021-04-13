<template>
  <div id="app">
    <Header/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <Banner/> -->
    <router-view/>
  </div>
</template>

<script>
// import Banner from './components/Banner.vue'
import Header from './components/Header.vue'
// import Login from './components/Login.vue'
// import Register from './components/Register.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
