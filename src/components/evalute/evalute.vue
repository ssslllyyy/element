<template>
<div style="overflow: hidden">
<div class="evalute-evaluation">
<div class="evalute-evaluation-left">
<div class="evalute-evaluation-left-content">
<p>3.9</p>
<p>综合评分</p>
<p>高于周边商家69.2%</p>
</div>
</div>
  <div class="evalute-evaluation-right">
    <div class="evalute-evaluation-right-content">
        <p>服务态度</p>
        <ul class="server-list">
          <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
          <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
          <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
          <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
          <li><img src="../../index/img/star24_off@3x.png" alt=""></li>
          <li>3.9</li>
        </ul>
    </div>
    <div class="evalute-evaluation-right-content" >
      <p>服务态度</p>
      <ul class="server-list">
        <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
        <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
        <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
        <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
        <li><img src="../../index/img/star24_off@3x.png" alt=""></li>
        <li>4.0</li>
      </ul>
    </div>
    <div class="evalute-evaluation-right-content" >
      <p>送达时间</p>
        <span>44分钟</span>
    </div>
  </div>
</div>
<div class="evalute-division">

</div>
<div class="evalute-center">
  <div class="evalute-commodity">
  <button>全部 <span>57</span></button>
  <button>满意 <span>47</span></button>
  <button>不满意 <span>10</span></button>
  </div>
    <div class="evalute-commodity-content">
      <p><i class="fa fa-angle-down"></i></p>
      <p>只看有内容的评论</p>
    </div>
  </div>
  <div style="margin-bottom: 50px">
    <div class="evalute-footer" v-for="item in ratings">
      <div class="evalute-user">
        <p><img :src="item.avatar" alt=""></p>
      </div>
      <div class="evalute-user-new">
        <p class="family">{{item.username}}<span>2016-07-13 20:33</span></p>
        <div>
          <ul class="evalute-user-new-list">
            <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
            <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
            <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
            <li><img src="../../index/img/star24_on@3x.png" alt=""></li>
            <li><img src="../../index/img/star24_off@3x.png" alt=""></li>
            <li>80分钟送达</li>
          </ul>
          <div style="clear: both"></div>
        </div>
        <div class="content">{{item.text}}</div>
        <div class="content-footer">
          <p class="content-p">
            <span style="font-size: 12px;color:#00a0dc;"><i class="fa fa-heart"></i></span>
            <span class="content-btn">大王香菇卤...</span>
            <span class="content-btn">大王香菇卤...</span>
            <span class="content-btn">大王香菇卤...</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  </div>
</template>

<script>
  import axios from 'axios';
    export default {
      data() {
        return {
          ratings: [],
          flag: true
        };
      },
      mounted () {
        axios.get('api/ratings').then(res => {
          this.ratings = res.data.data;
          this.flag = false;
          console.log(this.ratings);
        }).catch(function (err) {
          console.log(err);
        });
      }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/font-awesome.min.css";
</style>
