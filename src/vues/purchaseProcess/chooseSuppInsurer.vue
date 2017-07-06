<template>
  <div class="container">
    <h3 class="titleH">请选择您要补缴的参保人</h3>
    <ul class="insurerList">

      <li>
        <div class="col-2">
          <input type="checkbox" name="insurer" id="${map.INSURER_ID }"
                 onChange="addInsurerList('${map.INSURER_ID}','${map.REAL_NAME}','${map.CERT_ID}')">
          <input type="hidden" id="${map.INSURER_ID}-area" value="${map.AREA_ID}"/>
          <input type="hidden" id="${map.INSURER_ID}-fund-area" value="${map.FUND_AREA_ID}"/>
          <input type="hidden" id="${map.INSURER_ID}-mobile" value="${map.MOBILE_NO}"/>
        </div>
        <div class="col-10 lightLine stopInfo">
          <div class="baseInfo">
            <p class="col-4">${map.REAL_NAME }</p>
            <p class="col-8">${map.CERT_ID }</p>
          </div>
          <div class="clearfix"></div>
          <div class="detailInfo" style="display:none">
            <div class="stopType">
              <p class="col-4">补缴类型</p>
              <p class="col-8">
                <select id="${map.INSURER_ID}s" name="" class="stopChoose"
                        onChange="supplementType('${map.INSURER_ID}s')">
                  <option value="0">请选择</option>
                 <!-- <c:if test="${map.supply_type== '1'}">
                    <option value="1">社保</option>
                  </c:if>
                  <c:if test="${map.supply_type== '2'}">
                    <option value="2">公积金</option>
                  </c:if>-->
                  <option value="1">社保</option>
                  <option value="2">公积金</option>
                  <option value="3">社保+公积金</option>
                </select>
              </p>
            </div>
            <div class="clearfix"></div>
            <div class="stopDate" style="display:none">
              <div class="socialDate" style="display:none">
                <p class="col-5">社保补缴时间</p>
                <p class="col-7 socialDateP">
                  <select id="${map.INSURER_ID}-select"></select>~<span id="month1" class="textBlue">${fn:substring(map.end_month,0,4)}-${fn:substring(map.end_month,4,6)}</span>
                </p>
              </div>
              <div class="clearfix"></div>
              <div class="fundDate" style="display:none">
                <p class="col-5">公积金补缴时间</p>
                <p class="col-7 fundDateP">
                  <select id="${map.INSURER_ID}-fund-select"></select>~<span id="month2" class="textBlue">${fn:substring(map.fund_end_month,0,4)}-${fn:substring(map.fund_end_month,4,6)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="col-2">
          <input type="checkbox" name="insurer">
        </div>
        <div class="col-10 lightLine stopInfo">
          <div class="baseInfo">
            <p class="col-4">欧阳贝贝</p>
            <p class="col-8">410381199104214022</p>
          </div>
          <div class="clearfix"></div>
          <div class="detailInfo">
            <div class="stopType">
              <p class="col-4">补缴类型</p>
              <p class="col-8">
                <select name="" class="stopChoose">
                  <option value="0">请选择</option>
                  <option value="1">社保</option>
                  <option value="2">公积金</option>
                  <option value="3">社保+公积金</option>
                </select>
              </p>
            </div>
            <div class="clearfix"></div>
            <div class="stopDate">
              <div class="socialDate">
                <p class="col-5">社保补缴时间</p>
                <p class="col-7 textBlue socialDateP">
                  2016年6月
                </p>
              </div>
              <div class="clearfix"></div>
              <div class="fundDate">
                <p class="col-5">公积金补缴时间</p>
                <p class="col-7 textBlue fundDateP">
                  2016年6月
                </p>
              </div>
            </div>
          </div>
        </div>
        <span class="arrowRight"></span>
      </li>
    </ul>
    <div class="stopBtn">
      <router-link :to="{name:'confirmOrder'}" class="btn btn-blue btn-big">申请补缴</router-link>
    </div>
    <div class="display:none;">
      <form id="submitOrder" action="wcSubmitSocialSupply.html" method="post">
        <input id="requestData" name="requestData" type="hidden"/>
      </form>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  body{
    font-size: 0.26rem;
    color:#403e3e;
  }
  input[type=checkbox]{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width:0.66rem;
    height:0.66rem;
    border:1px solid #d0d0d0;
    border-radius:0.38rem;
    margin-top:0.25rem;
  }
  input[type=checkbox]:checked{
    border:none;
    background:url('/static/images3/checkedIcon.png') no-repeat;
    background-size: cover;
  }
  .titleH{
    padding-left:0.3rem;
    line-height: 0.75rem;
    background-color: #f5f6f8;
    font-size: 0.26rem;
    font-weight: normal;
  }
  .insurerList{
    padding-left:0.3rem;
    background-color: #ffffff;
    padding-bottom:0.9rem;
  }
  .insurerList li{
    position: relative;
    overflow: hidden;
    background-image: url("/static/images3/right.png");
    background-repeat: no-repeat;
    background-position: 98% 0.42rem;
    background-size: 0.24rem 0.27rem;
  }
  .baseInfo{
    font-size: 0.28rem;
  }
  .stopInfo{
    padding:0.35rem 0.5rem 0.4rem 0;
  }
  .stopType,.stopDate>div{
    margin-top:0.3rem;
  }
  .stopType.choose,.stopDate>div.choose{
    display: block;
  }
  p.col-8,p.col-7{
    text-align: right;
  }
  select{
    border:none;
    font-size: 0.26rem;
  }
  .stopBtn{
    position: fixed;
    bottom:0;
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
