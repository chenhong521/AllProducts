<template>
  <div class="footer">
    <a class="item" href="https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile">
      <span class="item_icon">
        <i class="iconfont icon-tongqian"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="item on">
      <span class="item_icon">
        <i class="iconfont icon-santiaogang"></i>
      </span>
      <span>全部产品</span>
    </a>
    <a href="https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=commission" class="item">
      <span class="item_icon">
        <i class="iconfont icon-xingxing"></i>
      </span>
      <span>代言中心</span>
    </a>
    <a href="https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=diypage&id=28" class="item">
      <span class="item_icon">
        <i class="iconfont icon-qian"></i>
      </span>
      <span>分享赚钱</span>
    </a>
    <a href="https://fjhhjr.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=member" class="item">
      <span class="item_icon">
        <i class="iconfont icon-ren"></i>
      </span>
      <span>会员中心</span>
    </a>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
.footer{
  width: 100%;
  height: 1.3333rem;
  background-color: #ffffff;
  border-top: 1px solid #e4e4e4;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  .item{
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #cccccc;
    span{
      font-size: 0.32rem;
    }
  }
  .on{
    color: #333333;
  }
}
</style>
