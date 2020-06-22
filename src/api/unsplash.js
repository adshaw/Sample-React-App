import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Dt7TT-PS6Zxjkcx_BgbSl-FFzvGL4AMXBR8QPb3nZUM'
  }
})
