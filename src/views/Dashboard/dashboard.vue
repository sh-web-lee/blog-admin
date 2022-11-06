<!--
  功能：
  作者：lee
  时间：2022年11月06日 13:14:55
  版本：v1.0
-->
<template>
  <div class="lm_dashboard">
    <!-- overvierw -->
    <OverView></OverView>
    <!-- chars -->
    <Charts></Charts>
    <!-- activities -->
    <activities></activities>
  </div>
</template>
<script>
import OverView from './comps/overview.vue'
import Charts from './comps/charts.vue'
import activities from './comps/activities.vue'
export default {
  name: 'lm_dashboard',
  components: {
    OverView,
    Charts,
    activities
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
