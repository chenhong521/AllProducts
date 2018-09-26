<template>
  <div class="guide">
    <div class="guide_item" :class="{on: '/loan'===$route.path | '/'===$route.path}" @click="goTo('/loan')">
      <img class="logo" src="../../assets/img/yh@2x.png">
      <span>贷款</span>
    </div>
    <!-- <div class="guide_item" :class="{on: '/financing'===$route.path}" @click="goTo('/financing')">
      <img class="logo" src="../../assets/img/lc@2x.png">
      <span>理财</span>
    </div>
    <div class="guide_item" :class="{on: '/insurance'===$route.path}" @click="goTo('/insurance')">
      <img class="logo" src="../../assets/img/bx@2x.png">
      <span>保险</span>
    </div>
    <div class="guide_item" :class="{on: '/card'===$route.path}" @click="goTo('/card')">
      <img class="logo" src="../../assets/img/bk.png">
      <span>信用卡</span>
    </div> -->
    <a class="guide_item" href="https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=diypage&id=103">
      <img class="logo" src="../../assets/img/lc@2x.png">
      <span>理财</span>
    </a>
    <a class="guide_item" href="https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=diypage&id=123">
      <img class="logo" src="../../assets/img/bx@2x.png">
      <span>保险</span>
    </a>
    <a class="guide_item" href="https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=goods&cate=1177&type=3">
      <img class="logo" src="../../assets/img/bk.png">
      <span>信用卡</span>
    </a>
  </div>
</template>
<script>
export default {
  methods: {
    goTo (path) {
      this.$router.replace(path)
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../assets/css/mixins.styl"
.guide  //footer
  background-color #ffffff
  width 100%
  height 1.2667rem
  display flex
  font-size 0.4rem
  .guide_item
    display flex
    flex 1
    align-items center
    justify-content center
    color #333333
    border-bottom 2px solid #ffffff
    .logo
      width 0.6133rem
      margin-right 0.2133rem
    &.on
      color #f66000
      border-bottom 2px solid #f66000
</style>
