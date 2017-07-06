<template>
  <div>
    <div class="list pay-process">
      <div class="clearfix">
        <dl>
          <dt><img src="resources/images2/selectInsurer2.png" alt="选择参保人"/></dt>
          <dd class="finished">选择参保人</dd>
          <div class="line line-finished"></div>
        </dl>
        <dl>
          <dt><img src="resources/images2/checkOrder.png" alt="提交订单"/></dt>
          <dd>提交订单</dd>
          <div class="line"></div>
        </dl>
        <dl>
          <dt><img src="resources/images2/payOrder.png" alt="支付订单"/></dt>
          <dd>支付订单</dd>
          <div class="line"></div>
        </dl>
        <dl>
          <dt><img src="resources/images2/finishOrder.png" alt="完成订单"/></dt>
          <dd>完成</dd>
        </dl>
      </div>
    </div>
    <p class="p-title">请选择参保人</p>
    <div class="list insurer">
      <ul class="insurer-list">
        <li class="clearfix all" style="border-bottom:1px solid #dbdbdb;">
          <span class="chk"><input type="checkbox" id="allSelect" name="allSelect" value="allSelect" class="allSelect"></span><label for="allSelect">全选</label>
        </li>
        <!-- 遍历参保人开始  -->
        <c:forEach var="item" items="${insurer_list}" varStatus="status">
          <li class="clearfix sbList">
            <span class="chk chk1"><input type="checkbox" id="${item.insurer_id}" class="insurer_id_checkbox" name="insurer_id" value="${item.insurer_id}"></span>
            <div class="abstract clearfix">
              <span class="name fl">${item.real_name}</span><span class="fr">${item.cert_id}</span>
            </div>
          </li>
        </c:forEach>
      </ul>
    </div>
    <div class="list workType clearfix">
      <p class="workTypeCont">请确认被保人是否属于高危工种：<a href="workType.html">查看高危工种</a></p>
      <p class="warn-tip">（请如实选择，否则将无法承保，对您造成损失，责任将由投保人自行承担）</p>
      <p class="workTypeSelect" style="margin-left:15px;"><input type="radio" name="workType" id="workType2" value=2 /><label for="workType2">不属于</label></p>
      <p class="workTypeSelect"><input type="radio" name="workType" id="workType1" value=1 /><label for="workType1">属于</label></p>
    </div>
    <div class="list" style="margin-top:0.2rem;">
      <ul class="select-time">
        <li class="time-title">
          <p>选择参保时间</p>
        </li>
        <li class="clearfix">
          <p class="fl">参保开始时间</p>
          <input type="text" class="pickMonth social-security fl" id="startMonth" value="" readonly="" placeholder="请选择时间">
        </li>
        <li class="clearfix no-border">
          <p class="fl">参保结束时间</p>
          <input type="text" class="pickMonth social-security fl" id="endMonth" value="" readonly="" placeholder="请选择时间">
        </li>
      </ul>
    </div>
    <div class="operator">
      <button id="next_step" class="btn btn-big btn-blue operate" ontap="submitOrder()">下一步</button>
    </div>
    <form id="submitToCheckOrderForm" method="post" action="submitToCheckCiOrder.html">
      <input type=hidden id="set_id" name="set_id" value="${set_id}" />
      <input type=hidden id="order_type" name="order_type" value="5" />
      <input type=hidden id="insurer_id_list" name="insurer_id_list" value="" />
      <input type=hidden id="start_month" name="start_month" value="${start_month}" />
      <input type=hidden id="end_month" name="end_month" value="${end_month}" />
      <input type=hidden id="work_type" name="work_type"/>
    </form>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/socialSecurityDetail.scss";
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
