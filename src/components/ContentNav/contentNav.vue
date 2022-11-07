<!--
  功能：
  作者：lee
  时间：2022年11月06日 16:27:31
  版本：v1.0
-->
<template>
  <div class="lm_content_nav" :style="navStyle">
    <div class="lm_ct_nav_search" :class="{ active: searchActive }">
      <svg-icon name="lm-search" width="18" height="18"></svg-icon>
      <input type="text" class="lm_search" @focus="focusSearch" @blur="blurSearch" placeholder="Search (Ctrl+/)">
    </div>
    <div class="lm_content_nav_user">
      <svg-icon name="notice" width="24" height="24"></svg-icon>
      <div class="lm_ct_nav_us_username">lee_malachi</div>
      <div class="lm_ct_nav_us_avatar">
        <img src="@/assets/img/Acatar.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lm_content_nav',
  data () {
    return {
      route: '',
      searchActive: false
    }
  },
  created () {
    this.route = this.$route.path
  },
  methods: {
    focusSearch () {
      this.searchActive = !this.searchActive
    },
    blurSearch () {
      this.searchActive = !this.searchActive
    }
  },
  computed: {
    navStyle () {
      return this.route === '/malachi/dashboards' ? 'background: transparent;' : '#fff'
    }
  },
  watch: {
    $route (to) {
      this.route = to.path
    },
    searchActive (val) {
      console.log('val:', val)
    }
  }
}
</script>
<style lang="scss" scoped>
  .lm_content_nav {
    padding: 12px 24px;
    background: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  .lm_ct_nav_search {
    display: flex;
    align-items: center;
    border: 2px solid rgba(105, 122, 141, 0);
    padding: 12px 12px;
    border-radius: 4px;
    transition: all .3s;

    .lm_search {
      margin-left: 10px;
      border: none;
      outline: none;
      color: #697A8D;
      font-size: 16px;
      font-family: 'Inter-Medium';
      width: 105px;
      transition: all .3s;

      &::placeholder {
        font-size: 14px;
      }
    }

    &.active {
      border: 2px solid rgba(105, 122, 141, 1);

      .lm_search {
        width: 350px;
      }
    }
  }

    .lm_content_nav_user {
      display: flex;
      align-items: center;
      svg {
        cursor: pointer;
      }
      .lm_ct_nav_us_username {
        position: relative;
        margin-left: 20px;
        color: #00261c;
        font: normal normal 500 16px/24px 'Inter-Medium';
        cursor: pointer;
        &:hover {
          text-shadow: #00DEA3 1px 0 10px;
          &::after {
            position: absolute;
            content: '';
            left: 0;
            bottom: -5px;
            width: 100%;
            height: 3px;
            background-color: #00DEA3;
            animation: showUnderline .15s linear alternate;
          }
        }
      }
      .lm_ct_nav_us_avatar {
        margin-left: 8px;
        width: 38px;
        height: 38px;
        border-radius: 50%;
        overflow: hidden;
        cursor: pointer;
        transition:  all .3s;

        &:hover {
          box-shadow:
  0px 0px 1.2px rgba(0, 0, 0, 0.029),
  0px 0px 2.7px rgba(0, 0, 0, 0.043),
  0px 0px 4.7px rgba(0, 0, 0, 0.053),
  0px 0px 7.2px rgba(0, 0, 0, 0.061),
  0px 0px 10.6px rgba(0, 0, 0, 0.069),
  0px 0px 15.6px rgba(0, 0, 0, 0.077),
  0px 0px 23.4px rgba(0, 0, 0, 0.087),
  0px 0px 37.3px rgba(0, 0, 0, 0.101),
  0px 0px 70px rgba(0, 0, 0, 0.13)
        }
        img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }

  @keyframes showUnderline {
    0% {
      width: 0;
    }
    100% {
      width: 100%;
    }
  }
</style>
