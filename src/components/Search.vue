<template>
    <div id="app" class="row mx-md-6">
      <pm-header />
      <div class="col-6 offset-3">
<!--        <pm-notifications v-show="showNotifications"> <p slot="body">Algo andubo remal</p> </pm-notifications>-->
        <pm-notifications v-show="initial"  v-bind:class="!showNotifications ?'alert-info':'alert-danger'">
          <p v-show="!showNotifications"  slot="body">{{searchMessage}}</p>
          <p v-show="showNotifications" slot="body">Algo andubo remal</p>
        </pm-notifications>
      </div>
      <pm-loader v-show="isLoading" />
      <div class="row col-12 mx-6" v-show="!isLoading">
        <div class="container mt-6 col-6" >
          <div class="input-group input-group-lg">
            <input class="form-control input-lg" type="text"
                   placeholder="Nueva busqueda"  v-model="searchQuery">
          </div>
<!--            <p>{{searchMessage}}</p>-->

        </div>

        <div class="col-6 mt-6">
          <a class="btn btn-info btn-lg mr-2" v-on:click="search"> Buscar </a>
          <a class="btn btn-danger btn-lg" v-on:click="borrar"  > Borrar </a>
        </div>

        <div class="row">
          <tr class="col-md-4 mt-6" v-for="t in tracks" v-bind:key="t.id">
            <pm-tracks v-bind:class="{ 'isActive': t.id === selectedTrack}" v-bind:track="t" v-on:select="setSelectedTrack"/>
<!--            <td >{{t.name}} - {{ t.artists[0].name}}</td>-->
          </tr>

        </div>
      </div>

        <pm-footer />

    </div>

</template>

<script>
import trackService from '@/services/tracks'

import PmFooter from '@/components/layout/footer'
import PmHeader from '@/components/layout/header'

import PmTracks from '@/components/Track'

import PmLoader from '@/components/shared/loader'
import PmNotifications from '@/components/shared/notification'

export default {
  name: 'App',

  components: {
    PmFooter,
    PmHeader,
    PmTracks,
    PmLoader,
    PmNotifications

  },

  data () {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotifications: false,
      initial: false

    }
  },
  computed: {

    searchMessage () {
      this.reset()
      return `Encontrados ${this.tracks.length}`
    }

  },
  watch: {
    showNotifications () {
      if (this.showNotifications) {
        setTimeout(() => {
          this.initial = false
        }, 3000)
      }
    }

  },

  methods: {

    reset () {
      setTimeout(() => {
        this.searchQuery = ''
        this.initial = false
      }, 3000)
    },

    search () {
      if (!this.searchQuery) {
        return
      }
      this.initial = true
      this.isLoading = true

      trackService.search(this.searchQuery)
        .then(res => {
          this.showNotifications = res.tracks.total === 0
          this.tracks = res.tracks.items
          this.isLoading = false
        })
    },
    borrar () {
      this.tracks = []
    },
    setSelectedTrack (id) {
      this.selectedTrack = id
    }

  }

}
</script>

<style lang="scss">
@import "../scss/main";
.isActive{
  border: 3px #23d160 solid;
}
</style>
