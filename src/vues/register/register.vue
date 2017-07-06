<template>
  <div>
    <div class="row">
      <ul id="tab" class="tab">
        <li v-for="(tab,$index) in tabs" class="col-6" :class="{active:activeIndex==$index}" @click="changeIndex($index)">
          {{tab}}
        </li>
      </ul>
    </div>
    <div class="container">
      <div id="tip" class="textRed"></div>
      <form class="subs" action="" id="regForm">
          <div class="row" v-show="entReg">
            <input id="entName" type="text" v-model="entName" class="col-12" placeholder="请输入企业名称">
          </div>
          <div class="row">
            <input id="userMobile" type="text" v-model="userMobile" class="col-12" maxlength="11" placeholder="请输入注册手机号">
          </div>
          <div class="row relaRow">
            <input id="mobileVeri" type="text" v-model="mobileVeri" class="col-12" maxlength="4" placeholder="请输入手机验证码">
            <span class="verticalLine"></span>
            <a id="perGetCode" href="##" class="linkBtn textBlue"  onclick="sendMessage(1,'perPhone','perGetCode')">获取验证码</a>
          </div>
          <div class="row">
            <input id="perPassword" type="password" v-model="userPwd" class="col-12" maxlength="12" placeholder="请设置6-12位密码">
          </div>
          <div class="row">
            <input id="rmdCode" type="text" class="col-12" v-model="rmdCode" maxlength="4" placeholder="请输入推荐码（选填）">
          </div>
          <div class="row">
            <p class="proto">
              <input type="checkbox" id="s11" v-model="checked">
              <label for="">
                我已经阅读并同意沙包在线 <router-link :to="{name:'serviceProtocol'}" href="agreementDetail.html" class="textBlue">《服务协议》</router-link>
              </label>
            </p>
          </div>
      </form>
      <div class="row">
        <input type="button" id="regBtn" class="btn btn-blue btn-big" onclick="register(1)" value="立即注册">
      </div>
      <div class="row">
        <router-link :to="{name:'login'}" class="btn btn-white btn-big"><span style="color:#595757;">已有账号，</span>去登录</router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/userReg.scss";
</style>
<script>
  export default{
    data(){
      return{
        activeIndex:1,
        tabs:[
          '个人用户',
          '企业用户'
        ],
        entName:'',
        userMobile:'',
        userPwd:'',
        rmdCode:'',
        mobileVeri:'',
        entReg:true,
        checked:false
      }
    },
    methods:{
      changeIndex(item){
        this.activeIndex=item;
        this.entName='';
        this.userMobile='';
        this.userPwd='';
        this.rmdCode='';
        this.mobileVeri='';
        this.checked=false;
        if(item==0){
          this.entReg=false;
        }
        else{
          this.entReg=true;
        }
      }
    }


  }
</script>
