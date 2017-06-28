<template>
  <div>
    <!--<v-header ></v-header>-->
    <!--<v-nav ></v-nav>-->
    <!--<router-view></router-view>-->
    <!--<v-footer></v-footer>-->
     <!--<v-detail></v-detail>-->
    <v-ball></v-ball>
  </div>

</template>

<script>
import header from './components/header/header.vue';
import nav from './components/nav/nav.vue';
import footer from './components/footer/footer.vue';
import detail from './components/detail/detail.vue';
import ball from './components/ball/ball.vue';
export default {
  components: {
    'v-header': header,
    'v-nav': nav,
    'v-footer': footer,
    'v-detail': detail,
    'v-ball': ball
  }
};
window.addEventListener('orientationchange', setRem);
window.addEventListener('resize', setRem);
setRem();
function setRem() {
  var html = document.querySelector('html');
  var width = html.getBoundingClientRect().width;
  html.style.fontSize = width / 15 + 'px';
}
</script>

<style>
@import "index/css/reset.css";
@import "index/css/header.css";
@import "index/css/nav.css";
@import "index/css/page.css";
@import "index/css/footer.css";
@import "index/css/evalute.css";
</style>
