<template>
  <div class="container">
    <header></header>
    <nav>
      <ul>
        <li>代客注册</li>
        <li>移动代理管家</li>
        <li>持续提成</li>
      </ul>
    </nav>
    <div class="module">
      <h2>介绍</h2>
      <p>我是包工头app是一款效率办公应用，是款简单、便捷的社保代理营销工具。我是包工头app服务于仕邦集团·沙包在线拓展的D端合伙人计划，满足仕邦·沙包在线D端合伙人招募、社保代理业务拓展的所有移动办公需求。</p>
    </div>
    <div class="module">
      <h2>功能</h2>
      <p style="padding-bottom: 0"><span class="color">强大的线上营销代理功能</span> 用户可通过我是包工头APP一键发展社保代理商，统计合伙人销售提成，工作更轻松，收入更透明，是沙包在线D端合伙人招募合作伙伴的最佳拍档。</p>
      <p style="padding-top: 0"><span class="color">简便快捷的客户服务功能</span> 用户可通过包工头APP为客户制定社保、公积金缴纳方案，支持用户录入参保信息，并有提醒客户续费功能，为客户提供全方位的移动服务，提供超优质客户服务，是沙包在线销售合伙人们的一站式“销售神器”。</p>
    </div>
    <div class="module">
      <h2>奖励分成机制</h2>
      <div class="table">
        <table>
          <thead>
          <tr>
            <th style="width:20%">代理级别</th>
            <th colspan="2">直接销售</th>
            <th colspan="2">一级代理分润</th>
            <th colspan="2">二级代理分润</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>产品</td>
            <td>签单奖</td>
            <td>服务费提成比</td>
            <td>签单奖</td>
            <td>服务费提成比</td>
            <td>签单奖</td>
            <td>服务费提成比</td>
          </tr>
          <tr>
            <td>社/商保代理(B端)</td>
            <td>350</td>
            <td>20%</td>
            <td class="tdBlue">100</td>
            <td class="tdBlue">6%</td>
            <td class="tdBlue">50</td>
            <td class="tdBlue">3%</td>
          </tr>
          </tbody>
        </table>
      </div>
      <div class="tip">
        <p>一级合伙人由兼职人员直接发展的合伙人</p>
        <p>二级合伙人由一级合伙人发展的兼职代理合伙人</p>
      </div>
      <div class="btnList">
        <span style="text-align:center;font-size:0.2rem;color:red;display:block;">iPhone请在Safari中打开此页面下载!</span>
        <a class="btn btn-big btn-blue" href="http://www.shabaozaixian.com/Wechat/labourContractor.html" onclick="downLoad()">下载APP</a>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
  .container{
    width: 100%;
    padding: 0;
  }
  header{
    width: 100%;
    height:4.45rem;
    background-image: url("../../static/images3/baogongtou.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  nav{
    padding: 0.25rem 0;
    border-bottom: 1px solid #e5e5e5;
    background-color: #fff;
  }
  nav ul{
    box-sizing: border-box;
  }
  nav ul li{
    box-sizing: border-box;
    display: inline-block;
    width: 31.5%;
    margin: 0 auto;
    padding-top: 0.6rem;
    text-align: center;
    color: #2681d7;
    font-size:0.24rem;
    background-size:0.5rem 0.5rem;
    background-position:top center;
    background-repeat: no-repeat;
    border-right: 1px solid #eeefef;
  }
  ul li:nth-child(1){
    background-image: url("../../static/images3/valet.png");
  }
  ul li:nth-child(2){
    background-image: url("../../static/images3/butler.png");
  }
  ul li:last-child{
    background-image: url("../../static/images3/percentage.png");
    border-right: 0;
  }
  .module{
    width: 100%;
  }
  .module h2{
    line-height: 0.8rem;
    background-color: #f8f8f8;
    color:#666666;
    font-size: 0.28rem;
    font-weight: normal;
    padding-left: 0.8rem;
    background-size:0.45rem 0.45rem;
    background-position:0.3rem center;
    background-repeat: no-repeat;
    background-image: url("../../static/images3/invoicedList.png");
  }
  .module>p{
    background-color: #fff;
    font-size: 0.24rem;
    line-height: 0.6rem;
    color: #4d4d4d;
    padding: 0.2rem 0.3rem 0.4rem;
    text-indent: 0.6rem;
  }
  .module p .color{
    color:#f07a1b;
  }
  .module .table{
    margin-top: 0.2rem;
    margin-bottom: 0.3rem;
    width: 100%;
  }
  table{
    width: 100%;
    table-layout: fixed;
    color:#fff;
  }
  table th,table td{
    font-size: 0.22rem;
    padding: 0.2rem 0.1rem;
    text-align: center;
    vertical-align: middle;
    border: 1px solid #ebebeb;
    color:#666666;
  }
  table th{
    color:#fff;
    background-color: #0075d4;
    font-size: 0.26rem;
    font-weight: normal;
    padding:0.3rem 0;
  }
  table td.tdBlue{
    color:#0075d4;
  }
  .tip{
    padding:0.2rem 0.3rem;
  }
  .tip p{
    line-height: 0.65rem;
    font-size: 0.22rem;
    color:#999999;
    padding-left: 0.3rem;
    background-size:0.15rem 0.15rem;
    background-position:0 center;
    background-repeat: no-repeat;
    background-image: url("../../static/images3/ellipse.png");
  }
  .btnList{
    width: 100%;
    padding: 0.5rem 1.1rem;
  }
  .btnList .btn-blue{
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    color:#0075d4;
    color:#fff;
  }
</style>
