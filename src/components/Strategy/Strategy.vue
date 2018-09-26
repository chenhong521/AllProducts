<template>
  <div class="strategy">
    <div class="strategy-title">
      <i class="iconfont icon-chengtiao"></i>
      <span class="title-text">贷款攻略</span>
      <a href="./index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=sns.board&id=26&page=1" class="title-all">更多<i class="iconfont icon-gengduo"></i></a>
    </div>
    <div class="strategy-con" v-for="(item, index) in newsData" :key="index">
      <div class="con-title">
        <img :src="imgUrl+item.logo">
        <span class="title">{{item.merchname}}</span>
        <span ref="span" :data-openid="item.openid" :class="item.isfollow === 1 ? 'follow' : 'follow2'" @click="follow(item.openid, index, item.isfollow)"><i class="iconfont icon-aixin"></i>关注</span>
      </div>
      <a class="con" :href="newsListUrl+item.id">
        <div class="com-img">
          <img :src="item.images ? (imgUrl+item.images) : require('../../assets/img/news1@2x.png')" width="100%">
        </div>
        <div class="con-text">
          <span class="text-title ellipsis">{{item.title.length>16?item.title.substr(0, 16)+'...':item.title}}</span>
          <p class="text">{{item.content | getSimpleText}}</p>
        </div>
      </a>
      <div class="bottom">
        <span class="kan"><i class="iconfont icon-chakan1"></i>&nbsp;{{item.goodcount}}</span>
        <span class="zan"><i class="iconfont icon-dianzan"></i>&nbsp;{{item.views}}</span>
      </div>
    </div>
  </div>
</template>
<script>
import Myajax from '../../assets/js/ajax'
import {newUrl, followUrl} from '../../assets/uilt/config'
import {mapState} from 'vuex'
export default {
  // 近年来，国家不断倡导金融机构加大对中小企业的金融扶持力度，而随着金融科技的不断发展...
  data () {
    return {
      newsData: []
    }
  },
  computed: {
    ...mapState(['imgUrl', 'newsListUrl'])
  },
  async created () {
    let res = await Myajax(newUrl)
    if (res.status === 1) {
      this.newsData = res.result.data
      // console.log(this.newsData)
    }
  },
  methods: {
    async follow (openid, index, isfollow) {
      let isguan = await Myajax(followUrl + `${openid}`)
      let y = 'follow2'
      // console.log(this.$refs.span[index].dataset.openid)
      if (isguan.status === 1) {
        y = 'follow'
      } else if (isguan.status === 2) {
        /* eslint-disable */
        y = 'follow2'
      }
      for (var i = 0; i < 3; i++) {
        if (openid === this.$refs.span[i].dataset.openid) {
          this.$refs.span[i].className = y
        }
      }
    }
  },
  filters: {
    getSimpleText: function (html) {
      var re1 = new RegExp('<.+?>', 'g') // 匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
      var msg = html.replace(re1, '') // 执行替换成空字符
      var re2 = msg.substring(0, 40)
      return re2 + '...'
    }
  }
}
</script>
<style lang="less" scoped>
.strategy{
  width: 100%;
  .strategy-title{
    background-color:#ffffff;
    width: 100%;
    padding-right: 0.2667rem;
    box-sizing: border-box;
    height: 1.2rem;
    line-height: 1.2rem;
    border-bottom: 1px solid #f4f4f4;
    .icon-chengtiao{
      color: #ff6600;
    }
    .title-text{
      font-size: 0.4267rem;
      color: #333333;
    }
    .title-all{
      font-size: 0.2933rem;
      float: right;
      color: #666666;
    }
    .icon-gengduo{
      font-size: 0.2933rem;
      color: #666666;
    }
  }
  .strategy-con{
    width: 100%;
    background-color:#ffffff;
    // height: 4.4rem;
    box-sizing: border-box;
    padding: 0.2667rem 0.5733rem;
    border-bottom: 1px solid #f4f4f4;
    .con-title{
      width: 100%;
      height: 1.1333rem;
      line-height: 1.1333rem;
      margin-bottom: 0.4133rem;
      .title{
        font-size: 0.3733rem;
        color: #333333;
      }
      img{
        width:1.1333rem;
        vertical-align: middle;
        margin-right: 0.2933rem;
      }
      span{
        display: inline-block;
        vertical-align: middle;
        .icon-aixin{
          font-size: 0.32rem;
        }
      }
      .follow{
        float: right;
        font-size: 0.32rem;
        color:#f74848;
      }
      .follow2{
        color:#666666;
        float: right;
        font-size: 0.32rem;
      }
    }
    .con{
      width: 100%;
      display: flex;
      margin-bottom: 0.3733rem;
      .com-img{
        width: 1.9067rem;
        height: 1.6rem;
        margin-right: 0.3333rem;
      }
      .con-text{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .text-title{
          display: inline-block;
          width: 6.2667rem;
          font-size: 0.3467rem;
          color: #333333;
        }
        .text{
          display: inline-block;
          width: 6.2667rem;
          height: 0.88rem;
          color: #666666;
          font-size: 0.2933rem;
          line-height:0.47rem;
          overflow-y: hidden;
        }
      }
    }
    .bottom{
      width: 100%;
      height: 0.6133rem;
      line-height: 0.6133rem;
      .zan,.kan{
        float: right;
        font-size: 0.3467rem;
        color: #333333;
        margin-left: 0.5333rem;
      }
    }
  }
}
</style>
