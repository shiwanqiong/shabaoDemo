<template>
  <div id="socialIntro">
    <div class="row">
      <p class="titleP lightLine">
        <span id="social"></span>
        社会保险
      </p>
      <div class="detail">
        <p>
          社会保险是指国家为了预防和分担年老、失业、疾病以及死亡等社会风险,实现社会安全，而强制社会多数成员参加的，具有所得重分配功能的非营利性的社会安全制度。
        </p>
        <p>
          社会保险 (Social Insurance) 是一种为丧失劳动能力、暂时失去劳动岗位或因健康原因造成损失的人口提供收入或补偿的一种社会和经济制度。社会保险计划由政府举办，强制某一群体将其收入的一部分作为社会保险税（费）形成社会保险基金，在满足一定条件的情况下，被保险人可从基金获得固定的收入或损失的补偿，它是一种再分配制度，它的目标是保证物质及劳动力的再生产和社会的稳定。社会保险的主要项目包括养老保险、医疗保险、失业保险、工伤保险、生育保险。
        </p>
      </div>

    </div>
    <div class="row">
      <p class="titleP lightLine">
        <span id="fund"></span>
        住房公积金
      </p>
      <div class="detail">
        <p>
          住房公积金，是指国家机关、国有企业、城镇集体企业、外商投资企业、城镇私营企业及其他城镇企业、事业单位、民办非企业单位、社会团体及其在职职工缴存的长期住房储金。
        </p>
        <p>
          住房公积金的定义包含以下五个方面的涵义：
        </p>
        <p>
          （1）住房公积金只在城镇建立，农村不建立住房公积金制度。
        </p>
        <p>
          （2）只有在职职工才建立住房公积金制度。无工作的城镇居民、离退休职工不实行住房公积金制度。
        </p>
        <p>
          （3）住房公积金由两部分组成，一部分由职工所在单位缴存，另一部分由职工个人缴存。职工个人缴存部分由单位代扣后，连同单位缴存部分一并缴存到住房公积金个人账户内。
        </p>
        <p>
          （4）住房公积金缴存的长期性。住房公积金制度一经建立，职工在职期间必须不间断地按规定缴存，除职工离退休或发生《住房公积金管理条例》规定的其他情形外，不得中止和中断。体现了住房公积金的稳定性、统一性、规范性和强制性。
        </p>
        <p>
          （5）住房公积金是职工按规定存储起来的专项用于住房消费支出的个人住房储金，具有两个特征：积累性和专用性。
        </p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .row{
    margin-top:0.2rem;
    background: #ffffff;
  }
  .titleP{
    line-height: 0.94rem;
    font-size: 0.32rem;
    margin-bottom: 0.2rem;
    padding-left:0.3rem;
    position: relative;
  }
  .titleP span{
    position:absolute;
    display: block;
    width:0.3rem;
    height:0.3rem;
    left:0.32rem;
    top:0.32rem;
    background-position: center;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  p{
    text-indent: 0.56rem;
    line-height: 0.5rem;
  }
  .detail{
    padding:0.2rem 0.3rem 0.55rem 0.3rem;
  }
  #social{
    background-image: url('../../../static/images3/social.png');
  }
  #fund{
    background-image: url('../../../static/images3/fund.png');
  }
</style>
