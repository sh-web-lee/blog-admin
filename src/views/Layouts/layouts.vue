<!--
  功能：
  作者：lee
  时间：2022年11月06日 15:33:05
  版本：v1.0
-->
<template>
  <div class="lm-layouts">
    <router-view class="lm-layouts-m"/>
  </div>
</template>
<script>
export default {
  name: 'lm-layouts',
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.lm-layouts-m {
  height: 100%;
  border-radius: 12px;
  padding: 24px;
}
</style>
