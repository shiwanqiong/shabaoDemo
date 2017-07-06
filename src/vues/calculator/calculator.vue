<template>
  <div class="container">
    <div class="calc">
      <div class="basic">
        <div class="common city">
          <label>参保城市</label>
          <select name="areaSelect" id="areaSelect">
            <option value="00">-请选择-</option>
          </select>
        </div>
        <div class="common household" style="border:0;">
          <label>选择户籍</label>
          <select name="adaptScopeSelect" id="adaptScopeSelect">
            <option value="00">本地城镇</option>
            <option value="01">本地农村</option>
            <option value="10">非本地城镇</option>
            <option value="11">非本地农村</option>
          </select>
        </div>
      </div>
      <div class="detailSel">
        <div class="common type">
          <label>参保类型</label>
          <select id="schemeType" onchange="schemeTypeSelect()">
            <option value="1">社保</option>
            <option value="2">公积金</option>
          </select>
        </div>
        <div class="common scheme" id="SBPlanSelect">
          <label>社保方案</label>
          <select name="productId1Select" id="productId1Select"></select>
        </div>
        <div class="common base" id="SBBaseSelect" style="border:0;">
          <label>社保基数</label>
          <input type="text" id="base_pay" name="base_pay">
          <div class="isMin">
            <input type="checkbox" onclick="disableInput('1')" id="limitBaseCheckBox">
            <label for="limitBaseCheckBox">最低基数</label>
          </div>
        </div>
        <!-- 公积金 -->
        <div class="common scheme" id="GJJPlanSelect" style="display: none;">
          <label>公积金方案</label>
          <select name="productId2Select" id="productId2Select"></select>
        </div>
        <div class="common base" id="GJJBaseSelect" style="display: none;border:0;">
          <label>公积金基数</label>
          <input type="text" id="base_pay2" name="base_pay2">
          <div class="isMin">
            <input type="checkbox" onclick="disableInput('2')" id="limitBaseCheckBox2">
            <label for="limitBaseCheckBox2">最低基数</label>
          </div>
        </div>
      </div>
    </div>
    <div class="btnList">
      <router-link :to="{name:'calculatorResult'}" class="btn btn-big btn-blue btn-operate">计算</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .basic{
    padding-top:0.2rem;
    padding-left: 0.3rem;
    background-color: #fff;
  }
  .detailSel{
    margin-top: 0.2rem;
    padding-left: 0.3rem;
    background-color: #fff;
  }
  .common{
    line-height: 0.9rem;
    border-bottom: 1px solid #dbdbdb;
  }
  .common>label{
    width: 30%;
    font-size: 0.26rem;
    color:#403e3e;
    display: inline-block;
  }
  .common:after{
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
    clear: both;
  }
  .common>input,.common>select{
    width: 70%;
    font-size: 0.26rem;
    height: 0.8rem;
    margin:0.05rem 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    float: right;
    border: 0;
    outline: 0;
    padding-right: 0.3rem;
    text-align: right;
    direction: rtl;
  }
  .base{
    position: relative;
  }
  .base>input{
    padding-right: 2.3rem;
  }
  .base .isMin{
    position: absolute;
    display: inline-block;
    width: 1.9rem;
    top:0.06rem;
    right: 0.15rem;
  }
  /* .base .isMin>label{
      vertical-align: super;
  } */
  .btnList{
    margin-top: 2.8rem;
    padding: 0 0.2rem
  }
</style>
<script>
    export default{
        data(){
            return {

            }
        }
    }
</script>
