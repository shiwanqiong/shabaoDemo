<template>
  <div class="lotteryBg">
    <div class="container">
      <div class="lottery-area">
        <ul class="disc" id="prizeDisc">
          <!--<li><span><img src="images/gift_0.png" /></span></li>
          <li><span><img src="images/gift_1.png" /></span></li>
          <li><span><img src="images/gift_2.png" /></span></li>
          <li><span><img src="images/gift_3.png" /></span></li>
          <li><span><img src="images/gift_4.png" /></span></li>
          <li><span><img src="images/gift_5.png" /></span></li>-->
          <img src="../../../../static/images3/panel.png" alt="">
        </ul>
        <ul class="lottery" style="left:35.15%">
          <li class="pointer" id="lotteryPointer"></li>
          <li class="btn-start"><a href="javascript:void(0)" class="ac_start"></a></li>
        </ul>
      </div>
      <div class="shadow">
        <img src="../../../../static/images3/lottery-shsdow.png" alt="">
      </div>
      <div class="lottery-count">
        <p>您有 <span id="total">3</span>次抽奖机会，还剩 <span id="rest">2</span>次</p>
      </div>
      <div class="lottery-btns">
        <input type="button" id="lottery-des" value="活动说明" onclick="queryDetail()">
        <input type="button" id="lottery-record" value="中奖纪录" onclick="queryAwardRec()">
      </div>
    </div>
    <div id="alertDec" style="display: none">
      <div class="alert" id="lottery-dec">
        <span class="close" onclick="closeAlert()"></span>
        <div class="">
          <img src="../../../../static/images3/lotteryDec.png" alt="">
        </div>
      </div>
    </div>
    <div id="alertRec" style="display: none">
      <div class="alert" id="lottery-rec" style="padding-top:4.4rem;">
        <span class="close" onclick="closeAlert()"></span>
        <div class="row">
          <p class="col-4"  id="awardPrize"></p>
          <p class="col-1" id="awardCount"></p>
          <p class="col-4" id="awardPhone"></p>
          <p class="col-3" id="awardDate"></p>
        </div>
      </div>
    </div>
    <div id="alertAward" style="display: none">
      <div class="alert" id="lottery-award">
        <span class="close" onclick="closeAlert()"></span>
        <h3 id="cash"></h3>
        <p id="awardTip" style="font-size:0.18rem;">恭喜您，抽中<span id="awardInfo"></span>。请查看“活动说明”中的兑奖方法领取微信红包！</p>
        <div class="alertBtn">
          <a class="col-6" href="##" onclick="closeAlert()">返回查看</a>
          <a style="border-left:1px solid #b8b8c4;font-weight: bold" class="col-6" href="##" onclick="shareLottery()">让同事来抽</a>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <div id="alertShare" style="display: none">
      <div class="alert" id="lottery-share">
        <div class="shareTip">
          <p>查社保，抽现金 <br>将好消息分享给同事</p>
        </div>
        <span class="guider">
            <img src="/static/images3/lotteryShare.png" alt="">
        </span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container{
    padding-top:3.08rem;
    padding-bottom:1.55rem;
  }
  .lotteryBg{
    background: url("/static/images3/lotteryBg.png") no-repeat;
    /*  background-size: cover; */
    background-size:100%;
    background-color:#ff5242;
  }
  .disc{
    width:75.5%;
    margin:0 auto;
  }
  img{
    width:100%;
  }
  .lottery-area{
    position:relative;
  }
  .lottery{
    width:2rem;
    height:2rem;
    position: absolute;
    left:35%;
    top:30%;
    z-index:11;
  }
  .lottery .pointer{
    width:100%;
    height:100%;
    background: url("../../../../static/images3/lotteryPointer.png") no-repeat;
    background-size: cover;
  }
  .lottery .btn-start{
    position: absolute;
    width:65%;
    height:65%;
    background:url("../../../../static/images3/lotteryGo.png") no-repeat;
    background-size: cover;
    top:17.5%;
    left:17.5%;
  }
  .lottery .btn-start.locked{
    background:url("../../../../static/images3/lotteryGone.png") no-repeat;
    background-size: cover;
  }
  .lottery-count,.lottery-btns{
    width:80%;
    margin:0 auto;
    margin-top:0.28rem;
  }
  .lottery-count p{
    width:100%;
    border:1px dotted #ffff00;
    color:#fffd0b;
    font-size: 0.28rem;
    text-align: center;
    line-height: 0.75rem;
    background-color: #ff6b63;
  }
  .lottery-btns{
    margin-top:0.4rem;
  }
  .lottery-btns input[type=button]{
    width:1.9rem;
    height:0.56rem;
    color:#ffffff;
    background-color: #e93e40;
    text-align: center;
    font-size: 0.24rem;
    border-radius: 0.12rem;
    border:1px solid #e93e40;
    box-shadow:0.02rem 0.03rem 0.1rem #b1392e;
  }
  #lottery-record{
    float: right;
  }
  .shadow{
    width: 70%;
    position: absolute;
    left: 15%;
    top: 73.5%;
    z-index: -2;
    opacity: 0.5;
  }
  #alertFram{
    width:5.6rem;
  }
  .alert{
    width:5.6rem;
    margin:0 auto;
    background-color: transparent;
    border:none;
  }
  .close{
    display: block;
    position: absolute;
    width:0.63rem;
    height:0.63rem;
    background: url("../../../../static/images3/lotteryClose.png") no-repeat;
    background-size: 100%;
    top:-7%;
    right:2%;
  }
  #lottery-award .close{
    top:0%;
    right:3%;
  }

  #lottery-award{
    background: url("../../../../static/images3/awardBg.png") no-repeat;
    background-size: 100%;
    padding-bottom:0.8rem ;
    padding-top: 1.46rem;
    border:none;
  }
  #lottery-award .alertBtn{
    margin-top: 1.75rem;
    border:none;
    padding:0 0.95rem;
  }
  #lottery-award .alertBtn a{
    width:1.76rem;
    height:0.58rem;
    border:1px solid #ffffff;
    background-color: #ffffff;
    text-align: center;
    font-size:0.24rem;
    color:#666666;
    border-radius:0.06rem;
    float: right;
    line-height: 0.58rem;
  }
  #lottery-award .alertBtn a:first-child{
    float: left;
  }
  #awardTip{
    margin-top:0.25rem;
    line-height: 0.35rem;
    font-size:0.12rem;
    text-indent: 0.1rem;
    color:#333333;
    padding:0 1rem;
  }
  #cash{
    text-align: center;
    font-size: 0.6rem;
    color:#d0483a;

  }
  #shield{
    opacity:0.5;
  }
  #lottery-rec{
    background: url("../../../../static/images3/recordBg.png") no-repeat;
    background-size: 100%;
    padding-bottom:0.8rem;
    padding-top: 3.5rem;
    border:none;
    height:7.7rem;
  }
  .row{
    margin:0;
    padding:0 0.3rem;
  }
  .row p{
    color:#ffffff;
    font-size: 0.18rem;
    line-height: 0.6rem;
    text-align: center;

  }
  .row p:first-child{
    padding-right:0.4rem;
  }
  .row p:nth-child(3){
    padding-left:0.4rem;
  }

  /* 分享弹框 */
  .shareTip p{
    color: #ffffff;
    font-size: 0.36rem;
    text-align: center;
    line-height: 0.55rem;
  }
  #lottery-share{
    height:7rem;
  }
  .guider{
    width:1.1rem;
    height:1.15rem;
    display: block;
    position: absolute;
    right:0.15rem;
    top:-20%;
  }

  /*大转盘*/
  img{
    width:100%;
  }
  .lottery-area .rule-link{position:absolute;right:.1rem;bottom:-0.1rem;font-size:.14rem;z-index:110;}
  .lottery-area .rule-link a{color:#ff0;}
  .marquee-lamp{position:absolute;z-index:100;width:84.84%;height:100%;top:0;left:7.58%;border-radius:50%;box-shadow:.04rem .05rem 0 rgba(0,0,0,.6);background:#ff0f5d;overflow:hidden;}
  .marquee-lamp .inner{width:100%;height:100%;border-radius:50%;
    /*background:url(../images/marquee_lamp.png) no-repeat center center;*/
    -webkit-background-size:104% 104%;background-size:104% 104%;
    -webkit-animation:marquee-lamp 1.5s linear 0s infinite;
    -moz-animation:marquee-lamp 1.5s linear 0s infinite;
    animation:marquee-lamp 1.5s linear 0s infinite;
  }
  .marquee-lamp .inner.fast{
    -webkit-animation:marquee-lamp .3s linear 0s infinite;
    -moz-animation:marquee-lamp .3s linear 0s infinite;
    animation:marquee-lamp .3s linear 0s infinite;
  }

  .lottery .btn-start a{display:block;width:80%;height:80%;margin:10% auto;border-radius:50%;
  }
  .lottery .btn-start a.locked{opacity:.7;-webkit-animation:none;-moz-animation:none;animation:none;}

  @-webkit-keyframes rotation{
    0% {-webkit-transform:rotate(0deg);}
    100% {-webkit-transform:rotate(360deg);}
  }
  @-moz-keyframes rotation{
    0% {-moz-transform:rotate(0deg);}
    100% {-moz-transform:rotate(360deg);}
  }
  @keyframes rotation{
    0% {transform:rotate(0deg);}
    100% {transform:rotate(360deg);}
  }
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
