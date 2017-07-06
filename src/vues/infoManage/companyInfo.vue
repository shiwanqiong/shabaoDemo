<template>
  <form id="completeForm" action="wcPerfectCompanyData.html" method="post" >
      <div v-if="userInfo.info_flag=='1'">
        <div class="list">
          <p class="tip">请完善您的企业资料，以便购买套餐</p>
          <p id="tip" class="tips"></p>
          <ul>
            <li class="clearfix no-border">是否个体工商户
              <div class="fr" style="margin-right:0.3rem;">
                <select id="individual" name="individual" onchange="IsCheckIndividual();">
                  <option value="0">&#45;&#45;请选择&#45;&#45;</option>
                  <option value="1">个体工商户</option>
                  <option value="2">企业</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
        <div class="list">
          <ul>
            <li class="clearfix">联系人
              <input type="text" class="fr" maxlength='50' v-model="contacts_linkman" name="contacts_linkman" id="contacts_linkman" onblur="checkNewContract()" onfocus="cleanTip()" placeholder="请输入联系人姓名"/>
            </li>
            <li class="clearfix">联系电话
              <input type="text" class="fr" name="contacts_phone" v-model="contacts_phone" id="contacts_phone" onblur="checkContractPhone()" onfocus="cleanTip()" placeholder="请输入联系电话"/>
            </li>
            <li class="clearfix">电子邮箱
              <input type="text"  class="fr" name="email" id="setEmail"  v-model="setEmail" onblur="checkEmail();" onfocus="cleanTip()" placeholder="请输入邮箱地址"/>
            </li>
            <li class="clearfix">所属行业
              <div class="fr" style="margin-right:0.3rem;">
                <select onchange="BelongIndustry()" v-model="setBelong" id="setBelong" name="industry">
                  <option value="-1">请选择</option>
                  <!--<c:forEach var="item" items="${IndustryList}" varStatus="status">
                    <option value="${item.params_value}">${item.params_remark}</option>
                  </c:forEach>-->
                </select>
              </div>
            </li>
            <li class="clearfix">
              <label class="col-4">注册所在地</label>
              <div style="margin-right:0.3rem;" class="col-7 fr clearfix">
                <select onchange="chooseProvince()" id="code" v-model="code" name="regplace" class="col-5" style="direction: ltr;">
                  <option value="-1">请选择</option>
                 <!-- <c:forEach var="item" items="${provinceList}" varStatus="status">
                    <option value="${item.code}">${item.provinceName}</option>
                  </c:forEach>-->
                </select>
                 <input type="hidden" id="getProvince" name="getProvinceName" value=""/>
                <select class="selectpicker col-5 fr" onchange="getCityName()" id="citySelect" name="city" style="direction: ltr;">
                  <option value="-1">请选择</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
   <!-- <c:if test="${userInfo.info_flag eq '2'}">-->
      <div class="finished-info">
        <p class="company-name">${userInfo.enterpriseName}</p>
        <p class="company-busi_licence">营业执照：${userDetailInfo.busi_licence}<span class="fr">已认证</span></p>
      </div>
      <div class="list">
        <li class="clearfix">法人姓名
          <input type="text" class="fr" value="${userDetailInfo.legal_name}" readOnly/>
        </li>
        <li class="clearfix">联系人
          <a href="wcUpdateCompanyDetailInfo.html?type=contacts_linkman" class="revisable">${userDetailInfo.contacts_linkman}</a>
        </li>
        <li class="clearfix">联系电话
          <a href="wcUpdateCompanyDetailInfo.html?type=contacts_phone" class="revisable">${userDetailInfo.contacts_phone}</a>
        </li>
        <li class="clearfix">电子邮箱
          <a href="wcUpdateCompanyDetailInfo.html?type=email" class="revisable">${userInfo.email}</a>
        </li>
      </div>
      <div class="list">
        <li class="clearfix">
          <label class="col-4">所属行业</label>
          <div style="margin-right:0.3rem;text-align:right;" class="col-7 fr clearfix">${userDetailInfo.params_remark}</div>
        </li>
        <li class="clearfix">
          <label class="col-4">注册所在地</label>
          <div style="margin-right:0.3rem;text-align:right;" class="col-7 fr clearfix">${userDetailInfo.reg_place}</div>
        </li>
        <li class="clearfix">
          <label class="col-4">企业类型</label>
          <div style="margin-right:0.3rem;text-align:right;" class="col-7 fr clearfix company-type"></div>
        </li>
        <%-- <li class="clearfix">组织机构代码证
        <input type="text" class="fr" style="width:50%;" maxlength='50' name="organ_code" id="organ_code" value="${userDetailInfo.organ_code}" readOnly/>
      </li>
        <li class="clearfix">税务登记证
          <input type="text" class="fr" maxlength='50' name="tax_register_cert" id="tax_register_cert" value="${userDetailInfo.tax_register_cert}" readOnly/>
        </li> --%>
      </div>
    <!--</c:if>-->
    <div class="list">
      <li>企业资料</li>
      <div class="about-img">
        <p class="img-tip">支持jpg、png、gif图片文件，单个图片不小于6M。照片内容清晰可见</p>
        <div class="imgContainer clearfix">
          <div class="img-list busi">
            <div class="imgContent">
              <!--<c:if test="${userInfo.info_flag eq '1'}">
                <c:if test="${not empty userDetailInfo.busi_licence_url}">-->
                  <img id="busi_licence_url_temp" src="wcDownLoadFile.html?requestData=${userDetailInfo.busi_licence_url}" alt=""/>
                  <input id="BL1" name="myfiles" type="file" capture="camera" onchange="busiLicence(1,this)"/>
                <!--</c:if>
                <c:if test="${empty userDetailInfo.busi_licence_url}">-->
                  <img id="busi_licence_url1" src="resources/images2/camera.png" alt=""/>
                  <input id="BL2" name="myfiles" type="file" capture="camera" onchange="busiLicence(1,this)"/>
                </c:if>
              </c:if>
              <!--<c:if test="${userInfo.info_flag eq '2'}">
                <c:if test="${userInfo.user_status eq '00'}">-->
                  <!-- <img id="busi_licence_url" src="resources/images/bLicense.png" alt=""/> -->
                  <img id="busi_licence_url2" src="wcDownLoadFile.html?requestData=${userDetailInfo.busi_licence_url}" alt=""/>
                  <input id="BL3" name="myfiles" type="file" capture="camera" onchange="busiLicence(1,this)"/>
                <!--</c:if>
                <c:if test="${userInfo.user_status eq '01'}">-->
                  <img id="busi_licence_url3" src="wcDownLoadFile.html?requestData=${userDetailInfo.busi_licence_url}" alt=""/>
              <!--  </c:if>
              </c:if>-->
            </div>
            <p class="textDes">营业执照</p>
          </div>
          <div class="img-list card">
            <div class="imgContent">
              <!--<c:if test="${userInfo.info_flag eq '1'}">-->
                <img id="certid_front_url1" src="resources/images2/camera.png" alt=""/>
                <input id="CF1" name="myfiles" type="file" capture="camera" onchange="busiLicence(2,this)"/>
              <!--</c:if>-->

              <!--<c:if test="${userInfo.info_flag eq '2'}">
                <c:if test="${userInfo.user_status eq '00'}">-->
                  <img id="certid_front_url2" src="wcDownLoadFile.html?requestData=${userDetailInfo.certid_front_url}" alt=""/>
                  <input id="CF2" name="myfiles" type="file" capture="camera" onchange="busiLicence(2,this)"/>
                <!--</c:if>
                <c:if test="${userInfo.user_status eq '01'}">-->
                  <img id="certid_front_url3" src="wcDownLoadFile.html?requestData=${userDetailInfo.certid_front_url}" alt=""/>
                  <!-- <input id="CF" name="myfiles" type="file" onchange="busiLicence(2,this)"/> -->
                <!--</c:if>
              </c:if>-->
            </div>
            <p class="textDes">经营者<br/>身份证正面</p>
          </div>
          <div class="img-list card">
            <div class="imgContent">
              <!--<c:if test="${userInfo.info_flag eq '1'}">-->
                <img id="certid_back_url"  src="resources/images2/camera.png" alt=""/>
                <input  id="CB1" name="myfiles" type="file" capture="camera" onchange="busiLicence(3,this)"/>
              <!--</c:if>-->
              <!--<c:if test="${userInfo.info_flag eq '2'}">
                <c:if test="${userInfo.user_status eq '00'}">-->
                  <img id="certid_back_url1" src="wcDownLoadFile.html?requestData=${userDetailInfo.certid_back_url}" alt=""/>
                  <input  id="CB2" name="myfiles" type="file" capture="camera" onchange="busiLicence(3,this)"/>
                <!--</c:if>-->
                <!--<c:if test="${userInfo.user_status eq '01'}">-->
                  <img id="certid_back_url2"  src="wcDownLoadFile.html?requestData=${userDetailInfo.certid_back_url}" alt=""/>
                  <!-- <input  id="CB" name="myfiles" type="file" onchange="busiLicence(3,this)"/> -->
                <!--</c:if>
              </c:if>-->
            </div>
            <p class="textDes">经营者<br/>身份证背面</p>
          </div>
          <input type="hidden" name="img1" value="${userDetailInfo.busi_licence_url}" id="img1" />
          <input type="hidden" name="img2" value="${userDetailInfo.certid_front_url}" id="img2" />
          <input type="hidden" name="img3" value="${userDetailInfo.certid_back_url}" id="img3" />
        </div>
        <!--<c:if test="${userInfo.info_flag eq '1'}">-->
          <p style="font-size:0.22rem;margin-top:0.2rem;margin-bottom:0.4rem;line-height:0.36rem;"><span style="color:#E80015;">*</span>请上传营业执照复印件照片或扫描件正面照，<b>复印件写明“该复印件仅用于与广州仕邦人力资源有限公司签定委托代理协议”，并盖公章（个体工商户由经营者盖手指印）</b></p>
        <!--</c:if>-->
      </div>
    </div>
    <div class="content">
      <!--<c:if test="${userInfo.info_flag eq '1'}">-->
        <input type="button" class="btn btn-big btn-blue" style="width:84%;margin-bottom:10px;" value="确定" onclick="submitForm()"/>
      <!--</c:if>-->
    </div>
    <empty></empty>
  </form>
</template>
<style lang="scss" scoped>
  /*实名验证公共样式*/
  body{
    background:#f5f6f8;
  }
  .tip{
    font-size:0.28rem;
    text-align: center;
    padding:0.32rem 0;
    color:#e2b300;
    background:#fff8de;
  }
  .tips{
    height:0.96rem;
    line-height:0.96rem;
    display:none;
    font-size:0.28rem;
    color:red;
    text-indent:0.3rem;
  }
  .finished-info{
    color:#fff;
    height:2.1rem;
    padding:0.55rem 0 0.55rem 0.3rem;
    width:100%;
    background:url("/static/images3/company-bg.png") no-repeat center center;
  }
  .finished-info p{
    text-indent:0.6rem;
  }
  .company-name{
    font-size:0.32rem;
    margin-bottom:0.3rem;
    background:url("/static/images3/company-name.png") no-repeat left center;
    background-size:0.34rem 0.34rem;
  }
  .company-busi_licence{
    font-size:0.24rem;
  }
  .company-busi_licence span{
    text-indent:0;
    display:inline-block;
    background:#f36518;
    padding:0.05rem 0.2rem;
    border-radius:0.3rem 0 0 0.3rem;
  }
  .list{
    background: #fff;
    font-size:0.28rem;
    margin-bottom:0.2rem;
  }
  .list li{
    margin-left:0.3rem;
    height:0.96rem;
    line-height: 0.96rem;
    border-bottom: 1px solid #dbdbdb;
    overflow: hidden
  }
  .list .no-border{
    border:0;
  }
  .list li input{
    margin-right:0.3rem;
    text-align: right;
    border:0;
    font-size:0.28rem;
    background:#fff;
    outline:0;
  }
  .enterPriseName{
    font-size: 0.26rem;
  }
  .next{
    margin-top:4.3rem;
    width:84%;
  }

  /*企业完善资料*/
  .about-img{
    padding:0.32rem 0.3rem 0.04rem;
  }
  .img-tip{
    font-size:0.28rem;
    color:#ccc;
    margin-bottom: 0.44rem;
  }
  .img-list{
    width:33.33%;
    float:left;
    text-align: center;
  }
  .img-list .imgContent{
    position: relative;
  }
  .img-list img{
    display: inline-block;
    width:95%;
  }
  .img-list input[type=file]{
    position:absolute;
    top:0;
    left:0;
    width:95%;
    height:1.4rem;
    opacity: 0;
    filter:alpha(opacity = 0);
  }
  .contract{
    height:0.42rem;
    line-height: 0.42rem;
    text-align: center;
    font-size:0.28rem;
    margin:0.7rem 0 0.64rem;
  }
  select{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 0.94rem;
    line-height: 0.94rem;
    border:0;
    outline:0;
    font-size:0.28rem;
    direction: rtl;
    background:#fff;
  }
  /*线下汇款相关样式*/
  .warn-tip{
    padding:0.32rem 0.3rem;
    line-height: 0.35rem;
    text-align:left;
    font-size:0.24rem;
  }
  .account-detail li{
    padding-right:0.3rem;
  }
  .account-detail .bank{
    text-indent:0.6rem;
    background-size: 0.44rem 0.42rem;
  }
  .account-detail .account{
    color:#2660ad;
  }
  input[type=checkbox] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  input[type=checkbox] {
    width: 0.42rem;
    height: 0.42rem;
    background-size: 100%;
    vertical-align: middle;
  }
  input[type=checkbox]:checked{
    background-size: 100%;
  }
  .textRed{
    height:0.96rem;
    line-height:0.96rem;
    font-size:0.32rem;
    text-indent:0.3rem;
    border-bottom:1px solid #dbdbdb;
    display:none;
  }
  .revisable{
    display:inline-block;
    height:0.94rem;
    float:right;
    padding-right:0.4rem;
    background:url("/static/images3/more.png") no-repeat right center;
    background-size:0.28rem 0.28rem;
    margin-right:0.3rem;
    color:#595757;
  }
  .pickMonth{
    width:50%;
  }
  .textDes{
    margin:0.3rem 0 0.2rem;
  }
</style>
<script>

  import empty from '../../components/empty.vue'
  import {mapState,mapMutatios} from 'vuex'
    export default{
        data(){
            return {
              contacts_linkman:'',
              contacts_phone:'',
              setEmail:''
            }
        },
      components:{
        empty
      },
      computed:{
        ...mapState(['userInfo']),
      }
    }
</script>
