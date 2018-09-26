<template>
  <transition name="slide">
    <div class="MessageText">
      <div class="title">
        <span><i class="iconfont icon-1" @click="$router.go(-1)"></i>{{name}}</span>
      </div>
      <div class="con" v-for="item in messagetextList" :key="item.index">
        <div class="con-time">
          <span>{{item.create_time}}</span>
        </div>
        <div class="con-desc">
          <div class="logo"><img :src="imgUrl+logo" width="100%" height="100%"></div>
          <div class="desc">
            <p class="desc-title">{{item.title}}</p>
            <p class="neirou">{{item.content | getSimpleText}}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import MyAjax from '../../assets/js/ajax'
import {messdetailUrl} from '../../assets/uilt/config'
import { mapState } from 'vuex'
var qs = require('qs')
export default {
  data () {
    return {
      merchid: 0,
      name: '',
      logo: '',
      messagetextList: []
    }
  },
  async created () {
    this.merchid = this.$route.query.merchid
    this.name = this.$route.query.name
    this.logo = this.$route.query.logo
    let res = await MyAjax(messdetailUrl, qs.stringify({merchid: this.merchid}), 'PSOT')
    if (res.status === 1) {
      this.messagetextList = res.result.data
    }
  },
  filters: {
    getSimpleText (html) {
      var re1 = new RegExp('<.+?>', 'g') // 匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
      var msg = html.replace(re1, '') // 执行替换成空字符
      return msg
    }
  },
  computed: {
    ...mapState(['imgUrl'])
  }
}
</script>
<style lang="less" scoped>
.MessageText{
  position: fixed;
  background-color: #f4f4f4;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: scroll;
  .title{
    width: 100%;
    background-color: #ffffff;
    height: 1.1733rem;
    line-height: 1.1733rem;
    border-bottom: 1px solid #dbdbdb;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    font-size: 0.4267rem;
    .icon-1{
      position: absolute;
      left: 0.48rem;
    }
  }
  .con{
    width: 100%;
    // height: 3.76rem;
    background-color: #f4f4f4;
    box-sizing: border-box;
    padding: 0 0.3333rem 0.2rem 0.3333rem;
    .con-time{
      width: 100%;
      height: 1.1733rem;
      line-height: 1.1733rem;
      text-align: center;
      font-size: 0.3467rem;
      color: #b4b4b4;
    }
    .con-desc{
      width: 100%;
      // height: 2.5867rem;
      background-color: #ffffff;
      border-radius: 10px;
      display: flex;
      .logo{
        width: 1.2rem;
        height: 1.0933rem;
        margin: 0.88rem 0.2933rem 0.6rem 0.36rem;
      }
      .desc{
        width: 7.2rem;
        .desc-title{
          color: #333333;
          font-size: 0.4rem;
          margin: 0.52rem 0 0.2933rem 0;
        }
        .neirou{
          margin-bottom: 0.6rem;
          font-size: 0.32rem;
          color: #666666;
          text-align:justify;
        }
      }
    }
  }
}
.slide-enter-active, .slide-leave-active{
  transition: all 0.3s;
}
.slide-enter, .slide-leave-to{
  transform: translate3d(100%, 0, 0);
}
</style>
