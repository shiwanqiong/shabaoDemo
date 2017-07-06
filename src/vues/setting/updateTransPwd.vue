<template>
  <div class="container">
    <div id="tip" class="textRed"></div>
    <div class="row">
      <p class="lightLine">
        <label for="" class="col-4">手机号</label>
        <input id="mobileNo"  type="text" readonly class="col-8" value="13719108450">
      </p>
      <p class="relaRow">
        <input id="msgCode" v-model="msgCode" type="text" class="col-12 textBlue" style="text-align: left" placeholder="请输入验证码">
        <a id="getCode" onclick="sendMessage(4 ,'mobileNo','getCode')" href="##" class="linkBtn textBlue">获取验证码</a>
        <span class="verticalLine"></span>
      </p>
    </div>
    <div class="row">
      <p class="lightLine">
        <label for="" class="col-3" style="width:27%">新交易密码</label>
        <input id="newPwd" v-model="newTransPwd" type="password" class="col-9" style="width: 73%" placeholder="须6~12位包含数字字母">
      </p>
      <p class="lightLine">
        <label for="" class="col-4">再次输入</label>
        <input id="rePwd" type="password" v-model="reNewTransPwd" class="col-8" placeholder="请再次输入交易密码">
      </p>
    </div>

    <div class="btnRow">
      <input onclick="checkResetTranPwdCode()" type="button" class="btn btn-blue btn-big" value="确定">
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
  p input[type=password],p input[type=text]{
    border:0;
    background-color: #ffffff;
    text-align: right;
    padding-left:0;
    padding-right:0.3rem;
  }
  .btnRow{
    margin-top:3.57rem;
    padding:0 0.6rem;
  }
  p label{
    line-height:0.94rem;
    font-size:0.32rem;
    color:#403e3e;
  }
</style>
<script>
  export default{
    data(){
      return {
        msgCode:'',
        newTransPwd:'',
        reNewTransPwd:''
      }
    }
  }
</script>
