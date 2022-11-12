<!--
  功能：
  作者：lee
  时间：2022年11月06日 13:14:55
  版本：v1.0
-->
<template>
  <div class="lm_dashboard">
    <transition name="dash" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>
<script>
export default {
  name: 'lm_dashboard',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.dash-enter-active, .dash-leave-active {
  transition: all .3s ease;
  transform: scale(0.9);
  opacity: 0;
}
.dash-enter-to, .dash-leave-from {
  opacity: 1;
  transform: scale(1);
}
.dash-enter-from, .dash-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
