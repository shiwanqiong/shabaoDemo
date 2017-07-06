<template>
  <div class="container">
    <nav>
      <div style="overflow:hidden;">
        <div class="col-3" style="width:22%;">
          <img src="../../../../static/images3/userPhoto.png" alt="">
        </div>
        <div class="col-9" style="padding-left:0.3rem;padding-top:2%;position:relative">
          <p class="navA">姓名：${name }</p>
          <p class="navA">身份证：${certId }</p>
        </div>
      </div>
      <div class="lotteryEntr">
        <router-link :to="{name:'lottery'}"><img src="../../../../static/images3/lotteryEntrance.png"/></router-link>
      </div>
    </nav>
    <div class="row funcList">
      <router-link :to="{name:item.path}" v-for="item in items">
        <p class="lightLine">
          {{item.title}}
          <span class="arrowRight"></span>
        </p>
      </router-link>
    </div>
    <div class="ad">
      <p>
        <input type="checkbox" checked class="col-2">
        <label for="" class="col-10">免费领取商业保险一份（老用户福利，每人限领1份）</label>
      </p>
      <div class="clearfix"></div>
      <div class="btn">
        <a href="##" type="button" class="btn btn-big btn-blue" onclick="getInsure()">马上领取</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  nav{
    position: relative;
    height:2.6rem;
    background-image:url("../../../../static/images3/userCenterBg.png");
    background-size:115%;
    background-repeat: no-repeat;
    padding:0.7rem 0 0.7rem 0.3rem;
    background-color: #ffffff;
  }
  img{
    width:100%;
  }
  .navA{
    color:#ffffff;
    font-size: 0.30rem;
    letter-spacing: 0.02rem;
    line-height: 0.54rem;
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
    background:url('../../../../static/images3/right.png') no-repeat;
    background-size:cover;
  }
  .ad{
    margin-top:1.4rem;
    background: url('../../../../static/images3/adBg.png') no-repeat;
    background-size:cover;
    padding:0.55rem 0.6rem 0.75rem;
  }
  .btn{
    margin-top:0.7rem;
  }
  label{
    line-height: 0.5rem;
    padding-left:0.15rem;
    color:#333333;
  }
  .lotteryEntr{
    width:1.47rem;
    height:2.04rem;
    position:absolute;
    right:0.6rem;
    top:0.8rem;
    z-index:2;
  }
</style>
<script>
    export default{
        data(){
            return {
              items:[
                {title:'社保查询',path:'querySocial'},
                {title:'公积金查询',path:'queryFund'},
                {title:'工资查询',path:'querySalary'},
                {title:'商保查询',path:'queryBusiness'},
              ]
            }
        }
    }
</script>
