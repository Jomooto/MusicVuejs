<template>
  <div class="mt-4 ml-md-6 col-12 offset-2" v-if="track.album">
    <pm-loader v-show="isLoading" />
<!--    <pm-track v-bind:track="track"> <p slot="mundo"></p> </pm-track>-->
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
<!--          <img class="card-img-top" v-bind:src="track.album.images[0].url" alt="Imagen de album">-->
          <img v-bind:src="track.album.images[0].url" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{trackTitle}}</h5>
            <p><button class="btn btn-primary btn-lg" v-on:click="selectTrack" >▶</button></p>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">{{}}</small></p>
            <ul v-for="(v, k) in track" v-bind:key="k">
              <li><strong>{{k}}:&nbsp;</strong><span>{{v}}</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import trackMixin from '@/mixins/track'

import PmLoader from '@/components/shared/loader'
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  mixins: [trackMixin],
  components: { PmLoader },

  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },
  created () {
    this.isLoading = true
    const id = this.$route.params.id

    if (!this.track || !this.track.id || this.track.id !== id) {
      this.getTrackById({ id })
        .then(() => {
          console.log('Track loaded ...')
          this.isLoading = false
        })
    }
  },
  methods: {
    ...mapActions(['getTrackById'])
  }

}
</script>

<style scoped>

</style>
