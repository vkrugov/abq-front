<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="getUsers">get users</button>

  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    getUsers() {
      this.$http.get('http://abq.loc/users').then((response) => {
        console.log(response.data)
      })
    }
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
