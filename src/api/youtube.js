import * as axios from "axios";

export const KEY = 'AIzaSyA3YxMd2B5CeAOZBIsu9h13b4Nvvb_nXWo';


export const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

