<template>
  <div class="container">
    <div id="null" style="display: none;">
      <dl>
        <dt>
          <img src="resources/images3/nullOrder.png" alt="">
        </dt>
        <dd>
          您还没有订单
        </dd>
      </dl>
      <p>
        <a href="socialInsurance.html" class="textBlue">去购买</a>
      </p>
    </div>
    <div id="orderList">
      <div class="tab lightLine">
        <ul>
          <li class="col-6">
            <select name="" id="orderStatus">
              <option value="">全部</option>
              <option value="2">已支付</option>
              <option value="1">待支付</option>
              <option value="4">已取消</option>
              <option value="3">已失效</option>
            </select>
            <span class="dropArrow"></span>
            <span class="vertiLine"></span>
          </li>
          <li class="col-6">
            <select name="" id="orderDate">
              <option value="">购买年份</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
            </select>
            <span class="dropArrow"></span>
          </li>
        </ul>
      </div>
      <div class="orderSummary">
        <div id="wrapper">
          <div id="scroller">
            <div id="pullDown">
              <span class="pullDownLabel"></span>
            </div>
            <ul class="orderList">
              <router-link :to="{name:'orderDetail'}" tag="li">
                <div>
                  <span class="orderIcon"></span>
                  <p class="titleP">订单号：sp123309<span class="textRight status">已付款</span></p>
                </div>
              </router-link>
            </ul>
            <div id="pullUp">
              <span class="pullUpIcon"></span><span class="pullUpLabel"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  #null{
    margin-top:45%;
  }
  #null dd{
    font-size:0.32rem;
    color:#cccccc;
    text-align: center;
    margin-top:0.6rem;
  }
  #null dl{
    overflow: hidden;
  }
  #null dt{
    width:33.3%;
    margin:0 auto;
  }
  dt img{
    width:100%;
  }
  #null p{
    text-align: center;
    font-size: 0.32rem;
    margin-top:0.35rem;
  }
  #orderStatus,#orderDate{
    width:100%;
    height:0.94rem;
    line-height: 0.94rem;
    padding-left:30%;
    border:none;
    font-size:0.32rem;
    padding-top:0.05rem;
  }
  #orderDate{
    background-color: #ffffff;
    padding-left:20%;
  }
  select { -webkit-appearance:none; appearance: none;  }
  .tab,.tab ul{
    overflow: hidden;
  }
  .tab li{
    position: relative;
  }
  .vertiLine{
    position: absolute;
    right:0;
    top:32%;
    width:0;
    height:0.44rem;
    border-right:1px solid #dbdbdb;
  }
  .dropArrow{
    width:0;
    height:0;
    border-top:0.16rem solid #999999;
    border-left:0.14rem solid  transparent;
    border-right:0.14rem solid transparent;
    position:absolute;
    top:45%;
    right:30%;
  }
  .orderSummary li{
    position: relative;
    padding:0.3rem;
    margin-bottom:0.2rem;
    background-color: #ffffff;
  }
  .orderIcon{
    width:0.34rem;
    height:0.34rem;
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    left:0.3rem;
    top:0.4rem;
  }
  li .orderIcon{
    background-image:url('../../../static/images3/paid.png');
  }
  li .status{
    color:#2660ad;
  }
  li.nonePayment .orderIcon{
    background-image: url('../../../static/images3/nonePay.png');
  }
  li.nonePayment .status{
    color:#ea5504;
  }
  .textRight{
    float: right;
  }
  .titleP{
    font-size:0.32rem;
    color:#262525;
    line-height: 0.55rem;
    padding-left:0.48rem;
  }
  .date{
    font-size:0.28rem;
    color:#595757;
    margin-top:0.15rem;
    padding-left:0.48rem;
  }
  /*改变输入框placeholder的颜色值*/
  ::-webkit-input-placeholder {
    color: #595757; }
  :-moz-placeholder {
    color: #595757; }
  ::-moz-placeholder {
    color: #595757; }
  :-ms-input-placeholder {
    color: #595757; }
  input:focus::-webkit-input-placeholder{ color:#595757;}
  #wrapper{
    top:0.95rem;
    bottom:0;
  }
  #pullUp{
    background-color:#f5f6f8;
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
