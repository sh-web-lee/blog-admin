<!--
  功能：
  作者：lee
  时间：2022年11月06日 17:26:45
  版本：v1.0
-->
<template>
  <div class="lm_db_overview">
    <div class="lm_db_ov_cds">
      <div class="lm_db_ov_cd" v-for="(option, index) in cardOptions" :key="index">
        <div class="lm_cd_logo">
          <svg-icon :name="option.icon" width="40" height="40"></svg-icon>
        </div>
        <div class="lm_cd_ct">
           <div class="lm_cd_ct_lt">
            <div class="lm_db_ct_lt_name">
              <span class="lm_currency">{{ option.originCurrency }}</span>
              <svg-icon name="db-trans" width="12" height="12"></svg-icon>
              <span class="lm_currency">{{ option.transCurrency }}</span>
            </div>
            <div class="lm_db_ct_lt_value">{{ option.amount }}</div>
           </div>
           <div class="lm_cd_ct_rt">
            <svg-icon :name="option.trendUp ? 'growth' : 'growth-down'" width="104" height="56"></svg-icon>
           </div>
        </div>
        <div class="lm_cd_trend" :style="trendStyle(option.trendUp)">
          <svg-icon :name="option.towardsIcon" width="14" height="8"></svg-icon>
          <span class="lm_cd_trend_detail">{{ option.trendAmplitude }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lm_db_overview',
  data () {
    return {
      cardOptions: [
        {
          icon: 'db-coins-b',
          originCurrency: 'BTC',
          transCurrency: 'USD',
          amount: 9784.79,
          trendUp: true,
          trendAmplitude: '7.2%',
          towardsIcon: 'trend-up'
        }, {
          icon: 'db-coins-l',
          originCurrency: 'LTC',
          transCurrency: 'USD',
          amount: 8741.19,
          trendUp: false,
          trendAmplitude: '5.2%',
          towardsIcon: 'trend-down'
        }, {
          icon: 'db-coins-e',
          originCurrency: 'ETM',
          transCurrency: 'USD',
          amount: 4567.16,
          trendUp: true,
          trendAmplitude: '6.5%',
          towardsIcon: 'trend-up'
        }, {
          icon: 'db-coins-bnb',
          originCurrency: 'BNB',
          transCurrency: 'USD',
          amount: 6547.79,
          trendUp: true,
          trendAmplitude: '9.5%',
          towardsIcon: 'trend-up'
        }
      ]
    }
  },
  computed: {
    trendStyle () {
      return function (trend) {
        return trend ? 'color: #00DEA3' : 'color: #F23985'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .lm_db_overview {
    .lm_db_ov_cds {
      display: flex;
      justify-content: space-between;

      .lm_db_ov_cd {
        background: #fff;
        border-radius: 16px;
        padding: 24px;
        width: 23%;
        flex-wrap: wrap;
        transition: box-shadow .3s;

        &:hover {
          box-shadow:  5px 5px 5px #a6a6a6,
             -5px -5px 11px #ffffff;
        }

        .lm_cd_ct {
          display: flex;
          font-family: 'Inter-Medium';
          font-weight: 500;
          .lm_cd_ct_lt {
            .lm_db_ct_lt_name {
              display: flex;
              align-items: center;
              color: #333;
              font-size: 16px;
              line-height: 19px;
              margin-top: 16px;

              svg {
                margin: 0 9px ;
              }
            }
            .lm_db_ct_lt_value {
              width: 94px;
              margin-top: 8px;
              font-size: 24px;
              line-height: 28px;
              color: #00261c;
            }
          }
          .lm_cd_ct_rt {
            margin-left: 46px;
            width: 103px;
            overflow: hidden;
            animation: showTrend 1s .5s linear alternate;
          }
        }

        .lm_cd_trend {
          margin-top: 16px;
          font: normal normal 500 14px/16px 'Inter-Medium';
          color: #00DEA3;

          .lm_cd_trend_detail {
            margin-left: 4px;
          }
        }
      }
    }
  }

  @keyframes showTrend {
    0% {
      width: 0;
    }
    100% {
      width: 103px;
    }
  }
</style>
