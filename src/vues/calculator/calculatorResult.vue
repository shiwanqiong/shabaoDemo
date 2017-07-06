<template>
  <div class="container">
    <div class="list">
      <p><span class="listTitle">参保城市：</span>广州</p>
      <p><span class="listTitle">参保城市：</span>广州</p>
      <p><span class="listTitle">购买类型：</span>社保</p>
      <p><span class="listTitle">
        	社保方案：
        	<!--公积金方案：-->
        	</span>社保方案一</p>
      <p><span class="listTitle">参保基数：</span>200元</p>
    </div>
    <div class="detail">
      <table cellpadding="0" cellspacing="0">
        <thead>
        <tr>
          <th></th>
          <th>个人%</th>
          <th>个人缴纳</th>
          <th>企业%</th>
          <th>企业缴纳</th>
        </tr>
        </thead>
        <tbody id="tdHtml">
        <tr>
          <td>养老</td>
          <td>8%</td>
          <td>201</td>
          <td>8%</td>
          <td>201</td>
        </tr>
        <tr>
          <td>养老</td>
          <td>8%</td>
          <td>201</td>
          <td>8%</td>
          <td>201</td>
        </tr>
        <tr>
          <td>养老</td>
          <td>8%</td>
          <td>201</td>
          <td>8%</td>
          <td>201</td>
        </tr>

        <!-- 合计 -->
        </tbody>
        <tfoot>
        <tr class="trColor all">
          <td>合计</td>
          <td colspan="4" class="tdRight" id="all_pay"></td>
        </tr>
        <tr class="trColor">
          <td colspan="5" class="tdRight" style="padding-top:0.15rem;padding-bottom:0.15rem">个人缴纳：<span id="all_personal_pay">¥346.5</span></td>
        </tr>
        <tr class="trColor">
          <td colspan="5" class="tdRight" style="padding-top:0.15rem;padding-bottom:0.15rem">企业缴纳：<span id="all_enterprise_pay">¥346.5</span></td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .list{
    width: 100%;
    padding:0.2rem 0.3rem;
    background-color: #fff;
  }
  .list p{
    line-height: 0.65rem;
    font-size: 0.26rem;
    color:#333;
  }
  .detail{
    width: 100%;
  }
  .detail table{
    width: 100%;
    table-layout: fixed;
  }
  .detail table th,.detail table td{
    word-break: break-all;
    color:#333;
    font-size: 0.26rem;
    vertical-align: middle;
    text-align: center;
  }
  .detail table thead{
    background-color: #e6e6e6;
  }
  .detail table th{
    padding:0.3rem 0.05rem;
  }
  .detail table td{
    padding:0.25rem 0.05rem;
  }
  .detail table tbody tr:nth-child(odd){
    background-color: #fff;
  }
  .detail table tbody tr:nth-child(even){
    background-color: #f5f6f8;
  }
  .detail tbody .all td,.detail tfoot .all td{
    color:#ea5504;
    /* padding:0.4rem 0.05rem; */
  }
  .detail tbody .all td.tdRight{
    padding-right: 0.3rem;
  }
  .detail table tbody tr.trColor,.detail table tfoot tr.trColor{
    background-color: #f5f6f8;
  }
  .detail tbody .tdRight,.detail tfoot .tdRight{
    text-align: right;
    padding-right: 0.3rem;
  }
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
