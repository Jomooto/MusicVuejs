<template>
  <div id="audio" class="text-center mt-4 content" v-if="(track && track.album) && track.preview_url">
<!--  <div class="content" v-if="Object.entries(track).length != 0 && track.preview_url">-->
<!--  <div class="content" v-if="track && track.album">-->
<!--    <p class="col-md-5">-->
      <img class="rounded mx-auto d-block" v-bind:src="track.album.images[0].url" alt="">
<!--    </p>-->
      <p class="strong">{{track.name}}</p>
      <small>[{{track.duration_ms | ms-to-mm}}]</small>
      <p><audio  v-bind:src="track.preview_url" controls></audio></p>

  </div>
</template>

<script>

export default {
  name: 'player',
  data () {
    return {
      track: {}
    }
  },

  created () {
    this.$bus.$on('set-track', (track) => {
      this.track = track
    })
  }

}
</script>

<style scoped>
  img{
    width: 124px;
    border-radius: 50%;
  }
</style>
