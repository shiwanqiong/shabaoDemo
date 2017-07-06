<template>
  <div class="container">
    <div id="tip" class="textRed"></div>
    <div class="row">
      <p class="lightLine">
        <label for="" class="col-3">交易密码</label>
        <input id="newTranPwd" type="password" v-model="transPwd" class="col-9" placeholder="须6~12位包含数字字母">
      </p>
      <p class="lightLine">
        <label for="" class="col-4">确认交易密码</label>
        <input id="reNewTranPwd" type="password" v-model="reTransPwd" class="col-8" placeholder="请再次输入交易密码">
      </p>
    </div>
    <div class="btnRow">
      <input id="confirm" onclick="setNewTranPwd()" type="button" class="btn btn-blue btn-big" value="确定">
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .row{
    background-color: #fff;
    margin-top:0.2rem;
  }
  .relaRow{
    position:relative;
  }
  .linkBtn{
    position: absolute;
    right:0;
    padding-right:0.34rem;
    top:0;
    line-height:0.94rem;
    font-size:0.26rem;
  }
  .verticalLine{
    width:0;
    border:0.01rem solid #dbdbdb;
    height:0.45rem;
    position:absolute;
    right:1.90rem;
    top:0.24rem;
  }
  .row p{
    overflow: hidden;
    margin-left:0.3rem;
  }
  p input[type=password],p input[type=text]{
    border:0;
    background-color: #ffffff;
    text-align: right;
    padding-left:0;
    padding-right:0.3rem;
  }
  .btnRow{
    margin-top:3.57rem;
    padding:0 0.6rem;
  }
  p label{
    line-height:0.94rem;
    font-size:0.32rem;
    color:#403e3e;
  }
</style>
<script>
  export default{
    data(){
      return{
        transPwd:'',
        reTransPwd:''
      }
    }
  }
</script>
