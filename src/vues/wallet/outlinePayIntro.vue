<template>
  <div>
    <p class="warn-tip">
      温馨提示：
      1、受银行处理时间影响，采用线下汇款方式到账会有延误，强烈建议使用支付宝或网银支付；<br />
      2、线下汇款直接向沙包平台专属账号汇款，系统会将汇款直接匹配到您的钱包账户中；<br />
      3、各种方式的到账时间一般为：建设银行1-2天，跨行3-5天（具体到账时间以银行实际到账时间为准）。
    </p>
    <div class="list">
      <div id="tip" class="textRed"></div>
      <ul class="account-detail">
        <li>
          <p class="title">汇款</p>
          <p>通过网上银行转账，或者自行汇款至下方的银行</p>
          <div class="entering-detail">
            <img src="../../../static/images3/js-bank2.png" style="width:2.32rem;height:0.58rem;margin-bottom:0.45rem;" alt="">
            <p>账户名称</p>
            <p class="entering-info">广州仕邦人力资源有限公司</p>
            <p>银行账户</p>
            <p class="entering-info account">4400 1581 3010 5301 5755 </p>
            <p>开户支行</p>
            <p class="entering-info">中国建设银行天河支行</p>
          </div>
          <div class="line"></div>
        </li>
        <li>
          <p class="title">录入</p>
          <p>进入[我的]-[线下汇款信息录入]提交已汇款的底单信息</p>
          <div class="line"></div>
        </li>
        <li>
          <p class="title">系统审核</p>
          <p>审核成功后，系统会将汇款直接充值到钱包转户中</p>
          <div class="line" style="height:65%;"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  body{
    background: #f5f6f8;
  }
  .warn-tip{
    color:#e2b300;
    background:#fff8de;
    padding:0.32rem 0.3rem;
    line-height: 0.35rem;
    text-align:left;
    font-size:0.24rem;
  }
  .list{
    background: #fff;
  }
  .account-detail{
    background: #fff;
    margin-left:0.3rem;
    /*  border-left: 0.02rem solid #2660ad; */
    margin-top: 0.2rem;
    padding:0.3rem 0.3rem 0.4rem 0;
  }
  .account-detail li{
    position:relative;
    padding:0.25rem 0 0 1rem;
    background: url("../../../static/images3/entering1.png") left top / 0.8rem 0.8rem no-repeat;
  }
  .account-detail li:nth-child(2){
    background: url("../../../static/images3/entering2.png") left top / 0.8rem 0.8rem no-repeat;
  }
  .account-detail li:last-child{
    background: url("../../../static/images3/entering3.png") left top / 0.8rem 0.8rem no-repeat;
  }
  .title{
    font-size: 0.3rem;
    color:#2660ad;
    margin-bottom:0.3rem;
  }
  p{
    font-size:0.28rem;
    color:#403e3e;
  }
  .entering-detail{
    margin:0.4rem 0 0.5rem;
    border:1px dashed #ccc;
    padding:0.35rem 0.35rem 0;
  }
  .entering-info{
    font-size:0.32rem;
    margin:0.25rem 0 0.55rem;
  }
  .account{
    color:#2660ad;
  }
  .line{
    position:absolute;
    top:0.85rem;
    left:0.4rem;
    width:0.02rem;
    height:96%;
    background:#2660ad;
  }
</style>
