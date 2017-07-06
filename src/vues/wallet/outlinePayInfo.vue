<template>
  <div id="menualTransfer" class="menualTransfer">
    <form id="lineRechargeProcessor" action="lineRechargeProcessor.html">
      <div class="list">
        <div class="row list-item clearfix">
          <label for="acc_chan" class="col-4">汇款渠道</label>
          <select class="item col-8" id="acc_chan" v-model="acc_chan" onchange="channelChange()" onblur="channelChange();"  >
            <option value="00">请选择汇款渠道</option>
            <option value="01">银行转账</option>
            <option value="02">支付宝转账</option>
          </select>
          <span class="doChan tip" style="color: #f00; text-align: left; display: none;"><font color="red"></font>请选择汇款渠道</span>
        </div>
        <div class="row list-item remit clearfix">
          <label for="acc_num" class="col-4">汇款账号</label>
          <input class="col-8" v-model="acc_num" onchange="this.value=checkvalue('doAcct','acc_num',this.value);" onblur="mandatory('doAcct','acc_num');" type="text"
                 id="acc_num" name="acc_num" maxlength="20" onkeydown="value=value.replace(/[^\d]/g,'')" placeholder="请输入汇款的银行账号" />
        </div>
        <div class="row list-item clearfix">
          <label for="bank_name" class="col-4 label_21">账号名称</label>
          <!--2016-5-16 shiwanqiong  放开账号名称输入限制-->
          <input class="col-8" v-model="bank_name" onblur="mandatory('doName','bank_name');" type="text"
                 id="bank_name" name="bank_name" maxlength="50" placeholder="请输入账号的真实用户名"/>
          <span class="doName tip" style="color: #f00; text-align: left;display:none;">请输入正确的账号名称</span>
        </div>
        <div class="row list-item clearfix">
          <label for="amount" class="col-4 label_21">汇款金额</label>
          <input onchange="this.value=checkvalue('doAmount','amount',this.value);" v-model="amount" onblur="mandatory('doAmount','amount');" type="text"
                 id="amount" name="amount" maxlength="16" class="col-8" placeholder="请输入大于零的汇款金额" />
          <span class="doAmount tip" style="color: #f00; text-align: left; display: none;">请输入正确的金额</span>
        </div>
      </div>
      <div class="list">
        <div class="row list-item clearfix">
          <label for="time" class="col-4 label_21">汇款时间</label>
          <input class="col-8 in" readonly v-model="time" onchange="this.value=checkvalue('doTime','time',this.value);"  onblur="mandatory('doTime','time');" type="text" id="time" name="time" placeholder="请选择" />
          <span class="doTime tip"  style="color: #f00; text-align: left; display: none;">请选择汇款时间</span>
        </div>
        <div class="row list-item clearfix">
          <label for="telno" class="col-4 label_21">联系人手机</label>
          <input onkeydown="value=value.replace(/[^\d]/g,'')" v-model="telno" onchange="this.value=checkvalue('doTel','telno',this.value);" onblur="mandatory('doTel','telno');" type="text" id="telno" maxlength="11" name="telno" class="col-8" placeholder="请输入正确的手机号码" />
          <span class="doTel tip" style="color: #f00; text-align: left; display: none;">请输入正确的手机号</span>
        </div>
      </div>
      <div class="list">
        <textarea id="remark" rows="5" v-model="remark" class="form-control" onchange="mandatory('doTel','telno')" onkeyup="this.value = this.value.slice(0, 100)" placeholder="请输入备注信息，最多20个字"></textarea>
      </div>
    </form>
    <button onclick="lineRechargeProcessor()" class="btn btn-big btn-blue submit">提交</button>
    <div class="list-item outline">
      <router-link :to="{name:'outlinePayIntro'}" class="btn btn-nobg"><span class="bg"></span>如何线下汇款</router-link>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  *{
    box-sizing: border-box;
  }
  body,.menualTransfer{
    background:#f5f6f8;
  }
  .list{
    background:#fff;
    margin-bottom:0.2rem;
  }
  .row{
    width:100%;
  }
  .container{
    padding:0;
  }
  .tab{
    background:#fff;
    border-bottom:1px solid #dbdbdb;
  }
  .tab li{
    height:0.94rem;
    line-height:0.94rem;
    font-size:0.3rem;
    text-align: center;
  }
  .tab a{
    display: inline-block;
    width:100%;
    height:100%;
    color:#a8a7a7;
  }
  .tab a.active{
    color:#2660ad;
    border-bottom:0.06rem solid #2660ad;
  }
  .imgContent{
    width:60%;
    height:2.8rem;
    margin:0.2rem auto;
    position:relative;
    background:#ccc;
    text-align:center;
    vertical-align:middle;
  }
  .imgContent img{
    width:100%;
    height:100%;
  }
  .imgContent input{
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    opacity:0;
    filter:alpha(opacity = 0);
  }
  .img-txt{
    margin:0.2rem auto 0.5rem;
    font-size:0.3rem;
    text-align:center;
  }
  .menualTransfer .list-item{
    padding:0 0.3rem;
    line-height: 0.96rem;
    border-bottom: 1px solid #dbdbdb;
    font-size:0.32rem;
    margin:0;
  }
  .item{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    font-size:0.32rem;
    color:#595757;
    border:0;
    outline:0;
    height:0.94rem;
    line-height:0.94rem;
    direction:rtl;
    background:#fff;
  }
  .item option{
    color:#595757;
  }
  .list-item input[type=text]{
    height:0.94rem;
    line-height:0.94rem;
    text-align:right;
    /* padding:0.32rem 0; */
    color:#595757;
    font-size:0.32rem;
    border:0;
    outline:0;
    background:transparent;
  }
  .list textarea{
    width:100%;
    border:none;
    font-size:0.32rem;
    padding:0.3rem;
    outline:0;
  }
  .submit{
    width:84%;
    margin:0.3rem auto 0.2rem;
  }
  .bg{
    display: inline-block;
    width:0.3rem;
    height:0.3rem;
    background: url("../../../static/images3/question.png") no-repeat center center;
    background-size: 0.3rem 0.3rem;
    vertical-align: middle;
    margin-right:0.1rem;
  }
  .menualTransfer .outline{
    border:0;
    width:84%;
    margin:0 auto;
    font-size:0.24rem;
  }
  .outline a{
    border:0;
  }
</style>
<script>
  export  default{
    data(){
      return{
        acc_chan:'',
        acc_num:'',
        bank_name:'',
        amount:'',
        time:'',
        telno:'',
        remark:''
      }
    }
  }
</script>
