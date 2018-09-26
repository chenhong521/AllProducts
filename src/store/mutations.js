/*
直接更新state的多个方法的对象
 */
import {RECEIVE_PRODUCTLIST, RECEIVE_SHOW, RECEIVE_INDEX} from './mutation-types'

export default {
  [RECEIVE_PRODUCTLIST] (state, {productlist}) {
    state.productlist = productlist
  },
  [RECEIVE_SHOW] (state, {show}) {
    state.show = show
  },
  [RECEIVE_INDEX] (state, {index}) {
    state.index = index
  }
}
