<template>
  <div class="discount-detail" style="display:block;">
    <div class="discount-list">
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .discount-detail{
    width:100%;
    height:100%;
    background:#f5f6f8;
    display:none;
  }
  .discount-list{
    margin:0 0.3rem;
  }
  .list-1{
    margin-top:0.3rem;
    width:100%;
    height:2.42rem;
  }
  .coupon-cash{
    background:url("../../../static/images3/coupon-cash.png") no-repeat center center;
    background-size:100% 2.42rem;
  }
  .coupon{
    background:url("../../../static/images3/coupon.png") no-repeat center center;
    background-size:100% 2.42rem;
  }
  .current{
    background:url("../../../static/images3/coupon-cashActive.png") no-repeat center center;
    background-size:100% 2.42rem;
  }
  .active{
    background:url("../../../static/images3/couponActive.png") no-repeat center center;
    background-size:100% 2.42rem;
  }
  .money{
    height:1.52rem;
    line-height:1.52rem;
    font-size:0.44rem;
    color:#fff;
    text-indent:1rem;
  }
  .money span{
    font-size:0.32rem;
  }
  .expiry-date{
    color:#595858;
    height:0.9rem;
    line-height:0.9rem;
    font-size:0.24rem;
    text-indent:0.8rem;
  }
</style>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
