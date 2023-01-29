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
  },
  mounted() {
    console.log('vm', this)
    this.$store.dispatch('getAddress')
    // this.$store.dispatch('getCategoryList')
  }
}
</script>

<style lang='stylus' rel="stylesheet/stylus">