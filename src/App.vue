<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.FooterGuide === true"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';

export default {
  name: 'App',
  components: {
    FooterGuide
  }
}
</script>

<style lang='stylus' rel="stylesheet/stylus">

</style>
