<template>
  <div class="container">

    <!--<c:if test="${stop_type eq '1'||stop_type  eq '2'||stop_type eq '3'}">-->
      <div>
        <p class="tip">提示：停保时间为选择的后续所有月份</p>
      </div>
    <!--</c:if>-->
    <!--<c:if test="${stop_type eq '0'}">-->
      <div>
        <p class="nullTip">提示：当前没有可停保月份</p>
      </div>
    <!--</c:if>-->

    <div class="row">
      <p class="lightLine">
        <label for="" class="col-4">真实姓名</label>
        <span id="realName">${stop_info.real_name}</span>
      </p>
      <p class="lightLine">
        <label for="" class="col-4">身份证</label>
        <span id="certId">${stop_info.cert_id}</span>
      </p>
      <p class="lightLine">
        <label for="" class="col-4">电话</label>
        <span id="telNO">${stop_info.mobile_no}</span>
      </p>
      <p>
        <label for="" class="col-4">民族</label>
        <span id="nation">${stop_info.nation}</span>
      </p>
    </div>
    <!--<c:if test="${stop_type eq '1'||stop_type  eq '2'||stop_type eq '3'}">-->
      <div class="detailInfo row">
        <p class="lightLine">
          <label class="col-4">停保类型</label>
          <select name="" class="stopChoose col-5" style="float: right">
            <option value="0">请选择</option>
            <!--<c:if test="${stop_info.invalid_month ne '000000' }">-->
              <option value="A001">社保</option>
            <!--</c:if>-->
            <!--<c:if test="${stop_info.invalid_fund_month ne '000000' }">-->
              <option value="C001">公积金</option>
            <!--</c:if>-->
            <!--<c:if test="${stop_info.invalid_fund_month ne '000000' && stop_info.invalid_month ne '000000' }">-->
              <option value="A001&C001">社保+公积金</option>
            <!--</c:if>-->
          </select>
          <span class="angle"></span>
        </p>
        <div class="stopDate">
          <!--<c:if test="${stop_info.invalid_month ne '000000' }">-->
            <div class="socialDate lightLine">
              <p class="col-5">社保停保时间</p>
              <p class="col-7 textBlue socialDateP" date="${stop_info.invalid_month}">
              </p>
            </div>
          <!--</c:if>-->
          <div class="clearfix"></div>
          <!--<c:if test="${stop_info.invalid_fund_month ne '000000' }">-->
            <div class="fundDate lightLine">
              <p class="col-5">公积金停保时间</p>
              <p class="col-7 textBlue fundDateP" date="${stop_info.invalid_fund_month}">
              </p>
            </div>
         <!-- </c:if>-->
        </div>
      </div>
   <!-- </c:if>-->

    <div class="btnRow">
      <!--<c:if test="${stop_type eq '1'||stop_type  eq '2'||stop_type eq '3'}">-->
        <input style="display: none" type="button" class="btn btn-blue btn-big" value="确定停保" onclick="stopInsurer()">
      <!--</c:if>-->
      <!--<c:if test="${stop_type eq '0'}">-->
        <input  type="button" class="btn btn-gray btn-big" value="确定停保">
      <!--</c:if>-->
    </div>


  </div>
</template>
<style lang="scss" scoped>
  .row{
    background-color: #fff;
    margin-top:0.2rem;
  }
  .row p{
    overflow: hidden;
    margin-left:0.3rem;
    line-height:0.94rem;
    padding-right:0.3rem;
    position:relative;
  }
  p input[type=text]{
    border:0;
    background-color: #ffffff;
    text-align: right;
    padding-right:0.3rem;
    padding-left:0;
  }
  .btnRow{
    position: fixed;
    bottom:0;
    width:100%;
  }
  p label{
    font-size:0.32rem;
    color:#403e3e;
  }
  p span{
    float:right;
  }
  select {
    -webkit-appearance:none; appearance: none;
    border:none;
    line-height:0.94rem;
    font-size: 0.32rem;
    text-align: right;
    padding-left:8%;
    font-size:0.28rem;
    color:#2660ad;
  }
  .socialDate,.fundDate{
    display: none;
    overflow: hidden;
  }
  .socialDate.choose,.fundDate.choose{
    display: block;
  }
  p.col-8,p.col-7{
    text-align: right;
  }
  .stopDate{
    margin-left:0.3rem;
  }
  .stopDate p{
    /*padding:0;*/
    margin:0;
  }
  /*  select{
        border:none;
        font-size: 0.26rem;
    }*/
  .angle{
    position: absolute;
    display: block;
    border-top:0.15rem solid #2660ad;
    border-left:0.12rem solid transparent;
    border-right:0.12rem solid transparent;
    right:0.3rem;
    top:43%;
  }
  .tip,.nullTip {
    line-height: 0.94rem;
    font-size: 0.28rem;
    color: #e6bd38;
    background-color: #fff8de;
    text-align: center;
    margin:0;
  }
  .btn-gray{
    width:100%;
    border:1px solid #cccccc;
    background-color:#cccccc;
    color:#696969;
  }
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
