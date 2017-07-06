<template>
  <div class="container">
    <div id="list">
      <div>
        <p class="funSummary">有效期：2017-03至2017-04</p>
        <p class="bisiInfo">商保方案 :沙包118号<span class="fr">￥118</span></p></div>
    </div>
    <div class="ad">
      <p>
        <input type="checkbox" checked class="col-2">
        <label for="" class="col-10">免费领取商业保险一份（老用户福利，每人限领1份）</label>
      </p>
      <div class="clearfix"></div>
      <div class="btn">
        <a href="##" class="btn btn-big btn-blue" onclick="getInsure()">马上领取</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  p{
    padding:0 0.3rem;
  }
  .funSummary{
    background-color:#fff8de;
    line-height: 0.65rem;
    color:#e2b300;
    font-size: 0.28rem;
  }
  .bisiInfo{
    font-size: 0.32rem;
    font-weight: bold;
    color:#666666;
    line-height: 0.94rem;
    background-color: #ffffff;
  }
  .fr{
    float:right;
  }
  .ad{
    position: fixed;
    bottom:0;
    background: url("../../../../static/images3/adBg.png") no-repeat;
    background-size: cover;
    padding:0.55rem 0.6rem 0.75rem;
  }
  .btn{
    margin-top:0.7rem;
  }
  #list{
    padding-bottom:3.86rem;
  }
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
