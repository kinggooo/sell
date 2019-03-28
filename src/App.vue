<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="navi">
      <div class="navi-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="navi-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="navi-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/Header';

  const ERR_NO = 0;

  export default {
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then((response) => {
        var resBody = response.body;
        if (response.errno === ERR_NO) {
          this.seller = resBody.data;
          console.log(this.seller);
        }
      });
    },
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
</style>
