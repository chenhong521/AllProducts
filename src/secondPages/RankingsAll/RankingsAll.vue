<template>
  <div class="RankingsAll">
    <div class="rankings-title" @touchmove.prevent>
      <div class="title-item" @click="zonghe=!zonghe;leixing=false;pinpai=false" :class="zonghe ? 'active' : ''"><span>综合排行&nbsp;</span><i class="iconfont icon-hui"></i></div>
      <div class="title-item" @click="leixing=!leixing;zonghe=false;pinpai=false" :class="leixing ? 'active' : ''"><span>产品类型&nbsp;</span><i class="iconfont icon-hui"></i></div>
      <div class="title-item" @click="pinpai=!pinpai;leixing=false;zonghe=false"  :class="pinpai ? 'active' : ''"><span>品牌&nbsp;</span><i class="iconfont icon-hui"></i></div>
    </div>
    <div class="classify1" @touchmove.prevent v-if="zonghe">
      <div class="classify-item" @click="toggle(1)">人气排行</div>
      <div class="classify-item" @click="toggle(2, 2)">利率(低到高)</div>
      <div class="classify-item" @click="toggle(2)">利率(高到低)</div>
      <div class="classify-item" @click="toggle(3, 2)">额度(高到低)</div>
      <div class="classify-item" @click="toggle(3)">额度(低到高)</div>
      <div class="classify-item" @click="toggle(4, 2)">期限(长到短)</div>
      <div class="classify-item" @click="toggle(4)">期限(短到长)</div>
      <div class="classify-item" @click="toggle(1)">等额本息</div>
      <div class="classify-item" @click="toggle(1)">先息后本</div>
      <div class="classify-item" @click="toggle(1)">等额本金</div>
    </div>
    <div class="classify2" @touchmove.prevent v-if="leixing">
      <div class="classify-item" @click="toggle(1, 1, 1182, 0)">房抵贷</div>
      <div class="classify-item" @click="toggle(1, 1, 1183, 0)">车抵贷</div>
      <div class="classify-item" @click="toggle(1, 1, 1184, 0)">极速贷款</div>
      <div class="classify-item" @click="toggle(1, 1, 1185, 0)">月供贷</div>
      <div class="classify-item" @click="toggle(1, 1, 1186, 0)">公积金贷</div>
      <div class="classify-item" @click="toggle(1, 1, 1187, 0)">保单贷</div>
      <div class="classify-item" @click="toggle(1, 1, 1188, 0)">企业贷</div>
      <div class="classify-item" @click="toggle(1, 1, 1189, 0)">装修贷</div>
    </div>
    <div class="classify3" @touchmove.prevent v-if="pinpai">
      <div class="classify-item" @click="toggle(1, 1, 0, 111)">平安银行</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 112)">厦门国际银行</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 113)">福建海峡银行</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 114)">浦发银行</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 115)">中国民生银行</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 116)">中国邮政</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 117)">农商银行</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 118)">厦门银行</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 119)">农业银行</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 120)">招商银行</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 121)">光大银行</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 122)">兴业银行</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 123)">友金普惠</div>
      <div class="classify-item" @click="toggle(1, 1, 0, 124)">平安普惠</div>
    </div>
    <div class="yy" @touchmove.prevent v-if="zonghe|| leixing || pinpai" @click="zonghe=false;leixing=false;pinpai=false"></div>
    <div class="page-loadmore-wrapper" :style="{ height: wrapperHeight + 'px' }">
      <!-- <mt-spinner v-show="ProductList.length<1 && InitialLoading" color="#26a2ff"></mt-spinner> -->
      <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <!-- :auto-fill="true" 时页面加载完毕时 默认执行loadBottom 值为false时 自己写一个加载 -->
        <div class="hot-list">
          <div class="message-con1" v-if="ProductList.length == 0">暂无产品~</div>
          <div class="rankings-item" v-for="(item, index) in ProductList" :key="index">
            <a class="item-logo" :href="dataUrl+item.id">
              <img :src="imgUrl+item.thumb" width="100%">
            </a>
            <a class="item-con" :href="dataUrl+item.id">
              <p><span class="title">{{item.title}}</span><span class="type">{{item.name}}</span></p>
              <p><span>可贷</span><span class="limit">{{item.wt_minfund + '万'+'~'+item.wt_maxfund +'万'}}</span> <span>月利率：</span><span class="rate">{{item.wt_rate+'%'}}</span></p>
              <p><span>期限：</span><span class="rate">{{+item.wt_maxtime/12+'年'}}</span>&nbsp;&nbsp;&nbsp;<span class="rate">{{item.sales}}</span><span>人申请</span></p>
            </a>
          </div>
        </div>
        <!-- <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" >↓</span>
          <mt-spinner v-show="topStatus == 'loading'" type="triple-bounce" color="#666666"></mt-spinner>
        </div> -->
        <div v-if="allLoaded" style="text-align:center;" class="noMore">没有更多数据了~</div>
        <!-- <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" >↑</span>
          <mt-spinner v-show="bottomStatus == 'loading'" type="triple-bounce" color="#666666"></mt-spinner>
        </div> -->
      </mt-loadmore>
    </div>
  </div>
</template>
<script>
import Myajax from '../../assets/js/ajax'
import { searchurl } from '../../assets/uilt/config'
import { mapState } from 'vuex'
import { Indicator } from 'mint-ui'
var qs = require('qs')
export default {
  data () {
    return {
      pageNum: 1, // 页码
      InitialLoading: true, // 初始加载
      ProductList: [], // 数据
      allLoaded: false, // 数据是否加载完毕
      bottomStatus: '', // 底部上拉加载状态
      wrapperHeight: 0, // 容器高度
      topStatus: '', // 顶部下拉加载状态
      translate: 0,
      moveTranslate: 0,
      zonghe: false,
      leixing: false,
      pinpai: false,
      active: false,
      // 数据类型
      Rtype: 1,
      Rorder: 1,
      Rpcate: 0,
      Rstoreid: 0
    }
  },
  async mounted () {
    let index = this.index
    this.wrapperHeight = document.documentElement.clientHeight - 45
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    })
    if (index !== 0) {
      let res = await Myajax(searchurl, qs.stringify({type: 1, order: 1, pcate: index, storeid: 0, page: this.pageNum}), 'POST')
      if (res.status === 1) {
        this.ProductList = res.result.data
        Indicator.close()
      }
    } else {
      let res = await Myajax(searchurl, qs.stringify({page: this.pageNum}), 'POST')
      if (res.status === 1) {
        this.ProductList = res.result.data
        Indicator.close()
      }
    }
  },
  methods: {
    handleBottomChange (status) {
      this.moveTranslate = 1
      this.bottomStatus = status
    },
    async loadBottom () {
      this.handleBottomChange('loading')
      this.pageNum += 1
      // Indicator.open({
      //   text: '加载中...',
      //   spinnerType: 'fading-circle'
      // })
      let res = await Myajax(searchurl, qs.stringify({type: this.Rtype, order: this.Rorder, pcate: this.Rpcate, storeid: this.Rstoreid, page: this.pageNum}), 'POST')
      if (res.status === 1) {
        if (res.result.data.length > 0) {
          this.ProductList = this.ProductList.concat(res.result.data)
        } else {
          this.allLoaded = true
        }
        // Indicator.close()
      }
      this.handleBottomChange('loadingEnd')
      this.$refs.loadmore.onBottomLoaded()
    },
    handleTopChange (status) {
      this.moveTranslate = 1
      this.topStatus = status
      // console.log(this.topStatus)
    },
    translateChange (translate) {
      const translateNum = +translate
      this.translate = translateNum.toFixed(2)
      this.moveTranslate = (1 + translateNum / 70).toFixed(2)
    },
    async loadTop () { // 下拉刷新 模拟数据请求这里为了方便使用一次性定时器
      this.handleTopChange('loading') // 下拉时 改变状态码
      this.pageNum = 1
      this.allLoaded = false // 下拉刷新时解除上拉加载的禁用
      // Indicator.open({
      //   text: '刷新中...',
      //   spinnerType: 'fading-circle'
      // })
      let res = await Myajax(searchurl, qs.stringify({type: this.Rtype, order: this.Rorder, pcate: this.Rpcate, storeid: this.Rstoreid, page: this.pageNum}), 'POST')
      if (res.status === 1) {
        this.ProductList = res.result.data // 数据初始化
        if (res.result.data.length < 10) {
          this.allLoaded = true
        } else {
          this.allLoaded = false
        }
        this.handleTopChange('loadingEnd') // 数据加载完毕 修改状态码
        this.$refs.loadmore.onTopLoaded()
        // Indicator.close()
      }
    },
    async toggle (type, order = 1, pcate = 0, storeid = 0, page = 1) {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      let res = await Myajax(searchurl, qs.stringify({type: `${type}`, order: `${order}`, pcate: `${pcate}`, storeid: `${storeid}`, page: `${page}`}), 'POST')
      if (res.status === 1) {
        Indicator.close()
        this.ProductList = res.result.data
        if (res.result.data.length < 10) {
          this.allLoaded = true
        } else {
          this.allLoaded = false
        }
      }
      this.zonghe = false
      this.leixing = false
      this.pinpai = false
      this.Rtype = type
      this.Rorder = order
      this.Rpcate = pcate
      this.Rstoreid = storeid
      // console.log(this.Rtype, this.Rorder, this.Rpcate, this.Rstoreid)
    }
  },
  computed: {
    ...mapState(['imgUrl', 'dataUrl', 'index'])
  }
}
</script>
<style scoped lang="less">
.RankingsAll{
  width: 100%;
  position: relative;
  .rankings-title{
    width: 100%;
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #dbdbdb;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding:0 0.8533rem;
    .title-item{
      font-size: 0.3733rem;
      .iconfont{
        font-size: 0.1867rem;
      }
    }
  }
  .classify1{
    position: absolute;
    width: 100%;
    height: 4.6rem;
    z-index: 10;
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 0.4267rem 0.3867rem;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    text-align: center;
    flex-wrap: wrap;
    .classify-item{
      width: 30%;
      height: 0.6133rem;
      line-height: 0.6133rem;
      border: 1px solid #b3afaf;
      color: #b3afaf;
    }
    .classify-item:hover {
      border: 1px solid #b3afaf;
      color: #b3afaf;
    }
  }
  .classify2{
    position: absolute;
    width: 100%;
    height: 2.6933rem;
    z-index: 10;
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 0.4267rem 0.3867rem;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    text-align: center;
    flex-wrap: wrap;
    .classify-item{
      width: 22%;
      height: 0.6133rem;
      line-height: 0.6133rem;
      border: 1px solid #b3afaf;
      color: #b3afaf;
    }
  }
  .classify3{
    position: absolute;
    width: 100%;
    height: 4.7067rem;
    z-index: 10;
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 0.4267rem 0.3867rem;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    text-align: center;
    flex-wrap: wrap;
    .classify-item{
      width: 22%;
      height: 0.6133rem;
      line-height: 0.6133rem;
      border: 1px solid #b3afaf;
      color: #b3afaf;
    }
  }
  .yy{
    position: absolute;
    z-index: 1;
    opacity: 0.3;
    background: #000000;
    width: 100%;
    height: 100vh;
  }
}
.page-loadmore-wrapper {
  overflow: auto;
  background-color: #f4f4f4;
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
.rankings-item{
  width: 100%;
  background-color: #ffffff;
  height: 2.44rem;
  box-sizing: border-box;
  padding: 0.3733rem 0.4133rem 0.32rem 0.4133rem;
  border-bottom: 1px solid #f4f4f4;
  display: flex;
  .item-logo{
    display: block;
    width: 1.7067rem;
    height: 1.7067rem;
    border: 1px solid #f4f4f4;
    margin-right: 0.56rem;
  }
  .item-con{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #9b9b9b;
    .title{
      font-size: 0.4267rem;
      color: #333333;
    }
    .type{
      display: inline-block;
      border: 1px solid #0e2ea5;
      font-size: 0.32rem;
      margin-left: 0.2667rem;
      color: #333333;
    }
    .limit{
      color: #e74040;
      font-size: 0.4rem;
      margin-right: 0.2667rem;
      margin-left: 0.1733rem;
    }
    .rate{
      // display: inline-block;
      // width: 3.3333rem;
      color: #e74040;
      // overflow: hidden;
      // text-overflow: ellipsis;
      // white-space: nowrap;
      // line-height: 11px;
      font-size: 0.4rem;
    }
  }
}
.noMore{
  color: #333333;
  text-align: center;
  width: 100%;
  height: 1.3333rem;
  line-height: 1.3333rem;
  background-color: #f4f4f4;
}
</style>
