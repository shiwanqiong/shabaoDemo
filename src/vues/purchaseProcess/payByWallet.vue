<template>
  <div>
    <div class="list pay-by-wallet clearfix">
      <p class="clearfix">
        <span class="fl">支付金额</span>
        <span class="fr">${order_money }元</span>
      </p>
    </div>
    <form id="submitForm" method="post" >
      <input type=hidden id="order_id" name="order_id" value="${order_id}" />
      <input type=hidden id="token" name="token" value="${token}" />
      <div class="list wallet-pwd clearfix">
        <p class="clearfix">
          <span class="wallet-text">交易密码</span>
          <input class="fr wallet-input" type="password" id="transPassword" name="transPassword" value="" placeholder="请输入密码">
        </p>
      </div>
    </form>
    <p class="wallet-tip">提示：请输入包含数字字母的6~12位交易密码</p>
    <a class="btn btn-big btn-blue wallet-operator" style="width:84%;" type="button" onclick="submitOrder()">支付</a>
    <a class="btn btn-big btn-white btn-nobg" style="width:84%;" href="wcResetTransPwd.html">忘记密码</a>
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
