<template>
  <div class="container">
    <div class="banner">
      <img src="../../../../static/images3/activityBanner1.png" alt="">
      <div class="bannerText">
        <p>平台用户的福利！双重豪礼正在来袭！新用户首月“免费”参保！<br>优惠券任意发！不设上限！只要你在本平台注册并登录，即可参与本次 <br>活动！还等什么，叫上你的小伙伴，赶紧点击领取吧！</p>
      </div>
    </div>
    <div class="content">
      <img src="../../../../static/images3/activityDetail1.png" alt="">
      <div class="firstText">
        <p>所有在本平台第一次购买社保套餐的新用户可获得一张<br><span>免一个月平台代理费的优惠券</span>
        </p>
      </div>
      <div class="secondText">
        <p>邀请人邀请其他人在本平台注册并购买社保（被邀请人通过推广链接 <br>注册或者注册时输入邀请人的个人推荐码），邀请人即可获得 <span>3张免 <br>一个月平台代理费的优惠券</span>，每增加一人，即增加3张优惠券,<br><span>不设上限</span>，优惠券有效时间为一年。</p>
      </div>
      <div class="btn">
        <input id="getBtn" type="button" value="报名请参考沙包在线官网">
      </div>
    </div>

  </div>
</template>
<script></script>
<style lang="scss" scoped>
  body{
    background-color: #ffffff;
  }
  .banner{
    position: relative;
  }
  .content{
    margin-top:0.3rem;
    padding:0 0.3rem 0.76rem;
    position: relative;
  }
  img{
    width:100%;
  }
  .btn{
    position: absolute;
    width:100%;
    left:0;
    top:100%;
    margin-top:-2.4rem;
  }
  #getBtn{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width:4.6rem;
    height:0.9rem;
    border-radius:0.06rem;
    background-color: #ffffff;
    margin:0 auto;
    color:#1252bc;
    font-size:0.28rem;
    text-align:center;
    font-weight:bold;
    border:1px solid #ffffff;
  }
  .bannerText,.firstText,.secondText{
    width:100%;
    position: absolute;
    left:0;
  }
  .bannerText{
    top:100%;
    margin-top:-1.5rem;
  }
  .firstText{
    top:50%;
    margin-top:-2.6rem;
  }
  .secondText{
    top:100%;
    margin-top:-4.25rem;
  }
  .bannerText p,.firstText p,.secondText p{
    margin: 0 auto;
    font-size: 0.16rem;
    color: #5b90f0;
    line-height: 0.32rem;
    text-align: center;
  }
  .firstText p,.secondText p{
    color:#99c0ff;
  }
  p span{
    color:#ffffff;
  }
</style>
