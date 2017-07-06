<template>
  <div class="container">
    <div class="search">
      <input type="text" id="searchBox" placeholder="请输入姓名或身份证号">
      <span class="searBtn"></span>
    </div>
    <div id="noneBuied" style="display: none">
      <dl>
        <dt>
          <img src="resources/images3/nullInsurer.png" alt="">
        </dt>
        <dd>
          您还没有参保人，<a href="wcAddInsurerReq.html" class="textBlue">去添加</a>
        </dd>
      </dl>
    </div>
    <div class="mainContent" >
      <div id="wrapper">
        <div id="scroller">
          <div id="pullDown">
            <span class="pullDownLabel"></span>
          </div>
          <ul class="insurerList">
            <router-link  :to="{name:'socialAccount'}" v-for="item in items" tag="li">
              <div class="col-12 lightLine stopInfo">
                <div class="baseInfo">
                  <p class="col-4">{{item.realName}}</p>
                  <p class="col-8">{{item.certId}}</p>
                </div>
              </div>
              <span class="arrowRight"></span>
            </router-link>
          </ul>
          <p style="line-height:1rem;text-align:center;display:none;font-size:0.26rem;" id="null"></p>
          <div id="pullUp">
            <span class="pullUpIcon"></span><span class="pullUpLabel"></span>
          </div>
        </div>
      </div>
      <div id="nullMsg" style="display: none">
        <dl>
          <dt>
            <img src="../../../../static/images3/nullInsurer.png" alt="">
          </dt>
          <dd>
            无该参保人账号信息
          </dd>
        </dl>

      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../../assets/css/stopInsurer.scss";
  .search{
    background-color: #f5f6f8;
  }
  .search input{
    background-color: #ffffff;
    font-size: 0.24rem;
  }
  #nullMsg{
    margin-top:40%;
  }
  #noneBuied{
    margin-top:40%;
  }
  #nullMsg dd,#noneBuied dd{
    font-size:0.28rem;
    color:#cccccc;
    text-align: center;
    margin-top:0.3rem;
  }
  #nullMsg dl,#noneBuied dl{
    overflow: hidden;
  }
  #nullMsg dt,#noneBuied dt{
    width:33.3%;
    margin:0 auto;
  }
  dt img{
    width:100%;
  }
  .addInsurerBtn{
    width:90%;
    margin:0 auto;
    margin-top:3.65rem;
  }
  #scroller .insurerList{
    padding-left:0.3rem;
  }
  #wrapper{
    top:1.21rem;
    bottom:0;
  }
  #pullUp{
    background-color:#f5f6f8;
  }
</style>
<script>
    export default{
        data(){
            return {
              items:[
                {realName:'jone',certId:'123'},
                {realName:'marry',certId:'456'},
                {realName:'jack',certId:'789'},
                {realName:'tom',certId:'147'},
              ]
            }
        }
    }
</script>
