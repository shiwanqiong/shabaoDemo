<template>
  <div>
    <div class="list pay-process">
      <div class="clearfix">
        <dl>
          <dt><img src="/static/images3/selectInsurer2.png" alt="选择参保人"/></dt>
          <dd class="finished">选择参保人</dd>
          <div class="line line-finished"></div>
        </dl>
        <dl>
          <dt><img src="/static/images3/checkOrder2.png" alt="核实订单"/></dt>
          <dd class="finished">核实订单</dd>
          <div class="line line-finished"></div>
        </dl>
        <dl>
          <dt><img src="/static/images3/payOrder.png" alt="支付订单"/></dt>
          <dd>支付订单</dd>
          <div class="line"></div>
        </dl>
        <dl>
          <dt><img src="/static/images3/finishOrder.png" alt="完成订单"/></dt>
          <dd>完成</dd>
        </dl>
      </div>
    </div>
    <order-detail-com></order-detail-com>
    <div class="contract">
      <p class="clearfix">
        <span style="padding-right:0.1rem;"><input type="checkbox" id="myContract" class="checkbox"></span>
        <span>我同意并签订<a href='showContractInfo.html?service_fee=${serviceFee}'>《委托代理协议》</a></span>
      </p>
    </div>
    <div class="operate">
      <router-link :to="{name:'payOrder'}" class="btn btn-big btn-blue">提交订单</router-link>
      <!-- <a href="javascript:void(0)" class="btn btn-big btn-nobg">修改参保资料</a> -->
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .list{
    background:#fff;
    margin-bottom:0.2rem;
  }
  .pay-process{
    padding:0.35rem 0.3rem;
    border-bottom:1px solid #dbdbdb;
  }
  .pay-process dl{
    float:left;
    width:25%;
    font-size:0.2rem;
    text-align: center;
    color:#ccc;
    position:relative;
  }
  /* 个人社保 */
  .social-process dl{
    width:33.33%;
  }
  .pay-process dt{
    width:0.36rem;
    height:0.36rem;
    margin:0 auto;
    margin-bottom: 0.26rem;
  }
  .pay-process dt img{
    width:100%;
    height:100%;
  }
  .pay-process .line{
    position:absolute;
    width:60%;
    height:0.03rem;
    background: #ccc;
    top:20%;
    right:-28%;
  }
  .pay-process .finished{
    color:#2660ad;
  }
  .pay-process .line-finished{
    background: #2660ad;
  }
  .detail-item{
    height:0.94rem;
    line-height:0.94rem;
    border-bottom:1px solid #dbdbdb;
    margin-left:0.3rem;
    padding-right: 0.3rem;
    font-size:0.32rem;
    color:#403e3e;
  }
  .contract{
    text-align:center;
    padding:0.54rem 0;
  }
  .contract p{
    text-align: center;
  }
  .contract span{
    vertical-align: middle;
    display: inline-block;
    font-size:0.24rem;
  }
  .contract span a{
    color:#2660ad;
  }
  .operate{
    margin-bottom: 0.3rem;
  }
  .operate a{
    width:84%;
  }
  .operate{
    margin-top:1rem;
  }
</style>
<script>
  import orderDetailCom from '../../components/orderDetailCom'
    export default{
        data(){
            return {}
        },
        components:{orderDetailCom}
    }
</script>
