<template>
<div >
  <div class="page-main">
    <div class="page-main-left">
      <div class="page-hot-food" v-for="(item,key) in goods" @click="cli(key)">
      <p> {{item.name}}</p>
      </div>
    </div>
    <div class="page-main-right">
      <div ref="pro"  v-for="(item,key) in goods">
        <div class="page-main-right-title">
          <p> {{item.name}}</p>
        </div>
        <div class="page-main-list-box" v-for="foods in item.foods">
          <ul class="page-main-list">
            <li>
              <div class="li-left">
                <img :src="foods.icon" alt="">
              </div>
              <div class="li-right">
                <p>{{foods.name}}</p>
                <p>月售{{foods.sellCount}}份  <span>好评率{{foods.rating}}%</span></p>
                <p><span>￥</span>{{foods.price}}</p>
                <p>
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </p>
              </div>
            </li>
          </ul>
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
          goods: [],
          flag: true
        };
      },
      mounted () {
        axios.get('api/goods').then(res => {
          this.goods = res.data.data;
          this.flag = false;
          console.log(this.goods);
        }).catch(function (err) {
          console.log(err);
        });
      },
      methods: {
        cli (key) {
          this.$refs.pro[key].scrollIntoView(true);
        }
      }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
