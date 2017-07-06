<template>
    <div>
      <div class="des-list list">
        <h5 class="p-title">{{suitInfo.title}}</h5>
        <div class="content" style="padding:0 0.3rem;">
          <ul class="package-content clearfix">
            <li v-for="list in suitInfo.conList">
              <dl>
                <dt><img :src="list.imgSrc" alt=""></dt>
                <dd>{{list.des}}</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div class="des-list list">
        <h5 class="p-title">基本信息</h5>
        <div class="content">
          <p>适应人群：非企业员工</p>
          <p>适用需求：自由职业者、离职员工购买五险一金</p>
          <p>服务范围：广州、深圳、北京、上海、东莞等70多个城市</p>
          <p>提供资料：参保人身份证照片 个别参保地规定的其他资料</p>
        </div>
      </div>
      <div class="des-list list">
        <h5 class="p-title">购买须知</h5>
        <div class="content">
          <p>1、参保人年龄男性18-60岁，女性18-55岁；</p>
          <p>2、为了参保人的权益，请认真核对后上传真实、有效的参保人信息；</p>
          <p>3、社保和公积金代缴金额根据当地最新政策收取；</p>
          <p>4、请您保持手机畅通，便于我们为您服务；</p>
          <p>5、购买季度、半年套餐，如果缴费期间，社保机构对社保费用进行调整，沙包在线将以短信方式通知参保人。如果因为参保人未及时补足差额，导致不能缴纳最后一个月的社保费用，将默认认为参保人放弃缴纳最后一个月的社保。</p>
        </div>
      </div>
    </div>
</template>
<script>
  export default{
      data(){
          return {
            suitInfo:null,
            infoBlock:null
          }
      },
      props:['socialInfo'],
      created(){
      this.suitInfo=this.socialInfo.suitInfo;
      this.infoBlock=this.socialInfo.infoBlock;
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/css/proDetail.scss";
</style>
