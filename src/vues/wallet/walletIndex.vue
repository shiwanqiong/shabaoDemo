<template>
  <div class="list">
    <ul class="item-list">
      <li><router-link :to="{name:'walletDetail'}">钱包<span id="balance"></span><span class="arrowRight"></span></router-link></li>
      <li><router-link :to="{name:'discountCoupon'}" href="wcDiscount.html">优惠券<span id="coupon"></span><span class="arrowRight"></span></router-link></li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/myWallet.scss";
</style>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
