<template>
  <div>
    <div class="sum-up">
      <div class="total">
        <p class="money-title">钱包总金额（元）</p>
        <p>0.00</p>
      </div>
      <div class="balance clearfix">
        <div class="fl">
          <p class="money-title">可用余额（元）</p>
          <p>0.00</p>
        </div>
        <div class="fl">
          <p class="money-title">冻结余额（元）</p>
          <p>0.00</p>
        </div>
      </div>
    </div>
    <div class="list">
      <p class="detail-title">钱包明细<span class="record-num"></span></p>
      <div id="wrapper" style="position:absolute;z-index:2016;bottom:0;left:0;width:100%;overflow:hidden;">
        <div id="scroller" style="position:absolute;left:0;width:100%;top:-50px;">
          <div id="pullDown">
            <span class="pullDownLabel"></span>
          </div>
          <ul class="wallet-detail" style="position:relative;width:100%;overflow:scroll;">
            <li v-for="item in items">
              <p class="item-name">企业社保套餐 <span class="date">16/04/01</span></p>
              <p class="item-money">余额：500 <span class="account">-300.00</span></p>
            </li>
          </ul>
          <p id="null" style="display:none;text-align:center;line-height:1rem;">您目前没有汇款底单信息~~</p>
          <div id="pullUp" style="text-align:center;line-height:1rem;">
            <span class="pullUpIcon"></span><span class="pullUpLabel"></span>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>
<style lang="scss" scoped>
  @import "../../assets/css/myWallet.scss";
</style>
<script>
  export  default{
    data(){
      return{
        items:[
          {},
          {}
        ]
      }
    }
  }
</script>
