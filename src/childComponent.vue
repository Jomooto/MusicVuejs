<template>
  <div>
    <h1 class="h1">Este es un componente hijo</h1>
    <local-component />
  </div>
</template>

<script>
import localComponent from './localComponent'
export default {
  name: 'childComponent',
  components: {
    localComponent: localComponent
  }
}
</script>

<style scoped>

</style>
