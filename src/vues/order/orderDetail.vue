<template>
  <div class="container">
    <order-detail-com></order-detail-com>
    <c:if test="${order.order_status==1}">
      <div class="operateBtn">
        <router-link :to="{name:'payOrder'}" type="button" class="btn btn-blue btn-big">去支付</router-link>
        <p class="cancelBtn"><a href="wcCancelOrder.html?orderId=${order.order_id }" onclick="javascript:return (confirm('确定要取消订单吗？'));"class="textBlue">取消订单</a></p>
      </div>
    </c:if>
  </div>
</template>
<style lang="scss" scoped>
  .container{
    padding-bottom:1.9rem;
  }
  .operateBtn{
    margin-top:0.6rem;
    padding:0 0.6rem;
  }
  .cancelBtn{
    text-align: center;
    margin-top:0.3rem;
  }
</style>
<script>
  import orderDetailCom from '../../components/orderDetailCom'
  export default{
    data(){
      return {

      }
    },
    components:{orderDetailCom}
  }
</script>
