<template>
  <div class="container">
    <div class="funSummary">
      <!-- <p>截止<span id="_thisY"></span>年<span id="_thisM"></span>月，仕邦·沙包在线已为您服务缴纳过<span id="monthNum"></span>个月</p> -->
    </div>
    <p class="city">缴纳城市：<span style="font-size:0.28rem;" id="city">广州</span></p>
    <div class="month row">
      <div class="selectCtn yearCtn">
        <select name="year" id="year">
          <option value="2017">2017年</option>
          <option value="2016">2016年</option>
          <option value="2015">2015年</option>
          <option value="2014">2014年</option>
          <option value="2013">2013年</option>
          <option value="2012">2012年</option>
          <option value="2011">2011年</option>
          <option value="2010">2010年</option>
        </select>
        <span class="selectArr"></span>
      </div>
      <div class="selectCtn monthCtn">
        <span class="selectArr" style="width:0.18rem;height:0.12rem;top:0.25rem"></span>
        <select name="month" id="month">
          <option value="01">1月</option>
          <option value="02">2月</option>
          <option value="03">3月</option>
          <option value="04">4月</option>
          <option value="05">5月</option>
          <option value="06">6月</option>
          <option value="07">7月</option>
          <option value="08">8月</option>
          <option value="09">9月</option>
          <option value="10">10月</option>
          <option value="11">11月</option>
          <option value="12">12月</option>
        </select>
      </div>
      <div class="queryCtner"><input type="button" class="btn btn-white" onclick="queryAdition()" /></div>
    </div>
    <div class="row funcList">
      <p class="lightLine">
        个人月缴存额：<span id="perData">--</span>
      </p>
      <p class="lightLine" id="">
        单位月缴存额：<span id="busiData">--</span>
      </p>
    </div>
    <div class="ad">
      <p>
        <input type="checkbox" checked class="col-2">
        <label for="" class="col-10">免费领取商业保险一份（老用户福利，每人限领1份）</label>
      </p>
      <div class="clearfix"></div>
      <div class="btnCtner">
        <a href="##" class="btn btn-big btn-blue" onclick="getInsure()">马上领取</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container{
    padding-bottom:3.85rem;
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
  .funSummary{
    background-color:#fff8de;
    padding:0.15rem 0.3rem;
  }
  .funSummary p{
    color:#e2b300;
    line-height: 0.45rem;
    font-size:0.26rem;
  }
  .funcList p{
    margin-left:0.3rem;
    color:#403e3e;
    position: relative;
  }
  .ad{
    position:fixed;
    bottom:0;
    background: url('../../../../static/images3/adBg.png') no-repeat;
    background-size:cover;
    padding:0.55rem 0.6rem 0.75rem;
  }
  .btnCtner{
    margin-top:0.7rem;
  }
  label{
    line-height: 0.5rem;
    padding-left:0.15rem;
    color:#333333;
  }
  .month{
    padding:0.15rem 0.3rem;
  }
  .selectCtn{
    display: block;
    height:0.6rem;
    position: relative;
    float: left;
  }
  .yearCtn{
    width:1.7rem;
  }
  .monthCtn{
    width:0.95rem;
    margin-left:0.2rem;
  }
  .queryCtner{
    width:1.2rem;
    margin-left:0.2rem;
    position:relative;
    float:right;
  }
  .queryCtner  input[type=button]{
    height:0.5rem;
    background:url('../../../../static/images3/queryBtn.png') no-repeat;
    background-size:100%;
    width:100%;
    border:none;
    margin-top:0.08rem;
  }
  select{
    position: absolute;
    border-radius:0.03rem;
    border:1px solid #2660ad;
    padding-left:0.2rem;
    -webkit-appearance: none;
    appearance:none;
    color:#2660ad;
  }
  .selectArr{
    position: absolute;
    display: block;
    width:0.22rem;
    height:0.16rem;
    right:0.1rem;
    top:0.23rem;
    background: url('../../../../static/images3/selectArr.png') no-repeat;
    background-size: cover;
    z-index: 3;
  }
  #year{
    width:1.70rem;
    height:0.60rem;
    font-size: 0.3rem;
  }
  #month{
    width:0.95rem;
    height:0.45rem;
    font-size: 0.24rem;
    margin-top:0.08rem;
    padding-left:0.1rem;
  }
  .city{
    padding-top:0.2rem;
    padding-left:0.3rem;
  }
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
