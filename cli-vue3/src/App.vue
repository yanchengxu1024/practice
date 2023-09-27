<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <RRWeb />
</template>

<script>
import RRWeb from './components/RRWeb.vue'

export default {
  name: 'App',
  components: {
    RRWeb
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
  margin-top: 60px;
}
</style>
