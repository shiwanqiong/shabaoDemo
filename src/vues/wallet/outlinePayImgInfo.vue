<template>
  <div class="container">
    <div id="evidenceImgDiv" class="list">
      <div class="imgContent">
        <img  src="../../../static/images3/remit.png" width="100%" style="border:none"/>
      </div>
      <p class="img-txt">图片示范</p>
      <div class="imgContent">
        <img id="evidenceImg1" src="../../../static/images3/demoImg.png" width="100%" style="border:none"/>
        <input name="myfiles" type="file" capture="camera" id="evidenceImg" onchange="busiLicence(this)"/>
      </div>
      <p class="img-txt">请上传线下汇款回执图片</p>
      <div class="row" style="margin-top:0.6rem;">
        <a href="javascript:void(0)" onclick="commitGuid('0')" class="btn btn-big btn-blue submit">提交</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  *{
    box-sizing: border-box;
  }
  body,.menualTransfer{
    background:#f5f6f8;
  }
  .list{
    background:#fff;
    margin-bottom:0.2rem;
  }
  .container{
    padding:0;
  }
  .tab{
    background:#fff;
    border-bottom:1px solid #dbdbdb;
  }
  .tab li{
    height:0.94rem;
    line-height:0.94rem;
    font-size:0.3rem;
    text-align: center;
  }
  .tab a{
    display: inline-block;
    width:100%;
    height:100%;
    color:#a8a7a7;
  }
  .tab a.active{
    color:#2660ad;
    border-bottom:0.06rem solid #2660ad;
  }
  .imgContent{
    width:60%;
    height:2.8rem;
    margin:0.2rem auto;
    position:relative;
    background:#ccc;
    text-align:center;
    vertical-align:middle;
  }
  .imgContent img{
    width:100%;
    height:100%;
  }
  .imgContent input{
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    opacity:0;
    filter:alpha(opacity = 0);
  }
  .img-txt{
    margin:0.2rem auto 0.5rem;
    font-size:0.3rem;
    text-align:center;
  }
  .menualTransfer .list-item{
    padding:0 0.3rem;
    line-height: 0.96rem;
    border-bottom: 1px solid #dbdbdb;
    font-size:0.32rem;
    margin:0;
  }
  .item{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size:0.32rem;
    color:#595757;
    border:0;
    outline:0;
    height:0.94rem;
    line-height:0.94rem;
    direction:rtl;
    background:#fff;
  }
  .item option{
    color:#595757;
  }
  .list-item input[type=text]{
    height:0.94rem;
    line-height:0.94rem;
    text-align:right;
    /* padding:0.32rem 0; */
    color:#595757;
    font-size:0.32rem;
    border:0;
    outline:0;
    background:transparent;
  }
  .list textarea{
    width:100%;
    border:none;
    font-size:0.32rem;
    padding:0.3rem;
    outline:0;
  }
  .submit{
    width:84%;
    margin:0.3rem auto 0.2rem;
  }
  .bg{
    display: inline-block;
    width:0.3rem;
    height:0.3rem;
    background: url("../../../static/images3/question.png") no-repeat center center;
    background-size: 0.3rem 0.3rem;
    vertical-align: middle;
    margin-right:0.1rem;
  }
  .menualTransfer .outline{
    border:0;
    width:84%;
    margin:0 auto;
    font-size:0.24rem;
  }
  .outline a{
    border:0;
  }
</style>

