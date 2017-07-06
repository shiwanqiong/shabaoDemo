<template>
  <div class="container">
   <!-- <c:if test="${socialInfo.info_status eq '1'}">-->
      <div class="row funcList">
        <p class="lightLine">
          姓名
          <span class="textRight">${socialInfo.real_name }</span>
        </p>
        <p class="lightLine">
          身份证号
          <span class="textRight">${socialInfo.cert_id }</span>
        </p>
        <!--<c:if test="${socialInfo.person_ss_code ne ''}">-->
          <div class="socialInfo">
            <p class="lightLine">
              社保账号
              <span class="textRight">${socialInfo.person_ss_code }</span>
            </p>
            <p class="lightLine">
              社保参保地
              <span class="textRight">${socialInfo.area_name }</span>
            </p>
          </div>
       <!-- </c:if>-->
        <!--<c:if test="${socialInfo.fund_no ne ''}">-->
          <div class="fundInfo">
            <p class="lightLine">
              公积金账号
              <span class="textRight">${socialInfo.fund_no }</span>
            </p>
            <p>
              公积金参保地
              <span class="textRight">${socialInfo.fund_area_name }</span>
            </p>
          </div>
        <!--</c:if>-->
      </div>
    </c:if>
   <!-- <c:if test="${socialInfo.info_status eq '2'}">-->
      <div id="noneBuied1" style="display: none">
        <dl>
          <dt>
            <img src="../../../../static/images3/noInfo.png" alt="">
          </dt>
          <dd>
            数日内您即可查询账号信息
          </dd>
        </dl>
      </div>
   <!-- </c:if>-->
    <!--<c:if test="${socialInfo.info_status eq '3'}">-->
      <div id="noneBuied" style="display: none">
        <dl>
          <dt>
            <img src="../../../../static/images3/nullInsurer.png" alt="">
          </dt>
          <!--<c:if test="${userInfo.userType eq '1'}">-->
            <dd>
              该参保人还未参保，<a href="wcSecurityIndex.html?service_fee=18&set_type=A1" class="textBlue">去参保</a>
            </dd>
          <!--</c:if>-->
          <!--<c:if test="${userInfo.userType eq '2'}">
            <c:if test="${userInfo.info_flag eq '1'}">-->
              <dd>
                该参保人还未完善参保信息，<a href="wcPerfectPersonalInsuranceInfoReq.html" class="textBlue">去完善</a>
              </dd>
           <!-- </c:if>
            <c:if test="${userInfo.info_flag eq '2'}">-->
              <dd>
                该参保人还未参保，<a href="wcSecurityIndex.html?service_fee=48&set_type=A2" class="textBlue">去参保</a>
              </dd>
            <!--</c:if>
          </c:if>-->
        </dl>
      </div>
   <!-- </c:if>-->
  </div>
</template>
<style lang="scss" scoped>
  .container{
    padding:0;
  }
  .row{
    margin-top:0.2rem;
    margin-bottom:0;
    background-color: #ffffff;
  }
  .row p{
    line-height:0.94rem;
    line-height:0.94rem;
    font-size:0.32rem;
    background-color: #ffffff;
  }
  .funcList p{
    margin-left:0.3rem;
    color:#403e3e;
    position: relative;
  }
  .textRight{
    float: right;
    margin-right:0.3rem;
    line-height:0.94rem;
  }
  #noneBuied{
    margin-top:55%;
  }
  #noneBuied dd{
    font-size:0.28rem;
    color:#cccccc;
    text-align: center;
    margin-top:0.3rem;
  }
  #noneBuied dl{
    overflow: hidden;
  }
  #noneBuied dt{
    width:33.3%;
    margin:0 auto;
  }
  dt img{
    width:100%;
  }
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
