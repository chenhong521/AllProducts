<template>
  <transition name="slide">
    <div class="message">
      <div class="title">
        <span><i class="iconfont icon-1" @click="$router.go(-1)"></i>消息中心</span>
      </div>
      <div class="message-con1" v-if="messageList.length == 0">暂无消息~</div>
      <div v-else class="message-con" @click="routerTo(item.merchid, item.name, item.logo)" v-for="item in messageList" :key="item.index">
        <div class="logo">
          <img :src="imgUrl+item.logo" alt="" width="100%" height="100%">
        </div>
        <div class="text">
          <p><span class="left">{{item.title}}</span><span class="right">{{item.create_time | sub}}</span></p>
          <p class="disc">{{item.content | getSimpleText}}</p>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </transition>
</template>
<script>
import MyAjax from '../../assets/js/ajax'
import { messlistUrl } from '../../assets/uilt/config'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      messageList: []
    }
  },
  async created () {
    let res = await MyAjax(messlistUrl)
    if (res.status === 1) {
      this.messageList = res.result.data
      console.log(this.messageList)
    }
  },
  methods: {
    routerTo (id, name, logo) {
      this.$router.push({
        path: '/message/messagetext',
        name: 'MessageText',
        query: {
          merchid: id,
          name: name,
          logo: logo
        }
      })
    }
  },
  filters: {
    sub (str) {
      var a = str.substr(0, 10)
      return a
    },
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
.message{
  width: 100%;
  height: 100vh;
  background-color: #f4f4f4;
  position: relative;
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
      position: fixed;
      left: 0.48rem;
    }
  }
  .message-con1{
    width: 100%;
    height: 2.1333rem;
    background-color: #f4f4f4;
    box-sizing: border-box;
    padding: 0.5333rem 0.48rem;
    font-size: 0.4267rem;
    text-align: center;
    line-height: 1.0667rem;
    color: #333333;
  }
  .message-con{
    width: 100%;
    height: 2.1333rem;
    background-color: #ffffff;
    border-bottom: 1px solid #dbdbdb;
    box-sizing: border-box;
    padding: 0.5333rem 0.48rem;
    display: flex;
    .logo{
      width: 1.1733rem;
      height: 1.0667rem;
      margin-right: 0.2933rem;
    }
    .text{
      display: flex;
      width: 7.6rem;
      height: 1.0667rem;
      flex-direction: column;
      justify-content: space-between;
      .left{
        font-size: 0.4rem;
      }
      .right{
        float: right;
        color: #666666;
        font-size: 0.2933rem;
      }
      .right::after{
        content: '';
        display: block;
        clear:both;
      }
      .disc{
        color: #666666;
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
