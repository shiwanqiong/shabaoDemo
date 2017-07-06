<template>
  <div>
    <div class="list pay-process">
      <!--<div class="pay-process-img"></div>-->
      <div class="clearfix">
        <dl>
          <dt><img src="/static/images3/selectInsurer2.png" alt="选择参保人"/></dt>
          <dd class="finished">选择参保人</dd>
          <div class="line line-finished"></div>
        </dl>
        <dl>
          <dt><img src="/static/images3/checkOrder.png" alt="提交订单"/></dt>
          <dd>提交订单</dd>
          <div class="line"></div>
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
    <p class="p-title">您添加的所有参保人</p>
    <div class="list insurer">
      <li class="clearfix all">
        <span class="chk"><input type="checkbox" id="allSelect" name="allSelect" value="allSelect" class="allSelect"></span><label for="allSelect">全选</label>
      </li>
      <ul class="insurer-list">
        <!-- 遍历参保人开始 -->
        <c:forEach var="item" items="${insurer_list}" varStatus="status">
          <li class="clearfix">
            <span class="chk"><input type="checkbox" id="${item.insurer_id}" class="insurer_id_checkbox" name="insurer_id" value="${item.insurer_id}"></span>
            <div>
              <div class="abstract clearfix"><span class="name">${item.real_name}</span><span class="buyType"><select name="buyType_${item.insurer_id}" id="buyType_${item.insurer_id}"><c:choose><c:when test="${item.is_social_security==1 && item.is_common_fund==1 }"><option value="a" selected>社保+公积金</option><option value="b">社保</option><option value="c">公积金</option></c:when><c:when test="${item.is_social_security==1 }"><option value="a">社保+公积金</option><option value="b" selected>社保</option><option value="c">公积金</option></c:when><c:when test="${item.is_common_fund==1 }"><option value="a">社保+公积金</option><option value="b">社保</option><option value="c" selected>公积金</option></c:when><c:otherwise></c:otherwise></c:choose></select></span><span class="insurer-info fr"></span>
                <p class="id-card">身份证：${item.cert_id}</p>
              </div>
              <div class="detail-info clearfix">
                <p class="area">社保参保地：${item.area_name}</p>
                <p class="base">基数：${item.salary}</p>
                <p class="area">公积金参保地：${item.fund_area_name}</p>
                <p class="base">基数：${item.fund_salary}</p>
              </div>
            </div>
          </li>
        </c:forEach>
      </ul>
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
      <router-link :to="{name:'confirmOrder'}" id="next_step" class="btn btn-big btn-blue operate">下一步</router-link>
    </div>
    <!-- 用来提交的隐藏表单 -->
    <form id="submitForm" method="post" action="wcSubmitOrder.html">
      <input type=hidden id="insurer_ids" name="insurer_ids" value="" />
      <input type=hidden id="insurerBuyType" name="insurerBuyType" value="" />
      <input type=hidden id="order_type" name="order_type" value="${set_type}" />
      <input type=hidden id="set_id" name="set_id" value="${set_id}" />
      <input type=hidden id="set_type" name="set_type" value="${set_type}" />
      <input type=hidden id="area_id" name="area_id" value="${area_id}" />
      <input type=hidden id="start_month" name="start_month" value="" />
      <input type=hidden id="end_month" name="end_month" value="" />
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
