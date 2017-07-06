<template>
  <div>
    <div class="pay-status">
      <img src="/static/images3/buySuccess.png"/><p class="buy-txt success">支付成功</p>
    </div>
    <div class="operator">
      <router-link :to="{name:'index'}" class="btn btn-big btn-white-black">返回首页</router-link>
      <router-link  :to="{name:'orderList'}" class="btn btn-big btn-white">查看订单</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .pay-status{
    margin:0.94rem auto 2.5rem;
    text-align:center;
  }
  .pay-status img{
    width:1.86rem;
    height:1.86rem;
  }
  .buy-txt{
    margin-top:0.5rem;
    font-size:0.44rem;
    color:#403e3e;
  }
  .success{
    color:#1e7eff;
  }
  .fail{
    color:#ee4849;
  }
  .btn-white-black{
    background-color:#f5f6f8;
    border:1px solid #403e3e;
    color:#403e3e;
    margin-bottom:0.6rem;
  }
  .operator a{
    width:84%;
  }
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
