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
      <svg-icon name="lm-nav" width="50" height="50" class="motive-icon" @click.native="foldNav"></svg-icon>
      <div class="lm_nav_item" v-for="(option, index) in navOptions" :key="index">
        <router-link class="lm_nav_one" :class="{ active: route.includes(option.path), 'lm-menu-open': openMenu[option.title] }" :to="option.path" @click.native="routerLinkto('foldMenu', $event)">
          <svg-icon :name="route.includes(option.path) ? option.active_icon : option.icon" width="18" height="18"></svg-icon>
          <span class="nav-name">{{ option.title }}</span>
          <svg-icon class="lm_nav_down" name="nav-arrow-down" width="7" height="10" v-if="option.children"></svg-icon>
        </router-link>
        <div class="lm_nav_two" v-if="option.children">
          <router-link class="lm_sub_nav_items" :class="activeClass(item.path)" v-for="(item, subindex) in option.children" :key="subindex" :to="item.path" @click.native="routerLinkto">{{ item.title }}</router-link>
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
          active_icon: 'nav-layouts-active',
          path: '/malachi/layouts',
          title: 'Layouts',
          children: [
            {
              title: 'Category',
              path: '/malachi/layouts/category'
            }
          ]
        }, {
          icon: 'nav-article',
          active_icon: 'nav-article-active',
          path: '/malachi/article',
          title: 'Article',
          children: [
            {
              title: 'Article Post',
              path: '/malachi/article/post'
            }, {
              title: 'Articles',
              path: '/malachi/article/lists'
            }, {
              title: 'Category',
              path: '/malachi/article/category'
            }, {
              title: 'Tags',
              path: '/malachi/article/tags'
            }
          ]
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
      route: '',
      openMenu: {
        Dashboard: true
      }
    }
  },
  methods: {
    routerLinkto (type, e) {
      const target = document.querySelector('.lm_nav_two .active')
      const distance = target && target.offsetTop
      this.moveNavIcon(distance)
      if (type === 'foldMenu') {
        const menuOne = document.querySelectorAll('.lm_nav_one')
        menuOne.forEach(item => item.classList.remove('lm-menu-open'))
        e.target.classList.add('lm-menu-open')
      }
    },
    moveNavIcon (index) {
      const motiveIcon = document.querySelector('.motive-icon')
      motiveIcon.style.transform = 'translateY(' + (index) + 'px)'
    },
    // 折叠导航栏
    foldNav () {
      console.log('123', 123)
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
    background-color: var(--nav-bgColor);
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.06);
    transition: all .3s;

    .lm_nav_logo {
      width: 164px;
      padding-bottom: 24px;
      display: flex;
      align-items: center;
      margin: 0 auto;

      font-size: 24px;
      line-height: 29px;
      font-family: 'Inter-Bold';
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
          width: 220px;
          padding: 12px 13px 12px 15px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          text-decoration: none;
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
          overflow: hidden;
          transition: all .3s;
          .lm_sub_nav_items {
            width: 220px;
            border-radius: 6px;
            padding: 12px 13px 12px 60px;
            color: #566A7F;
            font-weight: 400;
            font-family: 'Inter-Regular';
            font-size: 15px;
            line-height: 23px;
            text-decoration: none;
            transition: all .3s;
            cursor: pointer;
            &:hover {
              background: rgba($color: #696CFF, $alpha: 0.1);
            }
            &.active {
              font-weight: 600;
              font-family: 'Inter-Medim';
            }
          }
        }
      }
      .motive-icon {
        position: absolute;
        right: -40px;
        cursor: pointer;
        transition: all .3s;
      }
    }
  }
</style>
