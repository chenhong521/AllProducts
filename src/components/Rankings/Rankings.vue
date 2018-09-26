<template>
  <div class="rankings">
    <div class="rankings-title">
      <div class="title-item" :class="on1?'on':''" @click="toggle1">
        <span>人气排行</span>
        <!-- <img src="../../assets/img/xiac.png"> -->
      </div>
      <div class="title-item" :class="on2?'on':''" @click="toggle2">
        <span>利率排行</span>
        <img :src="desc2?require('../../assets/img/xiac.png'):require('../../assets/img/shangc.png')">
      </div>
      <div class="title-item" :class="on3?'on':''" @click="toggle3">
        <span>额度排行</span>
        <img :src="desc3?require('../../assets/img/xiac.png'):require('../../assets/img/shangc.png')">
      </div>
      <div class="title-item" :class="on4?'on':''" @click="toggle4">
        <span>期限排行</span>
        <img :src="desc4?require('../../assets/img/xiac.png'):require('../../assets/img/shangc.png')">
      </div>
      <!-- <div class="title-item" :class="on5?'on':''" @click="toggle5">
        <span>还款方式</span>
        <img :src="desc5?require('../../assets/img/xiac.png'):require('../../assets/img/shangc.png')">
      </div> -->
    </div>
    <div class="rankings-item" v-for="(item, index) in ProductList" :key="index" v-if="index < 5 && ProductList.length>0">
      <a class="item-logo" :href="dataUrl+item.id">
        <img :src="imgUrl+item.thumb" width="100%">
      </a>
      <a class="item-con" :href="dataUrl+item.id">
        <p><span class="title">{{item.title}}</span><span class="type">{{item.name}}</span></p>
        <p><span>可贷</span><span class="limit">{{item.wt_minfund + '万'+'~'+item.wt_maxfund +'万'}}</span> <span>月利率：</span><span class="rate">{{item.wt_rate+'%'}}</span></p>
        <p><span>期限：</span><span class="rate">{{+item.wt_maxtime/12+'年'}}</span>&nbsp;&nbsp;&nbsp;<span class="rate">{{item.sales}}</span><span>人申请</span></p>
      </a>
    </div>
    <div class="message-con1" v-if="ProductList.length == 0">暂无产品~</div>
    <div class="rankings-all" @click="goAll">
      <span>查看全部</span>
    </div>
    <div class="hui"></div>
  </div>
</template>
<script>
import Myajax from '../../assets/js/ajax'
import { searchurl } from '../../assets/uilt/config'
import { Indicator } from 'mint-ui'
import {mapState} from 'vuex'
var qs = require('qs')
// {{item.shorttitle.length>9?item.shorttitle.substr(0, 9)+'...':item.shorttitle}}
export default {
  data () {
    return {
      desc2: true,
      desc3: true,
      desc4: true,
      desc5: true,
      on1: true,
      on2: false,
      on3: false,
      on4: false,
      on5: false,
      ProductList: []
    }
  },
  async created () {
    let res = await Myajax(searchurl, qs.stringify({limit: 6}), 'POST')
    // console.log(res)
    if (res.status === 1) {
      this.ProductList = res.result.data
      // console.log(this.productlist)
    }
  },
  methods: {
    async toggle1 () {
      if (!this.on1) {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'fading-circle'
        })
        let res = await Myajax(searchurl, qs.stringify({limit: 6, type: 1}), 'POST')
        if (res.status === 1) {
          Indicator.close()
          this.ProductList = res.result.data
          // localStorage.setItem('productlist', JSON.stringify(this.ProductList))
        }
        this.on1 = true
      }
      this.on2 = false
      this.on3 = false
      this.on4 = false
      this.on5 = false
    },
    async toggle2 () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      if (this.desc2) {
        let res = await Myajax(searchurl, qs.stringify({limit: 6, type: 2}), 'POST')
        if (res.status === 1) {
          Indicator.close()
          this.ProductList = res.result.data
        }
      } else {
        let res = await Myajax(searchurl, qs.stringify({limit: 6, type: 2, order: 2}), 'POST')
        if (res.status === 1) {
          Indicator.close()
          this.ProductList = res.result.data
        }
      }
      this.desc2 = !this.desc2
      this.on2 = true
      this.on1 = false
      this.on3 = false
      this.on4 = false
      this.on5 = false
    },
    async toggle3 () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      if (this.desc3) {
        let res = await Myajax(searchurl, qs.stringify({limit: 6, type: 3}), 'POST')
        if (res.status === 1) {
          Indicator.close()
          this.ProductList = res.result.data
        }
      } else {
        let res = await Myajax(searchurl, qs.stringify({limit: 6, type: 3, order: 2}), 'POST')
        if (res.status === 1) {
          Indicator.close()
          this.ProductList = res.result.data
        }
      }
      this.on3 = true
      this.desc3 = !this.desc3
      this.on1 = false
      this.on2 = false
      this.on4 = false
      this.on5 = false
    },
    async toggle4 () {
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      })
      if (this.desc4) {
        let res = await Myajax(searchurl, qs.stringify({limit: 6, type: 4}), 'POST')
        if (res.status === 1) {
          Indicator.close()
          this.ProductList = res.result.data
        }
      } else {
        let res = await Myajax(searchurl, qs.stringify({limit: 6, type: 4, order: 2}), 'POST')
        if (res.status === 1) {
          Indicator.close()
          this.ProductList = res.result.data
        }
      }
      this.on4 = true
      this.on1 = false
      this.desc4 = !this.desc4
      this.on2 = false
      this.on3 = false
      this.on5 = false
    },
    toggle5 () {
      this.on5 = true
      this.desc5 = !this.desc5
      this.on1 = false
      this.on2 = false
      this.on3 = false
      this.on4 = false
    },
    goAll () {
      this.$store.dispatch('reindex', 0)
      this.$router.push('/RankingsAll')
    }
  },
  computed: {
    ...mapState(['productlist', 'imgUrl', 'dataUrl'])
  },
  watch: {
    ProductList (old, n) {
      // console.log(old, n)
      if (this.productlist.length !== 0) {
        // console.log(this.productlist)
        this.ProductList = this.productlist
      }
    }
  }
}
</script>
<style lang="less" scoped>
.rankings{
  width: 100%;
  .rankings-title{
    background-color:#ffffff;
    width: 100%;
    height: 1.0667rem;
    line-height:  1.0667rem;
    border-bottom: 1px solid #f4f4f4;
    font-size: 0.32rem;
    color: #333333;
    display: flex;
    justify-content: space-around;
    .title-item{
      text-align: center;
      span{
        display: inline-block;
        vertical-align: middle;
      }
      img{
        vertical-align: middle;
        width: 14%;
      }
      &.on{
        color: #f66000;
        border-bottom: 2px solid #f66000;
      }
    }
  }
  .rankings-item{
    width: 100%;
    height: 2.44rem;
    background-color:#ffffff;
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
  .rankingsItem{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 2.44rem;
    background-color:#ffffff;
  }
  .rankings-all{
    width: 100%;
    background-color: #ffffff;
    height: 1.2533rem;
    line-height: 1.2533rem;
    text-align: center;
    color: #f66000;
    font-size: 0.32rem;
  }
  .hui{
    margin-top: -2px;
    width: 100%;
    height: 0.3333rem;
    background-color: #f4f4f4;
  }
}
</style>
