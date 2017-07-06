<template>
  <div class="container">
    <div class="basicInfo">
      <table>
        <tr>
          <td class="td1">姓&nbsp;&nbsp;&nbsp;名&nbsp;&nbsp;</td>
          <td class="td2"><input required="required" type="text" name="name" id="name" class="form-control" style="font-size: 0.26rem;" onchange="this.value=check_name_cn(this.value);"  maxlength="10" onblur="mandatory();" ></td>
        </tr>
        <tr>
          <td class="td1">身份证号&nbsp;&nbsp;</td>
          <td class="td2"><input required="required" type="text" name="card" id="card" onblur="checkInsurerAllowAdding();" style="font-size: 0.26rem;" onkeyup="value=value.replace(/[\W]/g,'')"  maxlength="18" ></td>
        </tr>
        <tr>
          <td class="td1">民&nbsp;&nbsp;&nbsp;族&nbsp;&nbsp;</td>
          <td class="td2">
            <select  id = "nation" name="nation" >
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
          </td>
        </tr>
        <tr>
          <td class="td1">电&nbsp;&nbsp;&nbsp;话&nbsp;&nbsp;</td>
          <td class="td2"><input required="required"  type="tel" name="tel" id="tel" onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="11" onblur="checkMobile();"></td>
        </tr>
      </table>
      <p id="basicInfoError" style="display:none;text-align:center;height:0.45rem;line-height:0.45rem;color:#f00;"></p>
    </div>
    <!-- <div class="infoLine"></div> -->
    <div class="detailInfo">
      <table>
        <tr style="line-height:0.95rem;">
          <td class="td1">缴纳社保&nbsp;&nbsp;</td>
          <td class="td2">
            <div class="weui_cell_ft">
              <input id="weui_socialScheme" class="weui_switch" type="checkbox" onclick="check_socialDetail()">
            </div>
          </td>
        </tr>
        <!--   社保参保类型针对图片 -->
        <tr class="socialScheme" style="display:none;">
          <td class="td1">社保首次参保</td>
          <td class="td2" style="position:relative;">
            <span style="color:#a4a4a4;font-size:0.2rem;">(是否在本地区首次参保)</span>
            <input type="radio" name="socialSecurity" id="securityTrue" value="1">
            <label for="securityTrue">是</label>&nbsp;&nbsp;
            <input type="radio" name="socialSecurity" id="securityFalse" value="2">
            <label for="securityFalse">否</label>
          </td>
        </tr>
        <tr class="socialScheme" style="display:none;">
          <td class="td1">社保参保地区</td>
          <td class="td2"><select onChange="changeProduct();" id="area" name="area"></select></td>
        </tr>
        <tr class="socialScheme" style="display:none;">
          <td class="td1">户口性质&nbsp;&nbsp;</td>
          <td class="td2">
            <select id="household" onchange="queryInsurerProduct1('A0',this);" style="width:60%"></select>
            <!-- <span class="residenceList">
                  <button onclick="queryInsurerProduct1('A0',this);" value="00">本地城镇<span class="hangzhou">(主城区)</span></button>
                  <button onclick="queryInsurerProduct1('A0',this);" value="01">本地农村<span class="hangzhou">(主城区)</span></button>
                  <button onclick="queryInsurerProduct1('A0',this);" value="10">外地城镇<span class="hangzhou">(省内市外)</span></button>
                  <button onclick="queryInsurerProduct1('A0',this);" value="11">外地农村<span class="hangzhou">(省内市外)</span></button>

                  杭州
                  <button class="distance_21" onclick="queryInsurerProduct1('A0',this);" value="21" id="outsideCountry1">外地农村(省外)</button>
                  <button class="distance_21" onclick="queryInsurerProduct1('A0',this);" value="20"  id="outside1">外地城镇(省外)</button>

              </span> -->
          </td>
        </tr>
        <tr class="socialScheme" style="display:none;">
          <td class="td1">社保参保基数</td>
          <td class="td2">
            <select style="width:48%;float:right;font-size: 0.23rem;"  id="base"  onchange="queryBasePay1();" >
              <option value="-1">请选择参保基数</option>
              <option value="1">按当地参保下限</option>
              <option value="2">按员工实际工资</option>
            </select>
            <input style="width:52%;float:left;display: none;font-size: 0.25rem;" id="salary_show"  onchange="this.value=check_input(this.value);" onblur="clear_fund_error('A0');"  >
          </td>
        </tr>
        <tr class="socialScheme" style="display:none;">
          <td class="td1">社保方案</td>
          <td class="td2">
            <select id="social_security" name="social_security" onchange="clear_social_security_error();"  onclick="checkBisu('A0');">
            </select>
          </td>
        </tr>
        <!-- <tr id="hand_show" style="display: none;">
             <td class="td1"><label>利手</label></td>
             <td class="td2">
                 <input type="radio" id="handednessYes" name="handedness" value="0">
                 <label class="pay" for="handednessYes">左手</label>
                  <input type="radio" id="handednessNo" name="handedness" checked="checked" value="1">
                  <label for="handednessNo" class="pay">右手</label>
             </td>
         </tr> -->
        <tr id="Per_Address" style="display:none;">
          <td class="td1"><label>户籍地址</label></td>
          <td class="td2">
            <input  id="permanentAddress"  name="perAddress" onblur="checkPerAddress();"/>
          </td>
        </tr>

        <!-- 2016-5-12 北京地区-银行卡   -->
        <tr class="socialScheme specialBeijin" style="display:none;">
          <td class="td1">储蓄卡卡号</td>
          <td class="td2">
            <input onblur="checkCard();"  id="beijinAccount" maxlength="21"/>
          </td>
        </tr>
        <tr class="socialScheme specialBeijin" style="display:none;">
          <td class="td1">储蓄卡银行案</td>
          <td class="td2">
            <select  id="beijinNumber" onchange="checkBank();"></select>
          </td>
        </tr>

        <!-- 公积金模块 -->
        <tr style="line-height:0.95rem;">
          <td class="td1">缴纳公积金</td>
          <td class="td2">
            <div class="weui_cell_ft">
              <input class="weui_switch" type="checkbox" id="weui_publicScheme"  onclick="clearAccumulation_fund();">
            </div>
          </td>
        </tr>
        <tr class="fundScheme" style="display:none;">
          <td class="td1">公积金首次参保</td>
          <td class="td2" style="position:relative;">
            <span style="color:#a4a4a4;font-size:0.2rem;">(是否在本地区首次参保)</span>
            <input type="radio" name="publicFunds" id="publicTrue" value="1">
            <label for="publicTrue">是</label>&nbsp;&nbsp;
            <input type="radio" name="publicFunds" id="publicFalse" value="2">
            <label for="publicFalse">否</label>
          </td>
        </tr>
        <tr class="beforeFunds" style="display:none;">
          <td class="td1">公积金转入信息</td>
          <td class="td2"><input id="beforePublicFunds"  maxlength="80"/></td>
        </tr>
        <tr class="fundScheme" style="display:none;">
          <td class="td1">公积金参保地区</td>
          <td class="td2"><select onChange="checkPublicArea();" id="publicArea" name="publicArea"></select></td>
        </tr>
        <tr class="fundScheme" style="display:none;">
          <td class="td1">公积金参保基数</td>
          <td class="td2">
            <select style="width:48%;float:right;font-size: 0.23rem;"  id="publicBase"  onchange="checkPublicBase()" >
              <option value="-1">请选择参保基数</option>
              <option value="1">按当地参保下限</option>
              <option value="2">按员工实际工资</option>
            </select>
            <input style="width:52%;float:left;display:none;font-size: 0.25rem;"  id="publicBase_value"  onchange="this.value=check_input(this.value);" onblur="clear_fund_error('C0');"  >
          </td>
        </tr>
        <tr class="fundScheme" style="display:none;">
          <td class="td1">公积金方案</td>
          <td class="td2">
            <select id="accumulation_fund" name="accumulation_fund"  onchange="clear_accumulation_fund_error();" onclick="checkBisu('C0');">
            </select>
          </td>
        </tr>
      </table>
      <p id="detailInfoError" style="display:none;text-align:center;height:0.45rem;line-height:0.45rem;color:#f00;"></p>
    </div>
    <!-- <div class="infoLine"></div> -->
    <div class="uploadImg">
      <p class="imgTitle" style="padding-left:0.15rem;">
        <span class="titleLeft">上传证件</span>
        <!-- <span class="titleRight">?</span> -->
      <p><font style="font-size:12px;padding:0 0.15rem 0 0.15rem;color: #EB6100">格式jpg、png、gif，单张照片不大于6M。照片内容清晰可见</font></p>
      </p>
      <ul>
        <li>
          <dl>
            <dt class="showBgImg1">
              <img id="certid_front_url_img" />
              <input type="file" capture="camera" name="myfiles" id="certid_front_url" onchange="busiLicence('CF',this);" style="width:100%;height:100%;opacity:0;background-color:transparent;"/>
            </dt>
            <dd>身份证正面</dd>
          </dl>
        </li>
        <li>
          <dl>
            <dt class="showBgImg2">
              <img id="certid_back_url_img"/>
              <input type="file" capture="camera" name="myfiles" id="certid_back_url" onchange="busiLicence('CB',this);" style="width:100%;height:100%;opacity:0;"/>
            </dt>
            <dd>身份证反面</dd>
          </dl>
        </li>
        <li id="photoShow">
          <dl>
            <dt class="showBgImg3" style="position:relative;">
              <img id="certid_photo_url_img"/>
              <input type="file" capture="camera" name="myfiles" id = "certid_photo_url" value="上传一寸照片" style="opacity:0;width:100%;height:100%;cursor:pointer;" onchange="busiLicence('OP',this);"/>
            </dt>
            <dd>上传一寸照片</dd>
          </dl>
        </li>
        <li id="listShow">
          <dl>
            <dt  class="showBgImg4" style="position:relative;">
              <img id="certid_list_url_img"/>
              <input type="file" capture="camera" name="myfiles" id ="certid_list_url" value="上传个人信息采集表" style="opacity:0;width:100%;height:100%;cursor:pointer;" onchange="busiLicence('PT',this);"/>
            </dt>
            <dd>上传个人信息采集表</dd>
          </dl>
        </li>
        <li id="showHukou">
          <dl>
            <dt  class="showBgImg5" style="position:relative;">
              <img id="hukou1"/>
              <input type="file" capture="camera" name="myfiles" id="hukou" value="户口本复印件" style="opacity:0;width:100%;height:100%;cursor:pointer;" onchange="busiLicence('RB',this);"/>
            </dt>
            <dd>户口本复印件</dd>
          </dl>
        </li>
      </ul>
    </div>
    <div class="body-foot">
      <a href="javascript:void(0);" onclick="perfectPersonalInsurance();" class="btn-big btn-middle btn-blue operater" style="display:inline-block;">
        <!--<c:if test="${userInfo.info_flag == 1 }">提交</c:if>-->
        提交
        <!--<c:if test="${userInfo.info_flag == 2 }">确定修改</c:if>-->
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  body{
    font-size:0.25rem;
  }
  input,select{
    width:100%;
    color:#403e3e;
    background: #fff;
    width: 100%;
    height:0.75rem;
    line-height:0.75rem;
    border: 0;
    outline: hidden;
    text-align: right;
    font-size: 0.26rem;
    text-align:right;
    margin:0.05rem 0;
  }
  .infoLine{
    width:100%;
    height:0.2rem;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;
    background-color:#f2f2f2;
  }
  .basicInfo,.detailInfo,.uploadImg{
    width:100%;
    margin-bottom:0.2rem;
    background-color:#fff;
  }
  .residenceList button{
    margin:0.03rem 0 0.03rem 0.03rem;
    padding:0.17rem 0.03rem;
    -webkit-border-radius: 5%;
    -moz-border-radius: 5%;
    border-radius: 5%;
    display:inline-block;
    background-color:#fff;
    border:1px solid #e6e6e6;
    outline:hidden;
    display:inline-block;
    width:2rem;
    text-align:center;
    color:#7d7d7d;
    font-size:0.24rem;
    border-collapse: collapse;
    border-spacing: 0;
  }
  .residenceList .on{
    background-color:#2660ad;
    color:#fff;
  }
  table{
    width:100%;
  }
  .uploadImg{
    /* border-bottom:1px solid #ccc; */
  }
  .imgTitle{
    width:100%;
    padding-left:0.3rem;
    height:0.95rem;
    line-height:0.95rem;
    margin:0 auto;
    position:relative;
    border-bottom: 1px solid #dbdbdb;
  }
  .titleLeft{
    float:left;
  }
  .titleRight{
    position:absolute;
    right:0;
    top:0.15rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display:block;
    width:0.5rem;
    height:0.5rem;
    line-height:0.5rem;
    text-align:center;
    background-color:#599df0;
    color:#fff;
  }
  ul{
    width:80%;
    margin:0 auto;
  }
  ul li{
    display:inline-block;
    width:49%;
  }
  dl{
    width:90%;
    height:100%;
    margin:5% auto;
  }
  dl dt{
    height:1.4rem;
    position:relative;
    background-color:#cccccc;
    background-image:url("/static/images3/cameraIcon.png");
    background-repeat:no-repeat;
    background-size:contain;
    background-position:center;
  }
  dl dt img{
    position:absolute;
    width:100%;
    height:100%;
    border:1px solid transparent;

  }
  dl dd{
    line-height:0.85rem;
    text-align:center;
    color:#403e3e;
    font-size:0.26rem;
  }
  .body-foot{
    width:100%;
    margin-top:0.2rem;
    margin-bottom:0.2rem;
    padding:0 0.2rem;
    text-align:center;
  }
  .btn-style{
    padding:0.2rem auto;
    width:100%;
  }

  .weui_mask{
    display:none;
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
  }
  .weui_dialog{
    position: fixed;
    z-index: 13;
    width: 85%;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    background-color: #FAFAFC;
    text-align: center;
    border-radius: 3px;
  }
  .weui_dialog_bd{
    padding: 0 20px;
    font-size: 15px;
    color: #888;
  }


  .insurerTip{
    padding:0.3rem;
    background-color:#fff8de;
    margin-bottom:0.2rem;
  }
  .insurerTip p{
    font-size:0.3rem;
    color:#e2b300;
  }
  .basicInfo table td,.detailInfo table td{
    border-bottom:1px solid #dbdbdb;
  }
  table td.td1{
    vertical-align: middle;
    width:32%;
    padding-left:0.15rem;
  }
  table td.td2{
    text-align:right;
    padding-right:0.15rem;
    width:68%;
  }
  .weui_switch{
    width:1.95rem;
    height:0.95rem;
    border-radius:0.45rem;
    vertical-align: middle;
  }
  .weui_switch:after, .weui_switch:before{
    height:0.9rem;
    width:0.95rem;
    border-radius:0.45rem;
  }
  .weui_switch:checked:after {
    -webkit-transform: translateX(1rem);
    transform: translateX(1rem);
  }
  .detailInfo .tdColor,.uploadImg .tdColor{
    color:#262525;
    font-weight:600;
  }

  input.weui_switch{
    width: 0.9rem;
    height: 0.55rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: relative;
    box-sizing: border-box;
    border:1px solid rgb(223,223,223);
    background: rgb(223,223,223);
    outline: 0;
    vertical-align: middle;
    -webkit-border-radius: 0.3rem;
    -moz-border-radius: 0.3rem;
    border-radius: 0.3rem;
  }
  input.weui_switch:checked{
    background-color: rgb(4,190,2);
    border-color: rgb(4,190,2);
  }
  input.weui_switch:before,input.weui_switch:after{
    content: "";
    position: absolute;
    top:0;
    left: 0;
    height: 0.5rem;
    width: 0.5rem;
    -webkit-border-radius: 0.3rem;
    -moz-border-radius: 0.3rem;
    border-radius: 0.3rem;
    background-color: rgb(253,253,253);
    -webkit-transition: transform 0.3s;
    -moz-transition: transform 0.3s;
    -ms-transition: transform 0.3s;
    -o-transition: transform 0.3s;
    transition: transform 0.3s;
  }
  input.weui_switch:checked:before{
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
  }
  input.weui_switch:checked:after{
    -webkit-transform: translate(0.38rem);
    -moz-transform: translate(0.38em);
    -ms-transform: translate(0.38rem);
    -o-transform: translate(0.38rem);
    transform: translate(0.38rem);
  }

  input[name='socialSecurity'],input[name='publicFunds'],input[name='handedness']{
    display: inline-block;
    width: 0.32rem;
    height: 0.32rem;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border:2px solid #c7c6cb;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    vertical-align: text-bottom;
  }
  input[type=radio]:checked{
    background: url("/static/images3/checkedIcon.png") no-repeat center;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    background-size:contain;
  }
  input[type=checkbox]:checked{
    background-image:none;
  }
  .socialScheme,.fundScheme{
    line-height:0.95rem;
  }
  select {
    direction: rtl;
    appearance:none;
    -moz-appearance:none;
    -webkit-appearance:none;
  }
  select option {
    direction: ltr;
  }
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
