<template>
  <div>
    <div class="list pay-process">
      <div class="clearfix">
        <dl>
          <dt><img src="/static/images3/selectInsurer2.png" alt="选择参保人"/> </dt>
          <dd class="finished">选择参保人</dd>
          <div class="line line-finished"></div>
        </dl>
        <dl>
          <dt><img src="/static/images3/checkOrder2.png" alt="核实订单"/></dt>
          <dd class="finished">核实订单</dd>
          <div class="line line-finished"></div>
        </dl>
        <dl>
          <dt><img src="/static/images3/payOrder2.png" alt="支付订单"/></dt>
          <dd class="finished">支付订单</dd>
          <div class="line line-finished"></div>
        </dl>
        <dl>
          <dt><img src="/static/images3/finishOrder.png" alt="完成订单"/></dt>
          <dd>完成</dd>
        </dl>
      </div>
    </div>
    <div class="list pay-list">
      <ul>
        <li class="clearfix" style="text-indent:0.3rem;">支付金额 <span class="fr money">￥${order_money }</span></li>
      </ul>
    </div>
    <div class="list pay-lists">
      <ul>
        <li class="item-title">支付方式</li>
        <li class="clearfix pay-type">
          <p class="clearfix">
            <span class="wallet bg">钱包支付</span><span class="money"><i>￥${acct_info.balance }</i>元</span><c:if test="${ acct_info.available_balance < order_money }"><span>余额不足</span></c:if>
          </p>
        </li>
        <li class="pay-type clearfix">
          <p class="clearfix"><span class="wechat bg">微信支付</span></p>
        </li>
        <!-- <li class="pay-type clearfix">
                <p class="clearfix"><span class="paypal bg">连连支付</span></p>
            </li> -->
        <li class="pay-type clearfix">
          <p class="clearfix"><span class="outline bg">线下汇款</span><router-link :to="{name:'outlinePayIntro'}" style="color:#2660ad;">如何线下汇款？</router-link></p>
        </li>
      </ul>
    </div>
    <div class="operate">
      <router-link :to="{name:'payOrderStatus'}" class="btn btn-big btn-blue">立即支付</router-link>
    </div>
    <!-- 用来提交的隐藏表单 add by Zed 2016-03-04-->
    <form id="submitForm" method="post" action="wcPayOrder.html">
      <input type=hidden id="order_id" name="order_id" value="${order_id }" />
      <input type=hidden id="pay_type" name="pay_type" value="" />
    </form>
    <input type="hidden" id="record_id"/>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/checkOrder.scss";
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
