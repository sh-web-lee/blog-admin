<!--
  功能：
  作者：lee
  时间：2022年11月06日 17:28:44
  版本：v1.0
-->
<template>
  <div class="lm_db_charts">
    <div class="lm_db_cs_cards">
      <div class="lm_db_cs_map lm_br16">
        <!-- head -->
        <div class="lm_cs_head">
          <div class="lm_cs_head_lt">
            <h3 class="lm_cs_title">Market Overview</h3>
            <p class="lm_cs_desc">7.2141,997.5 (25%)</p>
          </div>
          <div class="lm_cs_head_rt">
            <span class="lm_cs_option" :class="{ active: activeClass === index }" v-for="(option, index) in chartsOption" :key="index" @click="addClass(index)">{{ option.title }}</span>
          </div>
        </div>
        <!-- map -->
        <div class="lm_charts"></div>
      </div>
      <div class="lm_db_cs_balances lm_br16">
        <div class="lm_db_cs_bl_head">
          <span class="lm_bl_head_name">Balances</span>
          div.lm_bl_head_
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'lm_db_charts',
  data () {
    return {
      chartsOption: [
        {
          title: 'ALL'
        }, {
          title: '1M'
        }, {
          title: '6M'
        }, {
          title: '1Y'
        }, {
          title: 'YTD'
        }
      ],
      activeClass: 0
    }
  },
  methods: {
    addClass (i) {
      this.activeClass = i
    }
  }
}
</script>
<style lang="scss" scoped>
  .lm_db_charts {
    margin-top: 32px;
    .lm_db_cs_cards {
      display: flex;
      justify-content: space-between;
        .lm_db_cs_map {
          flex: 1;
          background: #fff;
          padding: 28px 0;

          .lm_cs_head {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 24px;

            .lm_cs_head_lt {
              .lm_cs_title {
                color: #00261c;
                font: normal normal 500 24px/28px 'Inter-Medium';
              }
              .lm_cs_desc {
                margin-top: 4px;
                color: #00DEA3;
                font: normal normal 500 14px/16px 'Inter-Medium';
              }
            }

            .lm_cs_head_rt {
              display: flex;
              .lm_cs_option {
                display: inline-block;
                margin-right: 18px;
                padding: 6px 13px;
                border: 1px solid #AEB6CF;
                filter: drop-shadow(0px 15px 35px rgba(242, 57, 133, 0.15));
                backdrop-filter: blur(7.5px);
                /* Note: backdrop-filter has minimal browser support */

                border-radius: 12px;

                color: #232927;
                font: normal normal 500 12px/20px 'Inter-Medium';
                cursor: pointer;

                &.active {
                  background: #00DEA3;
                  border: none;
                  box-shadow: 0px 6px 16px rgba(0, 222, 163, 0.06);
                  color: #fff;
                }
              }
            }
          }
        }
        .lm_db_cs_balances {
          width: 23%;
          padding: 20px;
          background-color: #fff;
          margin-left: 32px;
        }
    }
  }
</style>
