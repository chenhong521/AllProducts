<template>
  <div id="app">
    <HeaderGuide v-if="$route.meta.showHeader"></HeaderGuide>
    <router-view/>
  </div>
</template>

<script>
import HeaderGuide from '../src/components/HeaderGuide/HeaderGuide'
export default {
  components: {
    HeaderGuide
  }
}
</script>

<style>
#app {
  font-family:'Microsoft YaHei',Georgia,Serif;
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
