<template>
  <div class="container">
    <div class="userInfo">
      <p>参保人：<span id="userName"></span></p>
      <p>社保参保城市： <span id="socialCity"></span></p>
      <p>公积金参保城市： <span id="fundCity"></span></p>
      <!--社保+公积金  -->
      <p>购买类型： <span id="buyType"></span></p>
      <p>社保参保基数：<span id="socialBase"></span></p>
      <p>公积金参保基数：<span id="fundBase"></span></p>
      <!-- 补缴 -->
      <p>社保补缴月份：<span></span></p>
      <!--<p>公积金补缴月份：<span></span></p>-->
    </div>
    <div class="feeDetail">
      <table>
        <thead>
        <tr>
          <th></th>
          <th>个人%</th>
          <th>个人缴纳</th>
          <th>企业%</th>
          <th>企业缴纳</th>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>sp12345</td>
            <td>2%</td>
            <td>200</td>
            <td>8%</td>
            <td>200</td>
          </tr>
        </tbody>
      </table>
      <div class="summary">
        <p class="textOrange">合计 <span>400</span></p>
        <p>个人缴纳：100</p>
        <p>企业缴纳：200</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container{
    padding-bottom:0.8rem;
  }
  .userInfo p{
    color:#262525;
    line-height:0.66rem;
  }
  .userInfo{
    margin-top:0.2rem;
    margin-bottom: 0.25rem;
    padding:0 0.3rem;
  }
  table{
    width:100%;
  }
  th{
    height:0.84rem;
    background-color:#e6e6e6;
    vertical-align: middle;
    color:#262525;
    font-weight: normal;
    text-align: center;
  }
  tr:nth-child(even) td{
    background-color: #ffffff;
  }
  td{
    height:0.84rem;
    vertical-align: middle;
    font-size:0.26rem;
    color: #595757;
    text-align: center;
  }
  .summary{
    margin-top:0.2rem;
    font-size:0.26rem;
    padding:0 0.3rem;
  }
  .summary span{
    float:right;
    font-size:0.3rem;
  }
  .summary p{
    text-align: right;
    line-height:0.6rem;
  }
  .summary p:first-child{
    text-align: left;
  }
</style>
