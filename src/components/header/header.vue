<template>
<div>
<header>
 <div class="header-background">
 </div>
  <div class="header-logo">

  </div>
  <div class="header-title">
    <img :src="results.avatar" alt="">
    <p>{{results.name}}</p>
  </div>
  <div class="header-title1">
   {{results.description}} / {{results.deliveryTime}}分钟送达
  </div>
  <div class="header-title2">
    <img src="../../index/img/decrease_1@2x.png" alt="">
    <p >在线支付满25减5，满50减10</p>
    <p class="num"><span>5</span>个</p>
  </div>
  <div class="header-bottom">
    <img src="../../index/img/bulletin@2x.png" alt="">
    <p>{{results.bulletin}}</p><span>&gt;</span>
  </div>
</header>

</div>
</template>

<script>
  import axios from 'axios';
    export default {
      data() {
        return {
          results: [],
          flag: true
        };
      },
      mounted () {
        axios.get('api/seller').then(res => {
          this.results = res.data.data;
          this.flag = false;
          console.log(this.results);
        }).catch(function (err) {
          console.log(err);
        });
      }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
