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
      <transition name="scale" mode="out-in">
        <router-view class="lm_content_m"/>
      </transition>
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
      background: #F5F5F9;
      padding: 12px 26px;

      .lm_content_m {
        margin-top: 24px;
        height: calc(100vh - 72px - 47px - 12px);
        // transform: scale(0.9);
      }
    }
  }

  .scale-enter-active, .scale-leave-active {
    transition: all 0.5s ease;
    transform: scale(0.9);
    opacity: 0;
  }

  .scale-enter-to, .scale-leave-from {
    transform: scale(1);
    opacity: 1;
  }

  .scale-enter-from, .scale-leave-to {
    opacity: 0;
    transform: scale(0.9);
  }
</style>
