/**
 * Created by Administrator on 2017/4/26.
 */
/*var checkName=name=>{
  return /^[\u4E00-\u9FA5A-Za-z0-9\(\)\（\）]+$/.test(name);
}*/
var checkLName=lName=>{
  return /^[\u4e00-\u9fa5\·]*$/.test(lName);
}
var checkPhoneNO=telNO=>{
  return /^0?(13[0-9]|15[0-9]|17[0-9]|18[0-9]|14[0-9])[0-9]{8}$/.test(telNO);
}
var checkPwd=pwd=>{
  return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(pwd);
}
var checkCode=messCode=>{
  return  /^\d{6}$/.test(messCode);
}
var checkEmail=email=>{
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
var checkBusiLicense=busiLicense=>{
  return /^(\d|[a-zA-Z])+$/.test(busiLicense);
}
function validateIdCardByReal(idCard){
  //15位和18位身份证号码的正则表达式
  var regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[X])$)$/;
  //如果通过该验证，说明身份证格式正确，但准确性还需计算
  if(regIdCard.test(idCard)){
    if(idCard.length==18){
      var idCardWi=new Array( 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ); //将前17位加权因子保存在数组里
      var idCardY=new Array( 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ); //这是除以11后，可能产生的11位余数、验证码，也保存成数组
      var idCardWiSum=0; //用来保存前17位各自乖以加权因子后的总和
      for(var i=0;i<17;i++){
        idCardWiSum+=idCard.substring(i,i+1)*idCardWi[i];
      }
      var idCardMod=idCardWiSum%11;//计算出校验码所在数组的位置
      var idCardLast=idCard.substring(17);//得到最后一位身份证号码
      //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
      if(idCardMod==2){
        if(idCardLast=="X"){
          return true;
        }else{
          return false;
        }
      }else{
        //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
        if(idCardLast==idCardY[idCardMod]){
          return true;
        }else{
          return false;
        }
      }
    }
  }
  if(idCard!=15 && idCard!=18){
    return true;
  }
};
/*var checkIDNO=IDNO=>{
  return validateIdCardByReal(IDNO);
}*/
export {checkPhoneNO,checkPwd,checkCode,checkEmail,checkLName,checkBusiLicense,validateIdCardByReal}


