<template>
  <div class="container">
    <div class="row funcList">
      <router-link :to="{name:'updateMobile'}">
        <p class="lightLine">
          更换手机号
          <span class="textRight">13719108450</span>
          <span class="arrowRight"></span>
        </p>
      </router-link>
      <router-link :to="{name:'updateLoginPwd'}">
        <p class="lightLine">
          修改登录密码
          <span class="arrowRight"></span>
        </p>
      </router-link>
        <router-link :to="{name:'setTransPwd'}">
          <p>
            设置交易密码
            <span class="arrowRight"></span>
          </p>
        </router-link>
        <router-link :to="{name:'updateTransPwd'}">
          <p>
            修改交易密码
            <span class="arrowRight"></span>
          </p>
        </router-link>
    </div>
    <div class="row">
      <a href="wcUserLoginOut.html">
        <p class="textBlue" style="text-align: center">退出登录</p>
      </a>
    </div>
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
  .arrowRight{
    position: absolute;
    width:0.22rem;
    height:0.27rem;
    right:0.3rem;
    top:0.36rem;
    background:url('../../../static/images3/right.png') no-repeat;
    background-size:cover;
  }
  .textRight{
    float: right;
    margin-right:0.72rem;
    line-height:0.94rem;
  }
</style>
<script>
  export default{
    data(){
      return{
      }
    }
  }
</script>
