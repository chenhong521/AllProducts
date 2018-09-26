/*
    发现品牌的接口
*/
import axios from 'axios'
import {getstorelisturl} from './config'
export function brand () {
  return axios.get(getstorelisturl).then((res) => {
    return Promise.resolve(res.data)
  })
}
