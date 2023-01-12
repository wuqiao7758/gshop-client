<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.FooterGuide === true"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue';
import { reqFoodList } from './api';

export default {
  name: 'App',
  components: {
    FooterGuide
  },
  mounted() {

    this.$store.dispatch('getAddress')
    this.$store.dispatch('getShops')
  }
}
</script>

<style lang='stylus' rel="stylesheet/stylus">

</style>
