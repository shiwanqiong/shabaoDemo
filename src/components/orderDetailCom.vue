<template>
  <div>
    <div class="row">
      <p class="lightLine noMargin">
        订单号
        <span id="orderId">${order.order_id }</span>
      </p>
      <p class="lightLine noMargin">
        套餐
        <span id="proName">
				<c:if test="${order.order_type == 3||order.order_type == 4 }">
               		补缴套餐
               </c:if>
               <c:if test="${order.order_type != 3&&order.order_type != 4 }">
               		${order.productName }
               </c:if>
			</span>
      </p>
      <p class="lightLine">
        参保人员
        <span id="userName">${fn:length(perList)}</span>
      </p>
      <div id="insurerList">
        <ul>
          <router-link :to="{name:'orderDetailFee'}" tag="li">
            <div class="insurerInfo lightLine">
              <div class="col-2">张三</div>
              <div class="col-6">410381199606034022</div>
              <div class="col-4" style="text-align: right">汉族</div>
            </div>
          </router-link>
        </ul>
      </div>
      <p class="lightLine">
        参保月份
        <span id="insurerMonth">2017~03-04</span>
      </p>
      <p>
        订单状态
        <span id="orderStatus"></span>
      </p>
    </div>
    <div class="row">
      <p class="textBlue lightLine linkP noMargin">费用明细
      </p>
      <p class="lightLine">
        保费
        <span id="serviceFee">${service_fee_submit }</span>
      </p>
      <p class="lightLine">
        优惠
        <span id="privilege">${discount_submit}</span>
      </p>
      <p class="textOrange">总计
        <span id="sumFee"><fmt:formatNumber type="number" groupingUsed="false" value="${order.amount - order.discount_amount }" pattern="0.00"/></span>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .row{
    /*padding-left:0.3rem;*/
    background-color: #ffffff;
    margin-top:0.3rem;
  }
  .row p{
    margin-left:0.3rem;
    padding-right:0.3rem;
    line-height:0.94rem;
    font-size:0.3rem;
  }
  p.noMargin{
    margin-left:0;
    padding-left:0.3rem;
  }
  .row p span{
    float: right;
  }
  .row .linkP{
    position: relative;
    padding-right:0.7rem;
  }
  .rightArrow{
    position: absolute;
    width:0.22rem;
    height:0.28rem;
    top:40%;
    right:0.3rem;
    background:url('/static/images3/right.png') no-repeat;
    background-size: cover;
  }

  .insurerInfo{
    overflow: hidden;
    font-size:0.26rem;
    padding-right:0.3rem;
    line-height: 0.94rem;
    margin-left:0.3rem;
    color:#595757;
  }
  #insurerList div.col-6{
    text-align: center;
  }
  #insurerList li{
    position:relative;
  }
  .insurerInfo div.col-4{
    text-align: right;
    width:31.33%;
    padding-right:0.18rem;
  }
  .insurerInfo .col-2{
    width:18.66%;
  }
  .insurerInfo .col-6{
    width:48%;
  }
  .arrowRight {
    position: absolute;
    width: 0.22rem;
    height: 0.27rem;
    right: 0.3rem;
    top: 0.36rem;
    background: url('/static/images3/right.png') no-repeat;
    background-size: cover;
  }
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
