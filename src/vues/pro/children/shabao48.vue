<template>
  <div>
    <div class="package-img">
      <img :src="items.proImg" alt="沙包48号"/>
    </div>
    <div class="package-introduce">
      <div class="list-special clearfix">
        <div class="row clearfix">
          <p class="title fl">{{items.title}}</p>
          <span class="discount fl border-orange">季付</span>
          <span class="discount fl border-blue">半年付</span>
          <span class="fr discount-icon"></span>
        </div>
        <div class="row">
          <p class="service-fee">{{items.des}}</p>
        </div>
      </div>
      <div class="row img-list">
        <img src="../../../../static/images3/seasonAndHalf.png" alt="季付半年付"/>
      </div>
      <div class="select-list list clearfix">
        <div class="select-item bottom-line clearfix">
          <p class="fl">参保类型</p>
          <select id="buytype" class="fr"><!-- onchange="showTips('d')" -->
            <option value="a" >公积金+社保</option>
            <option value="b">社保</option>
            <option value="c">公积金</option>
          </select>
        </div>
        <div class="select-item bottom-line clearfix">
          <p class="fl">参保起始时间</p>
          <input type="text" class="pickMonth fr" id="start" value="" placeholder="请选择" readonly style="width:50%;">
          <input type="hidden" class="pickMonth fr" id="end" value="" readonly>
        </div>
        <div class="select-items clearfix">
          <p class="fl">选择付费模式</p>
          <div class="fr package-item">
            <a href="javascript:void(0)" class="package fl current" id="package3" fee="248" >半年付 服务费248元/半年</a>
            <a href="javascript:void(0)" class="package fl" id="package2" fee="128">季付&nbsp;&nbsp;服务费128元/季</a>
            <a href="javascript:void(0)" class="package fl" id="package1" fee="48">月付&nbsp;&nbsp;&nbsp;服务费48元/月</a>
          </div>
        </div>
      </div>
      <social-pro-com :social-info="items"></social-pro-com>
    </div>
    <div class="operate clearfix">
      <a href="javascript:void(0)" class="total">总费用：￥<span id="all_amount">0.0</span></a>
      <a href="javascript:void(0)" class="buy">我要购买</a>
    </div>
  </div>
</template>
<script>
  import {proDetail} from '../../../assets/js/proContent'
  import socialProCom from './socialProCom.vue'
  export default{
    components:{socialProCom},
    data(){
      return{
        items:proDetail['sb48']
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/css/proDetail.scss";
  .package{
    width:3.64rem;
    margin:0;
    margin-bottom:0.2rem;
  }
</style>


