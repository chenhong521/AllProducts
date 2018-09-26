/*
通过mutation间接更新state的多个方法的对象
 */
import {RECEIVE_PRODUCTLIST, RECEIVE_SHOW, RECEIVE_INDEX} from './mutation-types'

export default {
  // // 异步获取地址
  // async getAddress({commit, state}) {
  //   // 发送异步ajax请求
  //   const geohash = state.latitude + ',' + state.longitude
  //   const result = await reqAddress(geohash)
  //   // 提交一个mutation
  //   if (result.code === 0) {
  //     const address = result.data
  //     commit(RECEIVE_ADDRESS, {address})
  //   }
  // },

  // 同步记录用户信息
  reproductlist ({commit}, productlist) {
    commit(RECEIVE_PRODUCTLIST, {productlist})
  },
  reshow ({commit}, show) {
    commit(RECEIVE_SHOW, {show})
  },
  reindex ({commit}, index) {
    commit(RECEIVE_INDEX, {index})
  }
}
