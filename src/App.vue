<template>
  <div id="app">
    <v-header></v-header>
    <div class="navi">
      <div class="navi-item"><router-link to="/goods">商品</router-link></div>
      <div class="navi-item"><router-link to="/ratings">评论</router-link></div>
      <div class="navi-item"><router-link to="/seller">商家</router-link></div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import header from './components/header/Header';

  export default {
    components: {
      'v-header': header
    }
  };
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .navi
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .navi-item
        flex: 1
        text-align: center
    .header
      text-align: center
    .content
      text-align: center
</style>
