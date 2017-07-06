<template>
  <div class="container">
    <div class="row">
      <p class="lightLine">
        <label for="" class="col-4">真实姓名</label>
        <input type="text" class="col-8" placeholder="请输入真实姓名" id="realName">
      </p>
      <p class="lightLine">
        <label for="" class="col-4">身份证</label>
        <input type="text"  class="col-8" placeholder="请输入身份证号码" id="card">
      </p>
      <p class="lightLine">
        <label for="" class="col-4">手机号码</label>
        <input type="text" maxlength="11" class="col-8" placeholder="请输入手机号码" id="telNo">
      </p>
      <p class="lightLine">
        <label for="" class="col-4">邮箱地址</label>
        <input type="text" class="col-8" placeholder="请输入" id="email">
      </p>
      <p class="lightLine">
        <label for="" class="col-4">民族</label>
        <select class="col-8" id="nation">
          <option value="0">请选择</option>
          <option value="1">汉族</option>
          <option value="2">蒙古族</option>
          <option value="3">回族</option>
          <option value="4">藏族</option>
          <option value="5">维吾尔族</option>
          <option value="6">苗族</option>
          <option value="7">彝族</option>
          <option value="8">壮族</option>
          <option value="9">布依族</option>
          <option value="10">朝鲜族</option>
          <option value="11">满族</option>
          <option value="12">侗族</option>
          <option value="13">瑶族</option>
          <option value="14">白族</option>
          <option value="15">土家族</option>
          <option value="16">哈尼族</option>
          <option value="17">哈萨克族</option>
          <option value="18">傣族</option>
          <option value="19">黎族</option>
          <option value="20">傈僳族</option>
          <option value="21">佤族</option>
          <option value="22">畲族</option>
          <option value="23">高山族</option>
          <option value="24">拉祜族</option>
          <option value="25">水族</option>
          <option value="26">东乡族</option>
          <option value="27">纳西族</option>
          <option value="28">景颇族</option>
          <option value="29">柯尔克孜族</option>
          <option value="30">土族</option>
          <option value="31">达斡尔族</option>
          <option value="32">仫佬族</option>
          <option value="33">羌族</option>
          <option value="34">布朗族</option>
          <option value="35">撒拉族</option>
          <option value="36">毛南族</option>
          <option value="37">仡佬族</option>
          <option value="38">锡伯族</option>
          <option value="39">阿昌族</option>
          <option value="40">普米族</option>
          <option value="41">塔吉克族</option>
          <option value="42">怒族</option>
          <option value="43">乌孜别克族</option>
          <option value="44">俄罗斯族</option>
          <option value="45">鄂温克族</option>
          <option value="46">德昂族</option>
          <option value="47">保安族</option>
          <option value="48">裕固族</option>
          <option value="49">京族</option>
          <option value="50">塔塔尔族</option>
          <option value="51">独龙族</option>
          <option value="52">鄂伦春族</option>
          <option value="53">赫哲族</option>
          <option value="54">门巴族</option>
          <option value="55">珞巴族</option>
          <option value="56">基诺族</option>
        </select>
      </p>
    </div>
    <div class="btnRow">
      <input type="button" class="btn btn-blue btn-big" id="addBPerson" value="确定">
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .row{
    background-color: #fff;
    margin-top:0.2rem;
  }
  .row p{
    overflow: hidden;
    margin-left:0.3rem;
  }
  p input[type=text]{
    border:0;
    background-color: #ffffff;
    text-align: right;
    padding-right:0.3rem;
    padding-left:0;
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
  select {
    -webkit-appearance:none; appearance: none;
    border:none;
    line-height:0.94rem;
    font-size: 0.32rem;
    text-align: right;
    padding-left:30%;
  }
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
