<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {
    const theme = localStorage.getItem('data-theme')
    document.documentElement.setAttribute('data-theme', theme)
  }
}
</script>

<style lang="scss">
</style>
