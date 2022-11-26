<!--
  功能：
  作者：lee
  时间：2022年11月06日 13:18:35
  版本：v1.0
-->
<template>
  <div class="lm__register">
    <div class="lm__register-wrapper">
      <div class="lm__register-main">
        <div class="lm__register-main-form">
          <h1 class="lm__register-form-title">Sign In</h1>
          <p class="lm__register-form-tips">Please fill your informatio below</p>
          <div class="lm__register-input-wrapper">
            <div class="lm__register-input-username lm__register-input">
              <svg-icon :name="userIcon" width="20" height="20" />
              <input type="text" @focus="loginInputFocus('name')">
            </div>
            <div class="lm__register-input-number lm__register-input">
              <svg-icon :name="phoneIcon" width="20" height="20" />
              <input type="text" @focus="loginInputFocus('phone')">
            </div>
            <div class="lm__register-input-email lm__register-input">
              <svg-icon :name="mailIcon" width="20" height="20" />
              <input type="text" @focus="loginInputFocus('mail')">
            </div>
          </div>
          <div class="lm__register-submit-btns">
            <button class="lm__register-submit-btn">
              <span class="lm__btns-text">Next</span>
              <svg-icon name="login-submit-btn" width="33" height="33"/>
            </button>
          </div>
          <div class="lm__register-extra-handlers">
            <span class="lm__register-extra-tips">Already have an account?</span>
            <router-link to="/login" class="lm__register-extra-signup">Create Account</router-link>
          </div>
        </div>
      </div>
      <div class="lm__register-flash">
        <div class="lm__register-flash-wrapper">
          <div class="lm__register-flash-wrapper-body">
            BLOG ADMIN
          </div>
          <div class="lm__register-flash-wrapper-foot"></div>
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
      userIcon: '',
      phoneIcon: '',
      mailIcon: '',
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
    loginInputFocus (type) {
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
    }
  }
}
</script>
<style lang="scss" scoped>
.lm__register {
  width: 100vw;
  height: 100vh;
  .lm__register-wrapper {
    display: flex;
    height: 100vh;
    background: url('../../assets/img/lm-loginBg.jpg') no-repeat center/cover;
    .lm__register-flash {
      width: 40vw;
      height: 100vh;
      backdrop-filter: blur(8px);
      .lm__register-flash-wrapper {
        color: #FFF;
        font-size: 36px;
        text-align: center;
        line-height: 100vh;
      }
    }
    .lm__register-main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 1;
      height: 100vh;
      background: #FFF;
      .lm__register-main-form {
        .lm__register-form-title {
          color: #2F3367;
          font-size: 28px;
          line-height: 42px;
          font-weight: 700;
          font-family: 'Inter-Bold';
        }
        .lm__register-form-tips {
          color: #303468;
          font: normal normal 500 16px/24px 'Inter-Medium';
          margin-top: 12px;
        }
        .lm__register-input-wrapper {
          margin-top: 44px;
          width: 443px;
          .lm__register-input {
            position: relative;
            display: flex;
            align-items: center;
            padding: 17px 20px 17px 17px;
            background: #F5F5F7;
            border: 3px solid #F5F5F7;
            border-radius: 10px;
            margin-bottom: 28px;
            transition: all .3s;
            input {
              position: relative;
              border: none;
              outline: none;
              background: transparent;
              margin-left: 22px;
              color: #3C4071;
              font: normal normal 500 18px/27px 'Inter-Medium';
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
            &::before {
              position: absolute;
              background: transparent;
              width: 50px;
              height: 24px;
              font: normal normal 500 16px/24px 'Inter-Medium';
              color: #8B8FA8;
              top: 19px;
              left: 60px;
              transition: all 0.3s cubic-bezier(0, 0.06, 0, 1.21);
            }
            &.lm__register-input-username::before {
              content: "Name";
            }
            &.lm__register-input-number::before {
              content: "Mobile number";
              width: 120px;
            }
            &.lm__register-input-email::before {
              content: "E-mail";
            }
          }
        }
        .lm__register-submit-btns {
          margin-top: 38px;
          display: flex;
          justify-content: flex-end;
          .lm__register-submit-btn {
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
        .lm__register-extra-handlers {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 34px;
          padding-top: 30px;
          border-top: 1px solid #ECECF0;
          .lm__register-extra-tips{
            font-family: 'Inter-Medium';
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #393D6E;
          }
          .lm__register-extra-signup {
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
