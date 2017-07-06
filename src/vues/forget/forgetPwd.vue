<template>
  <div class="container">
    <form action="">
      <div id="tip" class="textRed"></div>
      <div class="row">
        <input id="mobileNo" type="text" class="col-12" placeholder="请输入手机号"  maxlength="11"  style="padding-left: 0.26rem;">
      </div>
      <div class="row relaRow">
        <input id="msgCode" type="text" class="col-12" maxlength="4" placeholder="请输入手机验证码">
        <a id="getCode" href="##" class="linkBtn textBlue"  onclick="sendMessage(2 ,'mobileNo','getCode')">获取验证码</a>
        <span class="verticalLine"></span>
      </div>
      <div class="row">
        <input id="newPwd" type="password" class="col-12" maxlength="12" placeholder="须6-12位包含数字字母">
      </div>
      <div class="row">
        <input id="rePwd" type="password" class="col-12" maxlength="12" placeholder="请再次输入新密码">
      </div>
    </form>
    <div class="row">
      <input type="button" class="btn btn-blue btn-big" value="确认修改密码"  onclick="setNewPwd()">
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/userReg.scss";
  form{
    margin-top:0.6rem;
    margin-bottom:1.96rem;
  }

</style>
