<template>
<!--  <nav class="container col-12 navbar navbar-expand-lg navbar-light">-->
<!--    <a class="navbar-brand text-black"> Music</a>-->
<!--    <div class="collapse navbar-collapse">-->
<!--      <div class="navbar-nav">-->
<!--        <router-link class="nav-item nav-link" v-bind:to="{ name: 'Search'}"> Buscar </router-link>-->
<!--        <router-link class="nav-item nav-link" to="About"> Nosotros </router-link>-->
<!--        <a class="nav-item nav-link">Canciones que estan Vue-nisimas</a>-->

<!--      </div>-->
<!--    </div>-->
<!--    <pm-player />-->
<!--  </nav>-->
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/"> Music</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="about">Us</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="text-center">
      <pm-player/>
    </div>

  </div>

</template>

<script>
import PmPlayer from '@/components/player'
export default {
  components: { PmPlayer }
}
</script>
