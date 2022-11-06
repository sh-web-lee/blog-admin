<!--
  功能：
  作者：lee
  时间：2022年11月06日 13:10:30
  版本：v1.0
-->
<template>
  <div class="index">
    <NavOne></NavOne>
    <div class="lm_content">
      <content-nav></content-nav>
      <router-view class="lm_content_m"/>
    </div>
  </div>
</template>
<script>
import NavOne from './Navone.vue'
import ContentNav from '@/components/ContentNav/contentNav.vue'
export default {
  name: 'lm_index',
  components: {
    NavOne,
    ContentNav
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
  .index {
    display: flex;
    width: 100vw;
    height: 100vh;

    .lm_content {
      flex: 1;
      background: #EFF3FD;

      .lm_content_m {
        padding: 35px 24px;
      }
    }
  }
</style>
