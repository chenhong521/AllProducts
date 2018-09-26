<template>
  <div class="nav">
    <div class="nav-item">
      <div class="item" v-for="item in datalist1" :key="item.index" @click="pinpai(item.index)">
        <img :src="item.logo" alt="">
        <p>{{item.title}}</p>
      </div>
    </div>
    <div class="nav-item">
      <div class="item" v-for="item in datalist2" :key="item.index" @click="pinpai(item.index)">
        <img :src="item.logo" alt="">
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      wdUrl: 'https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=goods&cate=1176&type=4',
      datalist1: [
        {index: 1182, title: '房抵贷', logo: require('../../assets/img/fdd.png')},
        {index: 1183, title: '车抵贷', logo: require('../../assets/img/cdd.png')},
        {index: 1184, title: '极速贷款', logo: require('../../assets/img/jsd.png')},
        {index: 1185, title: '月供贷', logo: require('../../assets/img/yg.png')}
      ],
      datalist2: [
        {index: 1186, title: '公积金贷', logo: require('../../assets/img/gjj.png')},
        {index: 1187, title: '保单贷', logo: require('../../assets/img/bxxs@2x.png')},
        {index: 1188, title: '企业贷', logo: require('../../assets/img/qy.png')},
        {index: 1189, title: '装修贷', logo: require('../../assets/img/zx.png')}
      ]
    }
  },
  methods: {
    pinpai (index) {
      if (index === 1184) {
        window.location.href = this.wdUrl
      } else {
        this.$store.dispatch('reindex', index)
        this.$router.push('/RankingsAll')
      }
    }
  }
}
</script>
<style lang="less" scoped>
.nav{
  width: 100%;
  height: 5.0667rem;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 0.7067rem 0.9867rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .nav-item{
    width: 100%;
    background-color: #ffffff;
    height: 1.52rem;
    display: flex;
    justify-content: space-between;
    .item{
      width: 1.52rem;
      background-color: #ffffff;
      height: 1.52rem;
      // background: red;
      text-align: center;
      font-size: 0.3467rem;
      color: #333333;
      img{
        width: 0.9333rem;
      }
    }
  }
}
</style>
