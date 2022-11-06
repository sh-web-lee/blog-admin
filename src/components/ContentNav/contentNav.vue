<!--
  功能：
  作者：lee
  时间：2022年11月06日 16:27:31
  版本：v1.0
-->
<template>
  <div class="lm_content_nav" :style="navStyle">
    <div class="lm_ct_nav_hel">
      <h3 class="lm_ct_nav_hel_title">Hello lee_malachi</h3>
      <p class="lm_ct_nav_hel_time">{{ nowTime }}</p>
    </div>
    <div class="lm_ct_nav_search" v-if="route === '/malachi/dashboard'">
      <svg-icon name="search" width="24" height="24"></svg-icon>
      <input type="text" placeholder="Search">
    </div>
    <div class="lm_content_nav_user">
      <svg-icon name="notice" width="24" height="24"></svg-icon>
      <div class="lm_ct_nav_us_username">lee_malachi</div>
      <div class="lm_ct_nav_us_avatar">
        <img src="@/assets/img/avatar.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lm_content_nav',
  data () {
    return {
      nowTime: '',
      route: ''
    }
  },
  created () {
    const time = new Date()
    this.nowTime = this.$moment(time).format('h:m a D MMM, y')
    this.route = this.$route.path
  },
  computed: {
    navStyle () {
      return this.route === '/malachi/dashboard' ? 'background: transparent;' : '#fff'
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
  .lm_content_nav {
    padding: 9px 24px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .lm_ct_nav_hel {
      .lm_ct_nav_hel_title {
        color: #00261c;
        font: normal normal 700 18px/26px 'Inter-Bold';
      }
      .lm_ct_nav_hel_time {
        margin-top: 4px;
        color: #707eae;
        font: normal normal 400 12px/16px 'Inter-Regular                   ';
      }
    }

    .lm_ct_nav_search {
      width: 406px;
      height: 48px;
      background-color: #fff;
      border-radius: 8px;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      input {
        border: none;
        outline: none;
        height: 100%;
        flex: 1;
        padding-left: 12px;
        color: #00261c;
        font: normal normal 400 14px/24px 'Inter-Regular';
        /* 使用webkit内核的浏览器 */
        &::-webkit-input-placeholder{
          color: #aeb6cf;
          font-family: 'Inter-Regular';
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
        width: 48px;
        height: 48px;
        border-radius: 12px;
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
