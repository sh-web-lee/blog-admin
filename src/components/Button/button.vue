<!--
  功能：
  作者：lee
  时间：2022年11月16日 23:04:48
  版本：v1.0
-->
<template>
  <button class="lm-button" :class="{'lm-button-primary': type === 'primary'}">{{ text }}</button>
</template>
<script>
export default {
  name: 'lm-button',
  props: {
    text: {
      type: String,
      require: true
    },
    type: String
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scoped>
  .lm-button {
    padding: 6px 17px;
    border-radius: 4px;
    text-align: center;
    color: #FFFFFF;
    cursor: pointer;
    border: none;
    outline: none;
    transition: all .3s;
    &.lm-button-primary {
      background: rgba($color: #696CFF, $alpha: 1);
      &:hover {
        background: rgba($color: #696CFF, $alpha: 0.8);
      }
    }
  }
</style>
