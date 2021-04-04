<template>
    <div id="app">
      <pm-header />
      <router-view />
      <pm-footer />

    </div>

</template>

<script>
import PmFooter from '@/components/layout/footer'
import PmHeader from '@/components/layout/header'

export default {
  name: 'App',

  components: {
    PmFooter,
    PmHeader
  }

}
</script>

<style lang="scss">
@import "./scss/main.scss";
</style>
