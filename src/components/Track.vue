<template>

  <div class="card text-center bg-light mb-3 h-100" v-if="track && track.album" style="width: 18rem;">
      <img class="card-img-top" v-bind:src="track.album.images[0].url" alt="Imagen de album">
    <div class="card-body">
      <h3 class="card-title h3">{{track.name}}</h3>
      <p class="card-text h5">{{track.artists[0].name}}</p>
      <h6>{{ track.duration_ms | ms-to-mm }}</h6>
      <button v-on:click="selectTrack" data-target="#exampleModal" class="btn btn-primary btn-lg">▶</button>
      <slot name="mundo">
        <button v-on:click="goTotrack(track.id)" class="btn btn-warning btn-lg">🌎</button>
      </slot>
    </div>
  </div>
</template>

<script>
import trackMixin from '@/mixins/track'
export default {
  mixins: [trackMixin],
  props: {
    track: {
      type: Object,
      required: true

    }
  },
  methods: {
    goTotrack (id) {
      if (!this.track.preview_url) {
        return
      }
      this.$router.push({ name: 'track', params: { id: id }, loader: false })
    }
  }
}
</script>

<style scoped>

</style>
