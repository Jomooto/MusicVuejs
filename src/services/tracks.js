// import MusicService from './platiz-music'
import configService from './config'

const axios = require('axios')
const trackService = {}
const baseUrl = configService.apiUrl
trackService.search = function (q) {
  const type = 'track'
  return axios.get(`${baseUrl}/search`, {
    params: {
      q: q,
      type: type
    }
  })
    .then(res => res.data)
    .catch(function (error) {
      console.log(error)
    })
}

trackService.getById = function (id) {
  return axios.get(`${baseUrl}/tracks/${id}`)
    .then(res => res.data)
}

export default trackService
