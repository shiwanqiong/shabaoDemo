<template>
  <div class="container">
    <div id="tip" class="textRed"></div>
    <div id="step2" class="row">
      <p class="lightLine">
        <label for="" class="col-4">原密码</label>
        <input id="oldLoginPwd" v-model="loginPwd" type="password" maxlength="12" class="col-8" placeholder="请输入原密码">
      </p>
      <p class="lightLine">
        <label for="" class="col-4">新密码</label>
        <input id="oldPwd" type="password" v-model="newLoginPwd" maxlength="12" onfocus="cleanPwdTip()" class="col-8" placeholder="请输入新密码">
      </p>
      <p class="lightLine">
        <label for="" class="col-4">确认新密码</label>
        <input id="rePwd" type="password" v-model="reNewLoginPwd" maxlength="12" onfocus="cleanPwdTip()" class="col-8" placeholder="请再次输入新密码">
      </p>
    </div>
    <div class="btnRow">
      <input id="nextStep" onclick="oldLoginPassword()" type="button" class="btn btn-blue btn-big" value="确定">
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
  }
  p input[type=password]{
    border:0;
    background-color: #ffffff;
    text-align: right;
    padding-right:0.3rem;
    padding-left:0;
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
      return{
        loginPwd:'',
        newLoginPwd:'',
        reNewLoginPwd:''
      }
    }
  }
</script>
