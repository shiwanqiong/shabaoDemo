<template>
  <div>
    <p class="headTip">实名认证之后不可修改</p>
    <!--<c:if test="${userInfo.userType eq '1' }">-->
      <div v-if="userType=='1'">
        <div class="list">
          <div id="tip" class="textRed"></div>
          <ul>
            <li class="clearfix">企业名称 <input type="text" class="fr enterPriseName" id="enterPriseName" name="enterPriseName" maxlength='30' v-model="name" /></li>
            <li class="clearfix">法人姓名<input id="legalName" name="legalName"  type="text" class="fr" v-model="legalName"  maxlength='50' placeholder="请输入法人姓名" /></li>
            <li class="clearfix no-border">营业执照注册号<input id="busi_licence" name="busi_licence"  v-model="busiLicense" type="text" class="fr col-6" maxlength='20' placeholder="请输入营业执照注册号" /></li>
          </ul>
        </div>
        <button  id="companyAuth_sumbit" class="btn btn-big btn-blue next"  @click="companyRealName">下一步</button>
      </div>
          <!--</c:if>-->
    <!--<c:if test="${userInfo.userType eq '2' }">-->
      <div v-else>
        <div class="list">
          <div id="tip1" class="textRed"></div>
          <ul>
            <li class="clearfix">姓名 <input id="UserlegalName" name="UserlegalName" v-model="realName"  type="text" class="fr" maxlength='10' placeholder="请输入您的姓名"/></li>
            <li class="clearfix no-border">身份证号<input id="UserlegalId" name="UserlegalId" v-model="IdCode"  type="text" class="fr" maxlength='18' placeholder="请输入您的身份证号"/></li>
          </ul>
        </div>
        <button  id="personAuth_sumbit" class="btn btn-big btn-blue next" style="margin-bottom:10px;" value="确&nbsp;&nbsp;定" @click="userRealName">下一步</button>
      </div>
          <!--</c:if>-->
    <empty></empty>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../../assets/css/companyDataInfo.scss";
</style>
<script>
    import empty from '../../../components/empty.vue'
    import {mapState,mapMutations} from 'vuex'
    import {verifiedInfo} from '../../../utils/fetch'
    import {setStore,getStore} from '../../../utils/utils'
    import * as validate from '../../../utils/validatea'
    export default{
        data(){
            return {
              legalName:'',
              IdCode:'',
              realName:'',
              busiLicense:''
            }
        },
      components:{
        empty
      },
      computed:{
        ...mapState(['userInfo']),
        userType:function(){
          return this.userInfo.user_type;
        },
        name:function()
        {
          return this.userInfo.enterprise_name;
        }
      },
      methods:{
        ...mapMutations(['RECORD_USERDETAILINFO']),
        async companyRealName(){
          if(!validate.checkLName(this.legalName)){
            alert('请输入正确的法人姓名');
            return;
          }
          if(!validate.checkBusiLicense(this.busiLicense)){
            alert('请输入正确的营业执照注册号');
            return;
          }
          var that=this;
          let authInfo=verifiedInfo(this.legalName,this.busiLicense);
          authInfo.then(function(data){
            console.log(data);
            if(!data.user_id){
                if(!getStore('authErrTime')){
                  setStore('authErrTime',1);
                }
                else{
                  var authErrTime=getStore('authErrTime');
                  if(authErrTime>=3){
                    that.$router.push('manuaRealNameAuth');
                  }
                  authErrTime++;
                  setStore('authErrTime',authErrTime);
                }
            }
            else{
              that.RECORD_USERDETAILINFO(data);
              that.$router.push('companyInfo');
            }
          })

        },
        async userRealName(){
          if(!validate.checkLName(this.realName)||this.realName==''){
            alert('请输入正确的名字');
            return;
          }
          if(!validate.validateIdCardByReal(this.IdCode)||this.IdCode==''){
            alert('请输入正确的身份证号码');
            return;
          }
          var that=this;
          let authInfo= verifiedInfo(this.realName,this.IdCode);
          authInfo.then(function(data){
            console.log(data);
            if(!data.user_id){
              alert('实名认证失败！！！');
            }
            else{
              that.RECORD_USERDETAILINFO(data);
              that.$router.push('personalInfo');
            }
          })
        }

      }
    }
</script>
