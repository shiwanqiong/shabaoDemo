<template>
  <div class="container">
    <p class="titleP">请联系客户服务购买，客户热线400-835-8155</p>
    <div class="serviceList">
      <a href="tel:400-385-8155">
        <div class="row">
          <img src="../../static/images3/spe1.png" width="100%" alt="">
        </div>
      </a>
      <a href="tel:400-385-8155">
        <div class="row">
          <img src="../../static/images3/spe2.png" width="100%" alt="">
        </div>
      </a>
      <a href="tel:400-385-8155">
        <div class="row">
          <img src="../../static/images3/spe3.png" width="100%" alt="">
        </div>
      </a>
      <a href="tel:400-385-8155">
        <div class="row">
          <img src="../../static/images3/spe4.png" width="100%" alt="">
        </div>
      </a>
      <a href="tel:400-385-8155">
        <div class="row">
          <img src="../../static/images3/spe5.png" width="100%" alt="">
        </div>
      </a>
      <a href="tel:400-385-8155">
        <div class="row">
          <img src="../../static/images3/spe6.png" width="100%" alt="">
        </div>
      </a>
      <div class="row telBtn">
        <a href="tel:400-385-8155">
          <span class="tel"></span>
          点击联系客服：400-385-8155
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container{
    padding-bottom:0.46rem;
  }
  .serviceList{
    padding:0 0.3rem;
  }
  .row{
    margin-top:0.2rem;
  }
  .titleP{
    line-height: 0.94rem;
    background-color: #e6e6e6;
    color:#262525;
    text-align: center;
  }
  .telBtn{
    height:1.04rem;
    background-color: #ffffff;
    position: relative;
  }
  .telBtn a{
    width:100%;
    display: block;
    color:#eb652b;
    text-align: center;
    font-size: 0.32rem;
    line-height: 1.04rem;;
  }
  .tel{
    display: block;
    position: absolute;
    width:0.34rem;
    height:0.34rem;
    background-image: url('../../static/images3/speTel.png');
    background-repeat: no-repeat;
    background-size: 100%;
    left:0.34rem;
    top:33%;
  }
</style>
