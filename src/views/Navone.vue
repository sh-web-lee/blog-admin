<!--
  功能：
  作者：lee
  时间：2022年11月06日 13:39:57
  版本：v1.0
-->
<template>
  <div class="navone">
    <div class="lm_nav_logo">
      <svg-icon name="logo" width="40" height="40"></svg-icon>
      ZARVIS
    </div>
    <div class="lm_nav_items">
      <div class="lm_nav_item" :class="activeClass(option.path)" v-for="(option, index) in navOptions" :key="index" @click="routerLinkto(option.path)">
        <svg-icon :name="option.icon" width="24" height="24"></svg-icon>
        <span class="nav-name">{{ option.title }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lm_navone',
  data () {
    return {
      navOptions: [
        {
          icon: 'nav-dashboard',
          active_icon: 'nav-dashboard-active',
          path: '/malachi/dashboard',
          title: 'Dashboard'
        }, {
          icon: 'nav-exchange',
          active_icon: '',
          path: '/malachi/exchange',
          title: 'Exchange'
        }, {
          icon: 'nav-library',
          active_icon: '',
          path: '/malachi/library',
          title: 'Library'
        }, {
          icon: 'nav-schedules',
          active_icon: '',
          path: '/malachi/schedules',
          title: 'Schedules'
        }, {
          icon: 'nav-payouts',
          active_icon: '',
          path: '/malachi/payouts',
          title: 'Payouts'
        }, {
          icon: 'nav-settings',
          active_icon: '',
          path: '/malachi/settings',
          title: 'Settings'
        }
      ],
      route: ''
    }
  },
  methods: {
    routerLinkto (path) {
      this.$router.push(path)
    }
  },
  created () {
    this.route = this.$route.path
  },
  computed: {
    activeClass () {
      return function (path) {
        return this.route === path ? 'active' : ''
      }
    }
  },
  watch: {
    $route (to) {
      this.route = to.path
    }
  }
}
</script>
<style lang="scss" scoped>
  .navone {
    width: 255px;
    padding: 22px 28px;
    background-color: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.06);

    .lm_nav_logo {
      width: 164px;
      padding-bottom: 24px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #E4E7ED;

      font-size: 24px;
      line-height: 29px;
      color: #1A1E29;
      svg {
        margin-right: 16px;
      }

    }

    .lm_nav_items {
      margin-top: 43px;

      .lm_nav_item {
        margin-top: 16px;
        width: 195px;
        padding: 12px;
        display: flex;
        align-items: center;
        cursor: pointer;
        border-radius: 4px;
        transition: all .3s;
        &:hover {
          background: rgb(203, 221, 214);
        }

        &.active {
          background: rgb(203, 221, 214);
          .nav-name {
            position: relative;
            color: #00DEA3;
            font-family: 'Inter-Bold';
            &::after {
              position: absolute;
              content: "";
              top: 8px;
              right: -12px;
              width: 8px;
              height: 8px;
              border-radius: 50%;
              background-color: #00DEA3;
            }
          }
        }

        .nav-name {
          margin-left: 12px;
          font-family: 'Inter-Medium';
          font-weight: 500;
          font-size: 18px;
          line-height: 22px;
          color: #00140e;
        }
      }
    }
  }
</style>
