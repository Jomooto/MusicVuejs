<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Bienvenido al mundo de Vuejs ok'
    }
  }
}
</script>

<style lang="scss">
</style>
