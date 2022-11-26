<!--
  功能：
  作者：lee
  时间：2022年11月07日 22:13:21
  版本：v1.0
-->
<template>
  <div class="lm_analytics">
    <div class="lm-analy-lt">
      <div class="lm-analy-lt-l">
        <div class="lm-analy-lt-l-head lm-br-8 lm-pd-24">
          <h3 class="lm-analy-cd-title">Congratulations Katie!</h3>
          <p class="lm-analy-cd-word">Best seller of the month</p>
          <div class="lm-analy-cd-bot">
            <i class="lm-analy-cd-bot-i">$48.9k</i>
            <span class="lm-analy-cd-bot-word">78% of target</span>
            <a-button type="primary" text="View Sales" class="lm-analy-cd-btn"></a-button>
          </div>
        </div>
        <div class="lm-analy-lt-l-main"></div>
        <div class="lm-analy-lt-l-foot"></div>
      </div>
      <div class="lm-analy-lt-r lm-br-8 lm-analy-share-card">
        <!-- head -->
        <div class="lm-sc-user lm-pd-24">
           <div class="lm-sc-user-avatar">
            <img src="@/assets/img/Acatar.png" alt="">
           </div>
           <div class="lm-sc-user-words">
            <i>Arash Shared Event</i>
            <span>07 Sep 2021 at 10:30 AM</span>
           </div>
        </div>
        <!-- img -->
        <div class="lm-sc-img">
          <img src="@/assets/img/share.png" alt="">
        </div>
        <!-- detail -->
        <div class="lm-sc-details">
          <p class="lm-sc-details-words">How To Excel In A Technical…</p>
          <div class="lm-sc-details-tags">
            <span>Technical</span>
            <span>ACCOUNT</span>
            <span>EXCEL</span>
          </div>
          <div class="lm-sc-details-team"></div>
        </div>
        <!-- foot -->
        <div class="lm-sc-foot">
          <div class="lm-sc-foot-operate">
            <div class="lm-operate-like">
              <svg-icon name="analy-like" width="18" height="18"></svg-icon>
              236
            </div>
            <div class="lm-operate-review">
              <svg-icon name="analy-review" width="18" height="18"></svg-icon>
              12
            </div>
          </div>
          <div class="lm-sc-foot-handler">
            <svg-icon name="analy-operate" width="3.5" height="14"></svg-icon>
          </div>
        </div>
      </div>
    </div>
    <div class="lm-analy-rt lm-br-8 lm-pd-24">
      <div class="lm-analy-rt-head">
        <span class="sharks">For Business Sharks</span>
        <span class="lm-handler-btn"><svg-icon name="analy-handler" width="4" height="14"></svg-icon></span>
      </div>
      <p class="lm-analy-desc">Here, i focus ona range of items and featured that we use in life without them</p>
      <div class="lm-analy-basic">
        <h3 class="tips">Basic price is $30</h3>
        <div class="lm-basic-items">
          <div class="lm-basic-item" v-for="(option, index) in basicOptions" :key="index" @click="checked(index)">
            <input class="lm-item-checkbox" type="checkbox" :checked="option.isChecked">
            <div class="lm-item-name">{{ option.name }}</div>
            <span class="lm-item-price" :class="option.isChecked ? 'checked-price' : ''">{{ option.price }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import aButton from '@/components/Button/button.vue'
export default {
  name: 'lm_analytics',
  components: {
    aButton
  },
  data () {
    return {
      basicOptions: [
        {
          isChecked: false,
          name: 'Branding',
          price: '+$30'
        }, {
          isChecked: true,
          name: 'Marketing',
          price: '+$75'
        }, {
          isChecked: false,
          name: 'App Building',
          price: '+$125'
        }, {
          isChecked: false,
          name: 'SEO',
          price: '+$48'
        }
      ]
    }
  },
  methods: {
    checked (index) {
      this.basicOptions[index].isChecked = !this.basicOptions[index].isChecked
    }
  }
}
</script>
<style lang="scss" scoped>
.lm_analytics {
  display: flex;
  justify-content: space-between;
  .lm-analy-lt {
    flex: 1;
    margin-right: 27px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 27px;
    grid-row-gap: 0px;
    .lm-analy-lt-l {
      min-width: 300px;
      .lm-analy-lt-l-head {
        background: #ffffff url('@/assets/img/awards.png') no-repeat right bottom;
        .lm-analy-cd-title {
          font-size: 16px;
          line-height: 22px;
          font-style: italic;
          font-weight: 100;
          font-family: 'Inter-Regular';
        }
        .lm-analy-cd-word {
          margin-top: 5px;
          font-size: 12px;
          line-height: 20px;
          font-family: 'Inter-Medium';
        }
        .lm-analy-cd-bot {
          margin-top: 20px;
          .lm-analy-cd-bot-i {
            display: block;
            color: #696CFF;
            font-size: 26px;
            line-height: 36px;
            font-family: 'Inter-Regular';
            font-weight: 100;
          }
          .lm-analy-cd-bot-word {
            display: block;
            color: #A1ACB8;
            font-size: 12px;
            line-height: 20px;
            font-family: 'Inter-Regular';
          }
          .lm-analy-cd-btn {
            margin-top: 10px;
          }
        }
      }
    }
    .lm-analy-lt-r {
      .lm-sc-user {
        display: flex;
        align-items: center;
        .lm-sc-user-avatar {
          width: 40px;
          height: 40px;
          img {
            object-fit: cover;
          }
        }
        .lm-sc-user-words {
          display: flex;
          flex-direction: column;
          margin-left: 14px;
          i {
            color: var(--font-Color);
            font-size: 18px;
            line-height: 24px;
            font-family: 'Inter-Regular';
          }
          b {
            color: #a1acb8;
            font-size: 12px;
            line-height: 20px;
            font-family: 'Inter-Regular';
          }
        }
      }
      .lm-sc-img {
        img {
          width: 100%;
          object-fit: cover;
        }
      }
      .lm-sc-details {
        margin-top: 55px;
        padding: 0 25px;
        .lm-sc-details-words {
          color: var(--font-color);
          font-size: 18px;
          line-height: 25px;
          font-family: 'Inter-Regular';
          font-style: italic;
          margin: 0;
        }
        .lm-sc-details-tags {
          margin-top: 15px;
          display: flex;
          span {
            display: inline-block;
            border-radius: 4px;
            background: rgba($color: #696CFF, $alpha: 0.16);
            padding: 2px 8.5px;
            margin-right: 12.5px;
            color: #696CFF;
            font-size: 13px;
            line-height: 18px;
            font-family: 'Inter-Medium';
          }
        }
      }
      .lm-sc-foot {
        margin: 0 28px;
        padding: 15px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-top: 1px solid #ECEEF1;
        margin-top: 38px;
        .lm-sc-foot-operate {
          display: flex;
          color: #A1ACB8;
          font-size: 15px;
          line-height: 23px;
          font-family: 'Inter-Regular';
          >div {
            margin-right: 24px;
            display: flex;
            align-items: center;
            svg {
              margin-right: 8px;
            }
          }
        }
      }
    }
  }
  .lm-analy-rt {
    width: 358px;

    .lm-analy-rt-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .sharks {
        color: var(--h1-color);
        font-size: 18px;
        line-height: 25px;
        font-style: italic;
        font-family: 'Inter-Regular';
      }
      .lm-handler-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        cursor: pointer;
      }
    }

    .lm-analy-desc {
      margin-top: 20px;
      color: var(--p-color);
      font-size: 15px;
      line-height: 23px;
      font-family: 'Inter-Regular';
    }

    .lm-analy-basic {
      margin-top: 20px;
      .tips {
        color: var(--h1-color);
        font-size: 15px;
        font-style: italic;
        line-height: 21px;
        font-family: 'Inter-Regular';
        margin-bottom: 11px;
      }
      .lm-basic-items {
        .lm-basic-item {
          padding: 15px;
          display: flex;
          align-items: center;
          box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.0001);
          border-radius: 6px;
          background: rgba(0, 0, 0, 0.0001);
          border: 1px solid #696CFF;
          margin-bottom: 18px;
          transition: all .3s;
          cursor: pointer;
          &:hover {
            box-shadow:0 0 18px rgba(105, 108, 255, .5);
          }

          .lm-item-checkbox {
            cursor: pointer;
            width: 18px;
            height: 18px;
            background: #000;
          }
          .lm-item-name {
            margin-left: 8px;
            color: var(--p-color);
            font-size: 15px;
            line-height: 23px;
            font-family: 'Inter-Regular';
            flex: 1;
          }
          .lm-item-price {
            background: rgba(113, 221, 55, 0.16);
            border-radius: 4px;
            padding: 1px 10px;
            color: #71dd37;
            font-size: 13px;
            line-height: 20px;
            font-family: 'Inter-Medium';
            &.checked-price {
              color: #696CFF;
              background: rgba(105, 108, 255, 0.16);
            }
          }
        }
      }
    }
  }
}
</style>
