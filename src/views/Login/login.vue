<!--
  功能：
  作者：lee
  时间：2022年11月06日 13:18:35
  版本：v1.0
-->
<template>
  <div class="lm__login">
    <div class="lm__login-wrapper">
      <div class="lm__login-flash">
        <div class="lm__login-flash-wrapper">
          <div class="lm__login-flash-wrapper-body">
            BLOG ADMIN
          </div>
          <div class="lm__login-flash-wrapper-foot"></div>
        </div>
      </div>
      <div class="lm__login-main">
        <div class="lm__login-main-form">
          <h1 class="lm__login-form-title">Sign In</h1>
          <p class="lm__login-form-tips">Please fill your informatio below</p>
          <div class="lm__login-input-wrapper">
            <div class="lm__login-input-username lm__login-input">
              <svg-icon :name="userIcon" width="20" height="20" />
              <input type="text" @focus="loginInputFocus('name', $event)" @blur="loginInputBlur('name', $event)">
              <span class="lm__login-input-placeholder lm__placeholder-name">Name</span>
            </div>
            <div class="lm__login-input-number lm__login-input">
              <svg-icon :name="phoneIcon" width="20" height="20" />
              <input type="text" @focus="loginInputFocus('phone', $event)" @blur="loginInputBlur('phone', $event)">
              <span class="lm__login-input-placeholder lm__placeholder-phone">Mobile number</span>
            </div>
            <div class="lm__login-input-email lm__login-input">
              <svg-icon :name="mailIcon" width="20" height="20" />
              <input type="text" @focus="loginInputFocus('mail', $event)" @blur="loginInputBlur('mail', $event)">
              <span class="lm__login-input-placeholder lm__placeholder-mail">E-mail</span>
            </div>
          </div>
          <div class="lm__login-submit-btns">
            <button class="lm__login-submit-btn">
              <span class="lm__btns-text">Next</span>
              <svg-icon name="login-submit-btn" width="33" height="33"/>
            </button>
          </div>
          <div class="lm__login-extra-handlers">
            <span class="lm__login-extra-tips">Already have an account?</span>
            <router-link to="/register" class="lm__login-extra-signup">Create Account</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lm_register',
  data () {
    return {
      userIcon: 'login-user',
      phoneIcon: 'login-phone',
      mailIcon: 'login-email',
      iconName: {
        name: {
          default: 'login-user',
          active: 'login-user-active'
        },
        phone: {
          default: 'login-phone',
          active: 'login-phone-active'
        },
        mail: {
          default: 'login-email',
          active: 'login-email-active'
        }
      }
    }
  },
  methods: {
    loginInputFocus (type, e) {
      switch (type) {
        case 'name':
          this.userIcon = this.iconName[type].active
          break
        case 'phone':
          this.phoneIcon = this.iconName[type].active
          break
        case 'mail':
          this.mailIcon = this.iconName[type].active
          break
        default:
          break
      }
      const next = e.target.nextSibling
      next.classList.add('lm__login-input-active')
      next.classList.remove('lm__login-input-value-active')
    },
    loginInputBlur (type, e) {
      switch (type) {
        case 'name':
          this.userIcon = this.iconName[type].default
          break
        case 'phone':
          this.phoneIcon = this.iconName[type].default
          break
        case 'mail':
          this.mailIcon = this.iconName[type].default
          break
        default:
          break
      }
      const next = e.target.nextSibling
      if (!e.target.value.length) {
        next.classList.remove('lm__login-input-active')
      } else {
        next.classList.add('lm__login-input-value-active')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.lm__login {
  width: 100vw;
  height: 100vh;
  .lm__login-wrapper {
    display: flex;
    height: 100vh;
    background: url('../../assets/img/lm-loginBg.jpg') no-repeat center/cover;
    .lm__login-flash {
      width: 40vw;
      height: 100vh;
      backdrop-filter: blur(8px);
      .lm__login-flash-wrapper {
        color: #FFF;
        font-size: 36px;
        text-align: center;
        line-height: 100vh;
      }
    }
    .lm__login-main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      height: 100vh;
      background: #FFF;
      .lm__login-main-form {
        .lm__login-form-title {
          color: #2F3367;
          font-size: 28px;
          line-height: 42px;
          font-weight: 700;
          font-family: 'Inter-Bold';
        }
        .lm__login-form-tips {
          color: #303468;
          font: normal normal 500 16px/24px 'Inter-Medium';
          margin-top: 12px;
        }
        .lm__login-input-wrapper {
          margin-top: 44px;
          width: 443px;
          .lm__login-input {
            position: relative;
            display: flex;
            align-items: center;
            padding: 17px 20px 17px 17px;
            background: #F5F5F7;
            border: 3px solid #F5F5F7;
            border-radius: 10px;
            margin-bottom: 28px;
            transition: all .3s;
            .lm__login-input-placeholder {
              position: absolute;
              display: inline-block;
              padding: 2px 8px;
              background: transparent;
              font: normal normal 500 16px/24px 'Inter-Medium';
              color: #8B8FA8;
              top: 19px;
              left: 60px;
              background: transparent;
              transition: all .3s;
              &.lm__login-input-active {
                background: #fff;
                top: -14px;
                left: 50px;
              }
              &.lm__login-input-value-active {
                background: transparent;
              }
            }
            input {
              position: relative;
              border: none;
              outline: none;
              background: transparent;
              margin-left: 22px;
              color: #3C4071;
              font: normal normal 500 18px/27px 'Inter-Medium';
              z-index: 99;
            }
            &:focus-within {
              background: transparent;
              border: 3px solid #80BEFC;
              &::before {
                top: -14px;
                left: 50px;
                background: #FFF;
              }
            }
          }
        }
        .lm__login-submit-btns {
          margin-top: 38px;
          display: flex;
          justify-content: flex-end;
          .lm__login-submit-btn {
            position: relative;
            display: flex;
            align-items: center;
            border: none;
            outline: none;
            width: 176px;
            height: 70px;
            background: #007DFA;
            border-radius: 8px;
            padding: 18px;
            text-align: center;
            cursor: pointer;
            transition: all .3s;
            span {
              color: #FFF;
              font: normal normal 600 22px/33px 'Inter-Medium';
              margin-right: 57px;
            }
            &:hover {
              background: rgba($color: #007DFA, $alpha: 0.8);
            }
            &::after {
              position: absolute;
              content: "";
              top: 0;
              left: 0;
              width: 180px;
              height: 74px;
            }
          }
        }
        .lm__login-extra-handlers {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 34px;
          padding-top: 30px;
          border-top: 1px solid #ECECF0;
          .lm__login-extra-tips{
            font-family: 'Inter-Medium';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #393D6E;
          }
          .lm__login-extra-signup {
            position: relative;
            border: none;
            outline: none;
            text-decoration: none;
            background: transparent;
            cursor: pointer;
            font-family: 'Inter-Medium';
            font-style: normal;
            font-weight: 600;
            font-size: 16px;
            line-height: 24px;
            color: #007DFA;
            &::after {
              position: absolute;
              content: '';
              left: 0;
              bottom: 0;
              background: #007DFA;
              height: 2px;
            }
            &:hover {
              &::after {
                animation: speed-line 0.2s linear forwards;
              }
            }
          }
        }
      }
    }
  }
}
// animation
@keyframes speed-line {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
</style>
