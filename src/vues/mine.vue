<template>
  <transition name="slide-fade" mode="out-in" appear>
    <section>
      <nav>
        <router-link :to="{name:navLinkName}">
          <div style="overflow:hidden;">
            <div class="col-3">
              <img src="static/images3/userPhoto.png" alt="">
            </div>
            <div class="col-9" style="line-height: 1.4rem;padding-left:0.3rem;" v-if="loginState==false">
              <router-link :to="{name:'login'}" class="navA">点击登录/</router-link>
              <!--<a href="wcUserLogin.html" id=""  >/</a>-->
              <router-link :to="{name:'register'}" class="navA">注册</router-link>
            </div>
            <div class="col-9" style="padding-left:0.3rem;padding-top:2%;width:70%;position:relative;" v-else>
              <!--<p class="navA" style="line-height:0.46rem; ">${userInfo.enterpriseName }</p>
              <p class="navA" style="line-height:0.46rem; ">${userInfo.mobileNo }</p>-->
              <p class="navA" style="line-height:0.46rem; ">{{userName }}</p>

              <p class="info-inviCode">邀请码：{{recommendCode}}</p>
            </div>
          </div>
        </router-link>
        <span class="authFlag">{{infoFlag}}</span>
        <div class="msgSet">
          <router-link :to="{name:'messageList'}" class="msg">
          </router-link>
          <router-link :to="{name:'settingIndex'}" class="set">
          </router-link>
        </div>
        <span class="navArrow"></span>
      </nav>
      <div class="row horizonNav">
        <ul>
          <li class="col-4" style="width:37.3%;">
            <!--v-if="userInfo.user_type=='1'"-->
            <router-link :to="{name:'insurerList'}" style="padding-left:0.4rem;" ><span class="navSpan" id="insurerInfo" style="left:0.15rem"></span> 参保信息</router-link>
            <!--<router-link :to="{name:'personalInfo'}" v-else  style="padding-left:0.4rem;"><span class="navSpan" style="left:0.15rem"></span> 参保信息</router-link>-->
            <!--  <a href="wcQueryInsurer.html" style="padding-left:0.4rem;"><span class="navSpan" id="insurerInfo" style="left:0.05rem"></span> 参保人管理</a>-->
          </li>
          <li class="col-3">
            <span class="navSpan" id="order"></span>
            <router-link :to="{name:'orderList'}" style="padding-left:0.35rem;">订单</router-link>
          </li>
          <li class="col-5" style="width:37.6%;">
            <span class="navSpan" id="wallet"></span>
            <router-link :to="{name:'walletIndex'}" style="padding-left:0.57rem;">钱包/优惠券</router-link>
          </li>
        </ul>
      </div>
      <div class="clearfix"></div>
      <div class="row" v-for="list in lists[userIndex]">
        <ul>
          <router-link :to="{name:item.path}" tag="li" v-for="item in list">
            <div class="icon"><img :src="item.imgSrc" alt=""/></div>
            <p>{{item.message}}</p>
          </router-link>
        </ul>
      </div>
      <v-foot></v-foot>
      <empty></empty>
      <sb-alert title="成功提示的文案" description="这是成功的提示文案" type="success"></sb-alert>
    </section>
  </transition>

</template>
<script>
  import empty from '../components/empty.vue'
  import vFoot from '../components/footer.vue'
  import {mapState,mapActions} from 'vuex'
  /*import alertEventBind from '../utils/eventBind/alertEventBind'*/
  export default{
    data(){
      return{
          lists:[
            [
              [
                {imgSrc:'static/images3/stopInsurer.png',message:'停保服务',path:'stopInsurerIndex'},
                {imgSrc:'static/images3/supply.png',message:'补缴服务',path:'chooseSuppInsurer'},
              ],
              [
                {imgSrc:'static/images3/outlinePayInfo.png',message:'线下汇款信息录入',path:'outlinePayImgInfo'},
                {imgSrc:'static/images3/claim.png',message:'理赔申请',path:''},
                {imgSrc:'static/images3/contract.png',message:'我的合同',path:'contract'},
                {imgSrc:'static/images3/aboutSocail.png',message:'了解社保',path:'aboutSocial'},
              ],
              [
                {imgSrc:'static/images3/special.png',message:'专项服务',path:'moreService'},
              ],
              [
                {imgSrc:'static/images3/userCenterSear.png',message:'查询',path:''},
                {imgSrc:'static/images3/abputShabao.png',message:'关于',path:'aboutSB'}
              ]
            ],
            [
              [
                {imgSrc:'static/images3/contractIcon.png',message:'劳动关系合同',path:''},
                {imgSrc:'static/images3/stopInsurer.png',message:'停保服务',path:'stopPerInsurer'},
                {imgSrc:'static/images3/supply.png',message:'补缴服务',path:'chooseSuppInsurer'},
              ],
              [
                {imgSrc:'static/images3/outlinePayInfo.png',message:'线下汇款信息录入',path:'outlinePayImgInfo'},
                {imgSrc:'static/images3/claim.png',message:'理赔申请',path:''},
                {imgSrc:'static/images3/contract.png',message:'我的合同',path:'contract'},
                {imgSrc:'static/images3/aboutSocail.png',message:'了解社保',path:'aboutSocial'},
              ],
              [
                {imgSrc:'static/images3/special.png',message:'专项服务',path:'moreService'},
                {imgSrc:'static/images3/activityPromote.png',message:'推广中心',path:''}
              ],
              [
                {imgSrc:'static/images3/userCenterSear.png',message:'查询',path:''},
                {imgSrc:'static/images3/abputShabao.png',message:'关于',path:'aboutSB'}
              ]
            ]
          ],
        userName:'',
        recommendCode:'',
        infoFlag:'',
        userType:'',
        navLink:'',
        authFlag:'',
        creditErrorNum:0
      }
    },
    mounted(){
      /*alertEventBind(this.$refs.alert);
      this.alert();*/
      this.$sbalert();
    },
    components:{
      vFoot,
      empty
    },
    computed:{
      ...mapState({
        loginState:'login',
        userInfo:'userInfo',
        authErrTime:'authErrTime'
      }),
      userIndex(){
        if(!this.userType||this.userType==''){
          return 1;
        }
        else{
          return parseInt(this.userType)-1;
        }
      },
      navLinkName(){
        if(this.authFlag==''){
          return 'login'
        }
        else if(this.authFlag=='1'){
          if(this.creditErrorNum<3){
            return 'realNameAuth'
          }
          else{
            return 'manuaRealNameAuth'
          }
        }
        else if(this.authFlag=='2'){
          if(this.userType=='1'){
            return 'companyInfo'
          }
          else if(this.userType=='2'){
            return 'personalInfo'
          }
        }
      }

    },
    watch:{
      userInfo:function(val){
        this.getUserInfo=val||{};
        var enterPriseFlag=(this.getUserInfo&&this.getUserInfo.user_type)=='1';
        this.userName=enterPriseFlag?this.getUserInfo.enterprise_name:this.getUserInfo.mobile_no||'';
        this.recommendCode=this.getUserInfo&&this.getUserInfo.recommend_code||'无';
        this.infoFlag=(this.getUserInfo&&this.getUserInfo.info_flag)=='2'?'已认证':'未认证';
        this.userType=this.getUserInfo&&this.getUserInfo.user_type||'';
        this.authFlag=this.getUserInfo&&this.getUserInfo.auth_flag||'';
        this.creditErrorNum=this.getUserInfo&&this.getUserInfo.credit_error_num||0;
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/shangList.scss";
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(0, 0.25, 0.1, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave {
    transform: translateX(0.5rem);
    opacity: 0;
  }
  *{
    margin:0;
  }
  nav,section{
    margin:0;
  }
  nav{
    position: relative;
    height:2.6rem;
    background-image:url("/static/images3/userCenterBg.png");
    background-size:115%;
    background-repeat: no-repeat;
    padding:0.7rem 0.3rem;
    background-color: #ffffff;
  }
  .horizonNav{
    padding:0.3rem 0.37rem 0.35rem 0.37rem;
    background: #ffffff;
    height:1.1rem;
  }
  .horizonNav li a{
    display: block;
    width:100%;
    font-size:0.26rem;
    color:#403e3e;
    height:0.47rem;
    line-height: 0.47rem;
    border-right:1px solid #dbdbdb;
    text-align: center;
  }
  .horizonNav li:last-child a{
    border:none;
  }
  .login{
    position: absolute;
    left:40%;
    top:73%;
    text-align: center;
    color:#fff;
  }
  .login a{
    color:#fff;
    letter-spacing: 1px;
  }
  section{
    padding-bottom:0.98rem;
  }
  .row{
    margin-bottom:0.2rem;
    background: #fff;
  }
  li{
    position: relative;
  }
  li p{
    line-height: 0.94rem;
    margin-left:0.3rem;
    padding-left:0.62rem;
    padding-right:0.2rem;
    background:url("/static/images3/right.png") no-repeat;
    background-position:right center;
    background-size:5%;
    background-origin: content-box;
    border-bottom: 1px solid #dbdbdb;
  }
  li:last-child p{
    border:none;
  }
  li a{
    color:#545252;
    font-size:0.32rem;
  }
  img{
    width:100%;
  }
  .icon{
    position: absolute;
    left:0.36rem;
    top:32%;
    width:0.32rem;
    height: 0.32rem;
  }
  .navSpan{
    width:0.38rem;
    height:0.38rem;
    display: block;
    position: absolute;
    left:0.15rem;
    top:0.05rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
  }
  #insurerInfo{
    left:0.05rem;
    background-image: url('/static/images3/insurerInfo.png');
  }
  #order{
    background-image: url('/static/images3/order.png');
  }
  #wallet{
    left:0.17rem;
    background-image: url('/static/images3/wallet.png');
  }
  .navA{
    color:#ffffff;
    font-size: 0.30rem;
    letter-spacing: 0.02rem;
  }
  .info-inviCode{
    color:#a5cafa;
    font-size:0.26rem;
    position:absolute;
    top:1rem;
    left:0.3rem;
  }
  .authFlag{
    display: block;
    position: absolute;
    width:1.2rem;
    height:0.4rem;
    line-height:0.39rem;
    text-align: center;
    border-radius: 0.2rem;
    background-color: #1e477e;
    color:#fff;
    font-size:0.22rem;
    left:0.44rem;
    bottom:0.35rem;
  }
  section li:hover{
    background-color: #e6e6e6;
  }
  i{
    margin-left:0.4rem;
  }
  .msgSet{
    position: absolute;
    right:0.3rem;
    top:0.3rem;
  }
  .msgSet a{
    display: inline-block;
    width:0.4rem;
    height:0.4rem;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  .msg{
    height:0.38rem;
    margin-right:0.5rem;
    background-image: url('/static/images3/message.png');
  }
  .set{
    background-image: url('/static/images3/set.png');
  }
  .navArrow{
    display:block;
    position:absolute;
    width:0.3rem;
    height:0.27rem;
    background:url('/static/images3/navArrow.png') no-repeat;
    background-size:cover;
    right:0.3rem;
    top:50%;
  }
</style>
