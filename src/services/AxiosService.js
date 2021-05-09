import Axios from 'axios'
// import { baseURL } from '../env'
export const api = Axios.create({
  baseURL: 'https://api.coingecko.com/api/v3/coins/',
  timeout: 8000
})
