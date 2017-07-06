<template>
  <div class="container">
    <div id="tip" class="textRed"></div>
    <div class="row">
      <p class="lightLine">
        <input id="newPhone" type="text" class="col-12" v-model="newMobile" placeholder="请输入新的手机号码"  maxlength="11">
      </p>
      <p class="relaRow">
        <input id="msgCode" type="text" class="col-12 textBlue" v-model="mobileVeri" placeholder="请输入验证码"  maxlength='4'>
        <a id="getCode" href="##" class="linkBtn textBlue" onclick="sendMessage(3 ,'newPhone','getCode')">获取验证码</a>
        <span class="verticalLine"></span>
      </p>
    </div>
    <div class="btnRow">
      <input type="button" class="btn btn-blue btn-big" value="确定" id="confirm" onclick="checkNewPhoneCode()">
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .row{
    background-color: #fff;
    margin-top:0.2rem;
  }
  .relaRow{
    position:relative;
  }
  .linkBtn{
    position: absolute;
    right:0;
    padding-right:0.34rem;
    top:0;
    line-height:0.94rem;
    font-size:0.26rem;
  }
  .verticalLine{
    width:0;
    border:0.01rem solid #dbdbdb;
    height:0.45rem;
    position:absolute;
    right:1.90rem;
    top:0.24rem;
  }
  .row p{
    overflow: hidden;
    margin-left:0.3rem;
  }
  p input[type=text]{
    border:0;
    background-color: #ffffff;
  }
  .btnRow{
    margin-top:3.57rem;
    padding:0 0.6rem;
  }
</style>
<script>
  export default{
    data(){
      return {
        newMobile:'',
        mobileVeri:''
      }
    }
  }
</script>
