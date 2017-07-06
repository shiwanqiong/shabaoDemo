<template>
  <div>
    <p id="social-security" class="result-title">社保申报异常反馈</p>
    <ul class="social-security">
        <li v-for="item in listSocial">
          <div class="info-detail clearfix">
            <p class="name">参保人：{{item.insurer_name}}<span class="insure-time">参保月份：{{item.join_month}}</span></p>
            <p class="result">异常原因：{{item.remark}}</p>
          </div>
        </li>
    </ul>
    <p id="fund-security" class="result-title">公积金申报异常反馈</p>
    <ul class="fund-security">
        <li v-for="list in listFund">
          <div class="info-detail clearfix">
            <p class="name">参保人：{{list.insurer_name}}<span class="insure-time">参保月份：{{list.join_month}}</span></p>
            <p class="result">异常原因：{{list.remark}}</p>
          </div>
        </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/query.scss";
</style>
<script>
    export default{
        data(){
            return {
              listSocial:[
                {insurer_name:'张三',join_month:'2017-04',remark:'异常原因：沙包要求，资料不齐 | 失败项目：养老,失业,医疗,生育,工伤,大病医疗'},
                {insurer_name:'张三',join_month:'2017-04',remark:'异常原因：沙包要求，资料不齐 | 失败项目：养老,失业,医疗,生育,工伤,大病医疗'},
                {insurer_name:'张三',join_month:'2017-04',remark:'异常原因：沙包要求，资料不齐 | 失败项目：养老,失业,医疗,生育,工伤,大病医疗'}
              ],
              listFund:[
                {insurer_name:'张三',join_month:'2017-04',remark:'异常原因：沙包要求，资料不齐 | 失败项目：养老,失业,医疗,生育,工伤,大病医疗'},
                {insurer_name:'张三',join_month:'2017-04',remark:'异常原因：沙包要求，资料不齐 | 失败项目：养老,失业,医疗,生育,工伤,大病医疗'},
                {insurer_name:'张三',join_month:'2017-04',remark:'异常原因：沙包要求，资料不齐 | 失败项目：养老,失业,医疗,生育,工伤,大病医疗'}
              ]

            }
        }
    }
</script>
