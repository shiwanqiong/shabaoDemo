<template>
  <div class="container">
    <form action="" id="logForm">
      <input  type="hidden"  id="backUrl"  value="${backUrl}"/>
      <div id="tip" class="textRed"></div>
      <div class="row relaRow">
        <input type="text" class="col-12"  id="mobileNo" v-model="userMobile"  maxlength="11" placeholder="请输入登录账号"> <span class="logIcon" id="phone"></span>
      </div>
      <div class="row relaRow">
        <input type="password" class="col-12" id="password" v-model="userPwd"  placeholder="请输入密码" maxlength="12">
        <router-link :to="{name:'forgetPwd'}" class="textBlue linkBtn">忘记密码</router-link> <span class="logIcon" id="lock"></span>
      </div>
      <div class="row clearfix" id="validate-code" v-show="imgCodeShow">
        <input type="text" class="col-8" v-model="imgVeri" placeholder="请输入图形验证码">
        <!--<a href="##" class="col-3"><img src="" alt=""></a> -->
        <img id="verifyCode" :src="imgCodeSrc" @click="changeImgCode" style="width:90%;height:0.94rem;float:right;"/>
      </div>
    </form>
    <div class="clearfix"></div>
    <div class="row btns">
      <input type="button" value="立即登录" class="btn btn-blue btn-big" @click="login">
    </div>
    <div class="row">
      <router-link :to="{name:'register'}" class="btn btn-white btn-big">新用户注册</router-link>
    </div>
    <empty></empty>
  </div>
</template>
<style lang="scss" scoped>
  @import '../../assets/css/userReg.scss';
</style>
<script>
  import empty from '../../components/empty.vue'
  import vueResource from 'vue-resource'
  import {mapState,mapMutations} from 'vuex'
  import {login} from '../../utils/fetch'
  import {setStore} from '../../utils/utils'
  import {checkPhoneNO,checkPwd} from '../../utils/validatea'
  export default{
    data(){
      return {
        userMobile:'',
        userPwd:'',
        imgVeri:'',
        imgCodeSrc:'',//图形验证码
        imgCodeShow:false,
      }
    },
    components:{
      empty
    },

    methods:{
      ...mapMutations(['RECORD_USERINFO']),
      async login(){
        if(!checkPhoneNO(this.userMobile)){
          alert('手机号码错误');
          return;
        }
        if(!checkPwd(this.userPwd)){
          alert('密码格式错误');
          return;
        }
        var that=this;
        var loginInfo=login(this.userMobile,this.userPwd,this.imgVeri);
        loginInfo.then(function(data){
          console.log(data);
          if(!data.user_id){
            if(!window.sessionStorage.getItem('logErrTime')){
              window.sessionStorage.setItem('logErrTime',1);
            }
            else{
              var logErrTime=window.sessionStorage.getItem('logErrTime');
              if(logErrTime>=3){
                that.imgCodeShow=true;
              }
              logErrTime++;
              window.sessionStorage.setItem('logErrTime',logErrTime);
            }
          }
          else{
            that.RECORD_USERINFO(data);
            /*setStore('userInfo',data);*/
            setStore('login',true);
            that.$router.go(-1);
          }
        })
      },
      changeImgCode(){
        var timenow = new Date().getTime();
        this.imgCodeSrc= "veriCode.html?d=" + timenow;
      },

    }
  }
</script>
