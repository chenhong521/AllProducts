<template>
  <div class="loan">
    <HeaderSearch id="searchBar"></HeaderSearch>
    <div class="slider-wrapper" >
      <Slider>
        <div v-for="(item, index) in bannerList" :key="index">
          <a href="#">
            <img :src="item.url">
          </a>
        </div>
      </Slider>
    </div>
    <Nav></Nav>
    <Banner></Banner>
    <Brand></Brand>
    <Rankings></Rankings>
    <Strategy></Strategy>
    <FooterGuide></FooterGuide>
  </div>
</template>
<script>
import HeaderSearch from '../../components/HeaderSearch/HeaderSearch'
import Slider from '../../components/Slider/Slider'
import Nav from '../../components/Nav/Nav'
import Banner from '../../components/Banner/Banner'
import Brand from '../../components/Brand/Brand'
import Rankings from '../../components/Rankings/Rankings'
import Strategy from '../../components/Strategy/Strategy'
import FooterGuide from '../../components/FooterGuide/FooterGuide'
export default {
  data () {
    return {
      bannerList: [
        {url: require('../../assets/img/banner@2x.png')},
        {url: require('../../assets/img/608899728134215748.jpg')},
        {url: require('../../assets/img/904035211900207070.jpg')}
      ]
    }
  },
  components: {
    HeaderSearch,
    Slider,
    Nav,
    Banner,
    Brand,
    Rankings,
    Strategy,
    FooterGuide
  }
}
</script>
<style lang="less" scoped>
.loan{
  width: 100%;
  position: relative;
  margin-bottom: 1.3333rem;
  .slider-wrapper{
    position: relative;
    width: 100%;
    overflow: hidden;
  }
}
</style>
