// import trae from 'trae'
import axios from 'axios'
import configService from './config'
const platziMusicService = axios.create({
  baseUrl: configService.apiUrl,
  timeout: 1000
})

export default platziMusicService
