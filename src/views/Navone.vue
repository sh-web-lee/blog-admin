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
      Masmas
    </div>
    <div class="lm_nav_items">
      <svg-icon name="lm-nav" width="50" height="50" class="motive-icon"></svg-icon>
      <div class="lm_nav_item" v-for="(option, index) in navOptions" :key="index">
        <div class="lm_nav_one" :class="activeClass(option.path)"  @click="routerLinkto(option.path, $event)">
          <svg-icon :name="option.icon" width="18" height="18"></svg-icon>
          <span class="nav-name">{{ option.title }}</span>
          <svg-icon class="lm_nav_down" :class="activeClass(option.path)" name="nav-arrow-down" width="7" height="10" v-if="option.children"></svg-icon>
        </div>
        <div class="lm_nav_two" v-if="option.children">
          <span class="lm_sub_nav_items" :class="activeClass(item.path)" v-for="(item, subindex) in option.children" :key="subindex" @click="routerLinkto(item.path, $event)">{{ item.title }}</span>
        </div>
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
          path: '/malachi/dashboards',
          title: 'Dashboards',
          children: [
            {
              title: 'Analytics',
              path: '/malachi/dashboards/analytics'
            }, {
              title: 'eCommerce',
              path: '/malachi/dashboards/ecommerce'
            }
          ]
        }, {
          icon: 'nav-layouts',
          active_icon: '',
          path: '/malachi/layouts',
          title: 'Layouts'
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
    routerLinkto (path, e) {
      this.$router.push(path)
      const distance = e.target.offsetTop
      this.moveNavIcon(distance)
    },
    moveNavIcon (index) {
      const motiveIcon = document.querySelector('.motive-icon')
      motiveIcon.style.transform = 'translateY(' + (index) + 'px)'
    }
  },
  created () {
    this.route = this.$route.path
  },
  computed: {
    activeClass () {
      return function (path) {
        return this.route.includes(path) ? 'active' : ''
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
    width: 260px;
    padding: 23px 15px;
    background-color: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.06);

    .lm_nav_logo {
      width: 164px;
      padding-bottom: 24px;
      display: flex;
      align-items: center;
      margin: 0 auto;

      font-size: 24px;
      line-height: 29px;
      font-family: 'Inter-Bold';
      color: #566A7F;
      svg {
        margin-right: 16px;
      }

    }

    .lm_nav_items {
      position: relative;
      margin-top: 26px;

      .lm_nav_item {
        transition: all .3s;

        .lm_nav_one {
          position: relative;
          width: 200px;
          padding: 12px 13px 12px 15px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          cursor: pointer;
          &:hover {
            background: rgba($color: #696CFF, $alpha: 0.16);
          }

          &.active {
            background: rgba($color: #696CFF, $alpha: 0.16);
            .nav-name {
              position: relative;
              color: #696CFF;
            }
          }

          .nav-name {
            margin-left: 14px;
            font-family: 'Inter-Regular';
            font-weight: 400;
            font-size: 15px;
            line-height: 23px;
            color: #697A8D;
          }
          .lm_nav_down {
            position: absolute;
            right: 13px;
            top: 18px;
            transition: all .3s;
            &.active {
              transform: rotateZ(90deg);
            }
          }
        }
        .lm_nav_two {
          display: flex;
          flex-direction: column;
          .lm_sub_nav_items {
            cursor: pointer;
            padding: 12px 13px 12px 60px;
            color: #566A7F;
            font-weight: 400;
            font-family: 'Inter-Regular';
            font-size: 15px;
            line-height: 23px;
            transition: all .3s;
            &.active {
              font-weight: 600;
              font-family: 'Inter-Medim';
            }
          }
        }
      }
      .motive-icon {
        position: absolute;
        right: -39px;
        transition: all .3s;
      }
    }
  }
</style>
