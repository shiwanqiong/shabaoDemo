<template>
  <div class="contain" id="companyModal" style="position: relative;">
    <p class="title">委托代理协议</p>
    <div class="important">
      <div class="firstParty">
        <p>甲方（委托方）：</p>
        <p>法定代表人：</p>
        <p>地址：</p>
      </div>
      <p>乙方（受托方）：</p>
      <p>法定代表人：</p>
      <p>地址：</p>
    </div>
    <div class="contact">
      <p class="info"> 根据《中华人民共和国合同法》、《中华人民共和国劳动合同法》等有关法律、法规规定，本着诚实信用、平等互利的原则，甲、乙双方就甲方委托乙方办理相关事务一事，达成以下协议：</p>
      <p class="contact-title">一、协议期限</p>
      <p class="date">1、本协议自甲、乙双方签署之日 <span id="yearCom" ></span> 年<span id="monthCom" ></span>月<span id="dayCom" ></span>日起生效，有效期至<span id="endYearCom"></span>年<span id="endMonthCom"></span>月<span id="endDayCom"></span>日止。</p>
      <p>2、本协议到期前30日，甲、乙双方均未书面表示异议的，视为自动延续协议一年，自动延续协议期限不超过三年。</p>
      <p>3、沙包在线网（网址：www.shabaozaixian.com）对双方合作期限等合作内容另有约定的，以沙包在线网为准。</p>
      <p class="contact-title">二、甲方的权利义务</p>
      <p>1、甲方应按时、按要求提交乙方办理相关手续所需要的资料。</p>
      <p>2、甲方应当按时协助乙方到相关部门办理相关手续，由于甲方自身的过错（包括但不限于没有及时提供资料、到场提供协助配合、或未按时支付费用等）导致相应手续办理延迟或无法办理，责任由甲方自行承担，因此给乙方造成的损失由甲方承担。</p>
      <p>3、甲乙双方确认，甲方与乙方之间仅是委托方和受托方的关系；甲方不是乙方的员工，乙方与甲方不存在劳动关系。如因乙方办理相关手续的行为或应甲方申请乙方向甲方出具相应证明而导致乙方遭受损失的，乙方有权向甲方追偿。</p>
      <p>4、甲方确认，对于本协议附件所约定乙方提供的代理服务，若由于法律法规政策的变动而不能实现相应代理服务，乙方对此不承担责任。</p>
      <p>5、甲方确认，对于乙方按本协议约定方式发送的邮件、文件、信息等应及时书面回复，否则视为甲方无异议。</p>
      <p>6、乙方所提供的服务仅限于本协议及附随内容所列明的代理事项，如乙方需甲方提供其他服务，需双方另行协商签订补充协议或甲方在乙方相关网站进行确认并向乙方另行支付相关服务费用。</p>
      <p>7、甲方确认，凡是以甲方在沙包在线的账户登录沙包在线网所进行的一切操作和确认行为均视为甲方或甲方授予完全权限的行为，均对甲方发生法律效力。甲方确认已全部熟悉并掌握沙包在线网操作页面所提示的一切内容（包括但不限于价格、支付时间、操作方案、注意事项、提交资料要求等）并会随时关注乙方在沙包在线网或乙方向甲方发送的信息资料。</p>
      <p>8、甲乙双方确认，由于国家或地方政策的调整等非乙方的因素导致相关操作方案、支付时间、注意事项、提交资料要求等需要调整的，乙方有权单方进行调整。</p>
      <p class="contact-title">三、乙方的权利义务</p>
      <p>1、乙方依据甲方在沙包在线网（网址：www.shabaozaixian.com）中点选的代理服务方案提供相应代理服务，并依据甲方点选的代理服务方案收取服务费用。</p>
      <p>2、甲方在支付费用时，可在沙包在线网的支付界面中选择线上支付或线下支付方式，不论甲方选择何种支付方式，在甲方将全部费用支付至支付方式所对应的账户中，均视为乙方已收到此费用。</p>
      <p>3、乙方应当在收到甲方足额支付的全部费用后，为甲方代理办理所约定的相应事项和手续。</p>
      <p>4、若因不可抗拒的外界因素或第三方责任造成乙方不能按时代理办理甲方业务，乙方对此不承担责任。</p>
      <p class="contact-title">四、通知和送达</p>
      <p>1、甲乙双方确认双方发出通知均可采用电子邮件、函件、短信等形式，协议任何一方更改本协议约定的通讯地址、电话、电子邮箱的均应提前一个月书面通知对方，否则对方按照本协议约定的通讯方式进行送达的，均视为已履行送达义务，受通知方在通知送达后三个工作日内未书面回复表示异议的，视为无异议。</p>
      <p>2、甲乙双方确认，乙方在沙包在线网所提示或通知的一切内容均作为本协议不可分割的一部分，与本协议具有同等法律效力，甲乙双方均受相关内容约束。</p>
      <p class="contact-title">五、保密</p>
      <p>1、除根据本协议目的或条款需要公开的以外，甲乙双方应对本协议的内容保密，不能向任何与本协议无关的第三人泄露本协议内容。</p>
      <p>2、双方确认，甲乙双方提供的所有资料，只能用于本协议附件所列明的相应事项，任何一方都不得将资料用于其他用途，否则应就因此而给对方所造成的损失承担赔偿责任。</p>
      <p class="contact-title">六、其他</p>
      <p>1、甲方在沙包在线网通过点击确认或类似方式明示或默示同意操作页面的内容即视为甲方真实意愿，并认可该内容即时成为本协议不可分割的一部分，与本协议具有同等法律效力。各方不得以该内容未签订纸质书面协议为由否认其效力。</p>
      <p>2、本协议的任何条款如需要变更或补充，则甲乙双方应签订相关变更或补充协议。未尽事宜，由双方协商解决，协商不成，任何一方均可提交广州市天河区人民法院解决。</p>
    </div>
    <div class="row" style="margin-top:0.4rem;position:relative">
      <div class="col-5">
          <p>甲方：<br/>
            （公司公章）
          </p>
      </div>
      <div class="col-2"></div>
      <div class="col-5" style="float:right;">
        <p>乙方：广州仕邦人力资源有限公司</p>
      </div>
    </div>
    <div style="position:relative;">
      <div style="width:30%;position:absolute;bottom:0;right:0;">
        <img src="../../static/images3/seal.png"  width="100%"/>
      </div>
    </div>
    <div class="operate">
      <a href="#" onclick="confirm_contract();" class="btn btn-big btn-blue" >同意</a>
      <a href="#" onclick="cancel_contract();"   class="btn btn-big btn-nobg" >取消</a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .contain{
    padding:0.3rem 0.3rem 0;
    background:#fff;
  }
  .title{
    font-size:0.3rem;
    text-align: center;
    color:#262525;
    font-weight:600;
  }
  .important{
    font-size:0.28rem;
    color:#262525;
    font-weight:600;
    margin:0.36rem 0;
  }
  .firstParty{
    margin-bottom:0.6rem;
  }
  .important p{
    line-height: 0.5rem;
  }
  .contact p{
    line-height:0.5rem;
    color:#777575;
    font-size:0.26rem;
    text-indent:2em;
  }
  .contact .info{
    text-indent:0;
  }
  .contact  .contact-title{
    font-weight:600;
    color:#262525;
  }
  .operate{
    margin:0.5rem auto;
  }
  .date span{
    text-decoration:underLine;
  }
</style>
