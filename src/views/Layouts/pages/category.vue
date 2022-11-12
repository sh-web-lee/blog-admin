<!--
  功能：
  作者：lee
  时间：2022年11月08日 23:11:34
  版本：v1.0
-->
<template>
  <div class="lm-category">
    <div class="buttons">
      <button class="button" id="one" @click="popUpShow = !popUpShow">Revealing</button>
    </div>
    <lm-modal v-if="popUpShow"></lm-modal>
  </div>
</template>
<script>
import lmModal from '@/plugins/Modal/modal.vue'
export default {
  name: 'lm_category',
  components: {
    lmModal
  },
  data () {
    return {
      popUpShow: false
    }
  }
}
</script>
<style lang="scss" scoped>
.lm-category {
  background: #fff;
  .buttons {
    display: flex;
    .button {
      text-align: center;
      padding: 10px 15px;
      background-color: #efefef;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      border: none;
      outline: none;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
      }
    }
  }
}
</style>
