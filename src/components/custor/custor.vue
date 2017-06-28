<template>
<div style="overflow: hidden">
<div class="custor-store">
  <div class="custor-store-top">
 <div class="custor-store-left">
   <p>粥品香坊 (大运村)</p>
   <ul class="custor-store-list">
     <li></li>
     <li></li>
     <li></li>
     <li></li>
     <li></li>
   </ul>
   <div style="clear: both"></div>
   <p>
     <span>(661)</span>
     <span>月售690单</span>
   </p>

 </div>
    <div class="custor-store-right">
    <span class="fa fa-heart"></span>
      <p>已收藏</p>
    </div>
  </div>
  <div class="custor-store-bottom">
    <div>
      <p>起送价</p>
      <p>20<span>元</span></p>
    </div>
    <div>
      <p>商家配送</p>
      <p>4<span>元</span></p>
    </div>
    <div>
      <p>平均配送时间</p>
      <p>39<span>元</span></p>
    </div>
  </div>
</div>
  <div class="custor-division">

  </div>
  <div class="custor-center">
    <div class="custor-center-content">
      <div>公告与活动</div>
      <div>
        粥品香坊其烹饪粥料的秘方源于中国千年古法，在融合现代
        制作工艺，又世界烹饪大师屈浩先生领衔研发。坚守纯天
        然、0添加的良心品质深的消费者青睐，发展至今成为粥类
        引领品牌。是2008年奥运会和2013年园博会指定餐饮服务
      </div>
    </div>
    <div class="custor-center-active">
    <p>
      <span class="custor-img1"></span>
      <span>在线支付满28减5，满50减10</span>
    </p>
    </div>
    <div class="custor-center-active">
      <p>
        <span class="custor-img2"></span>
        <span>在线支付满28减5，满50减10</span>
      </p>
    </div>
    <div class="custor-center-active">
      <p>
        <span class="custor-img3"></span>
        <span>在线支付满28减5，满50减10</span>
      </p>
    </div>
    <div class="custor-center-active">
      <p>
        <span class="custor-img4"></span>
        <span>在线支付满28减5，满50减10</span>
      </p>
    </div>
    <div class="custor-center-active">
      <p>
        <span class="custor-img5"></span>
        <span>在线支付满28减5，满50减10</span>
      </p>
    </div>
    <div class="custor-center-active">
      <p>
        <span class="custor-img6"></span>
        <span>在线支付满28减5，满50减10</span>
      </p>
    </div>
  </div>
  <div class="custor-division">

  </div>
  <div class="custor-live-action">
  <div class="custor-live-action-title">
   商家实景
  </div>
    <div class="custor-live-action-img">
      <p></p>
      <p></p>
      <p></p>
    </div>
  </div>
  <div class="custor-division">

  </div>
  <div class="custor-store-new">
    <div class="custor-store-new-title" v-for="item in results.infos">
    {{item}}
    </div>

  </div>
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
@import "../css/font-awesome.min.css";
@import "../../index/css/custor.css";
</style>
