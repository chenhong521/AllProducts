<template>
  <div class="brand">
    <div class="brand-title">
      <i class="iconfont icon-chengtiao"></i><span>发现品牌</span>
    </div>
    <div class="brand-con">
      <div class="brand-con-item">
        <a :href="storeUrl+item.id" class="item" v-for="(item, index) in datalist1" v-if="index <= 2" :key="index">
          <div class="logo"><img :src="imgUrl+item.logo" alt="" width="100%"></div>
          <!-- <p>{{item.merchname}}</p> -->
        </a>
      </div>
      <div class="brand-con-item">
        <a :href="storeUrl+item.id" class="item" v-for="(item, index) in datalist1" :key="item.index" v-if="index>2">
          <div class="logo">
            <img :src="imgUrl+item.logo" alt="" width="100%">
          </div>
          <!-- <p class="name">{{item.merchname}}</p> -->
        </a>
      </div>
    </div>
    <div class="hui"></div>
  </div>
</template>
<script>
import {brand} from '../../assets/uilt/brand.js'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      // datalist2: [
      //   {title: '平安银行', logo: require('../../assets/img/pingan.png')},
      //   {title: '福建海峡银行', logo: require('../../assets/img/haixia.png')},
      //   {title: '邮政储蓄银行', logo: require('../../assets/img/youzheng.png')}
      // ],
      datalist1: []
    }
  },
  computed: {
    ...mapState(['imgUrl', 'storeUrl'])
  },
  created () {
    this._brand()
  },
  methods: {
    _brand () {
      brand().then(res => {
        if (res.status === 1) {
          this.datalist1 = res.result.data
          // console.log(this.datalist1)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.brand{
  width: 100%;
  .brand-title{
    width: 100%;
    background-color: #ffffff;
    height: 1.2rem;
    line-height: 1.2rem;
    border-bottom: 1px solid #f4f4f4;
    .icon-chengtiao{
      font-size: 0.4267rem;
      color: #ff6600;
    }
    span{
      font-size: 0.4267rem;
      color: #333333;
    }
  }
  .brand-con{
    width: 100%;
    background-color: #ffffff;
    // height: 4.44rem;
    box-sizing: border-box;
    padding: 0.4267rem 0.3333rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .brand-con-item{
      display: flex;
      width: 100%;
      // height: 1.6533rem;
      justify-content: space-around;
      .item{
        width: 3.3333rem;
        // height: 1.6533rem;
        color: #333333;
        font-size: 0.3467rem;
        text-align: center;
        .logo{
          width: 1.7333rem;
          height: 1.7333rem;
          margin: 0 auto;
        }
      }
      .item:nth-child(2), .item:nth-child(1){
        border-right: 1px solid #e7e7e7;
      }
    }
    .brand-con-item:nth-child(1){
      margin-bottom: 0.3867rem;
    }
  }
  .hui{
    width: 100%;
    height: 0.3333rem;
    line-height: 0.3333rem;
    background-color: #f4f4f4;
  }
}
</style>
