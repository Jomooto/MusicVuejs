import Vue from 'vue'
import Vuex from 'vuex'
import trackService from '@/services/tracks'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    track: {},
    tracks: []
  },
  mutations: {
    setTrack (state, track) {
      this.state.track = track
    },
    setTracks (state) {
      this.state.tracks = []
    }
  },
  getters: {
    trackTitle (state) {
      if (!state.track.name) { return '' }
      return `${state.track.name} - ${state.track.artists[0].name}`
    }
  },

  actions: {
    getTrackById (context, payload) {
      return trackService.getById(payload.id)
        .then(res => {
          context.commit('setTrack', res)
          return res
        })
    }
  }
})

export default store
