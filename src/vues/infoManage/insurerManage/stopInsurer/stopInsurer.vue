<template>
  <div class="container">
    <div id="null" style="display:none">
      <div id="nullMsg">
        <dl>
          <dt>
            <img src="/static/images3/nullInsuere.png" alt="">
          </dt>
          <dd>
            您还没有可以停保的参保人
          </dd>
        </dl>
      </div>
    </div>

    <div class="dataContainer">
      <div class="search">
        <input type="text" id="searchBox" placeholder="请输入参保人名字">
        <span class="searBtn"></span>
      </div>
      <h3 class="titleH">请选择您要停保的参保人</h3>
      <div id="wrapper">
        <div id="scroller">
          <div id="pullDown">
            <span class="pullDownLabel"></span>
          </div>
          <ul class="insurerList">

          </ul>
          <p style="line-height:1rem;text-align:center;display:none;font-size:0.26rem;" id="null1"></p>
          <div id="pullUp">
            <span class="pullUpIcon"></span><span class="pullUpLabel"></span>
          </div>
        </div>
      </div>
      <div class="stopBtn">
        <input style="width:100%" type="button" class="btn btn-blue btn-big" id="stopBtn" value="申请停保" onclick="stopInsurer()">
      </div>
    </div>
    <div class="md_mask"></div>
    <div class="md_panel">
      <div class="md_head lightLine">
        <h3>选择停保月份（可多选） <a href="##" class="textBlue" id="btn">确定</a></h3>
      </div>
      <div class="md_body">
        <ul class="dateList">
          <a href="##"><li><i>2016年5月</i><span></span></li></a>
          <a href="##"><li><i>2016年5月</i><span></span></li></a>
          <a href="##"><li><i>2016年5月</i><span></span></li></a>
        </ul>
      </div>
    </div>

    <form action="" method="post"  id ="submitReq"  style="display: none">
      <input style="display: none" type="text"  name="requestData"  id="requestData">
    </form>
  </div>
</template>
<style lang="scss" scoped>
  body{
    font-size: 0.26rem;
    color:#403e3e;
  }
  input[type=radio]{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width:0.76rem;
    height:0.76rem;
    border:1px solid #d0d0d0;
    border-radius:0.38rem;
    margin-top:0.25rem;
  }
  input[type=radio]:checked{
    border:none;
    background:url('/static/images3/checkedIcon.png') no-repeat;
    background-size: cover;
  }
  .titleH{
    padding-left:0.3rem;
    line-height: 0.75rem;
    background-color: #f5f6f8;
    font-size: 0.26rem;
    font-weight: normal;
  }
  .insurerList{
    padding-left:0.3rem;
    background-color: #ffffff;
  }
  .insurerList li{
    position: relative;
    overflow: hidden;

  }
  .baseInfo{
    font-size: 0.28rem;
    color:#403e3e;
  }
  .stopInfo{
    padding:0.35rem 0.8rem 0.4rem 0;
  }
  .stopType,.stopDate>div{
    margin-top:0.3rem;
    display: none;
  }
  .arrowRight{
    position: absolute;
    width:0.24rem;
    height:0.27rem;
    right:0.3rem;
    top:0.4rem;
    background:url('/static/images3/right.png') no-repeat;
    background-size:cover;
  }
  .stopType.choose,.stopDate>div.choose{
    display: block;
  }
  p.col-8,p.col-7{
    text-align: right;
  }
  select{
    border:none;
    font-size: 0.26rem;
  }
  .stopChoose{
    width:60%;
  }
  .stopBtn{
    position: fixed;
    bottom:0;
    width:100%;
  }

  #nullMsg{
    margin-top:40%;
  }
  #null dd{
    font-size:0.32rem;
    color:#cccccc;
    text-align: center;
    margin-top:0.6rem;
  }
  #null dl{
    overflow: hidden;
  }
  #null dt{
    width:33.3%;
    margin:0 auto;
  }
  dt img{
    width:100%;
  }


  .search{
    padding:0.3rem 0.6rem;
    background-color: #ffffff;
    position: relative;
  }
  .search input{
    height:0.62rem;
    line-height:0.62rem;
    border:1px solid #d6d6d6;
    padding-left:0.25rem;
    border-radius: 0.06rem;
    background-color: #f5f6f8;
    font-size: 0.22rem;
    width:100%;
  }
  .searBtn{
    width:0.4rem;
    height:0.44rem;
    display:block;
    position:absolute;
    background: url('/static/images3/search.png') no-repeat;
    background-size: 100%;
    right:0.9rem;
    top:0.43rem;
  }
  .md_mask{width: 100%;height: 100%;-moz-transition: opacity .5s linear 0s;-webkit-transition: opacity .5s linear 0s;-o-transition: opacity .5s linear 0s;-ms-transition: opacity .5s linear 0s;transition: opacity .5s linear 0s;position: absolute;top: 0;left: 0;display: block;visibility: hidden;background: #000;opacity: 0;z-index: 1000;}
  .md_mask.show{visibility: visible;opacity: 0.25;}
  .md_panel {moz-transition: -moz-transform .3s ease-in-out 0s;-ms-transition: -ms-transform .3s ease-in-out 0s;-webkit-transition: -webkit-transform .3s ease-in-out 0s;-o-transition: -o-transform .3s ease-in-out 0s;transition: transform .3s ease-in-out 0s;-ms-transform: translate3d(0,100%,0);-moz-transform: translate3d(0,100%,0);-webkit-transform: translate3d(0,100%,0);-o-transform: translate3d(0,100%,0);transform: translate3d(0,100%,0);position: fixed;bottom: 0;left: 0;width: 100%;height: auto;z-index: 1100;background-color: #F7F7F7;font-family: Tahoma,arial,verdana,sans-serif;-webkit-user-select : none;}
  .md_panel.show{-ms-transform: translate3d(0,0,0);-moz-transform: translate3d(0,0,0);-webkit-transform: translate3d(0,0,0);-o-transform: translate3d(0,0,0);transform: translate3d(0,0,0);}
  .md_head h3{
    line-height: 0.9rem;
    padding:0 0.55rem;
    background-color: #f0f0f1;
    font-size:0.3rem;
    font-weight: normal;
  }
  .dateList li{
    line-height: 0.7rem;
    text-align: center;
    border-bottom:1px solid #e6e6e6;
    font-size: 0.28rem;
    position: relative;
    color:#403e3e;
  }
  .dateList li:last-child{
    border:none;
  }
  .md_head h3 a{
    float:right;
  }
  .dateList li span{
    display: none;
    width:0.3rem;
    height:0.24rem;
    position: absolute;
    top:0.24rem;
    right:25%;
    background:url("/static/images3/ok.png") no-repeat;
    background-size: 100%;
  }
  .dateList li i{
    font-style: normal;
  }
  .dateList a.show span{
    display: block;
  }

</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
