/**
 * Created by Administrator on 2017/4/25.
 */
/*import axios from 'axios'
function login(){
  return axios.get('https://api.github/com/');
}*/
import * as loginApi from './templateData/login'
import * as authInfoApi from './templateData/userDetailInfo'
const setpromise=data=>{
  return new Promise((resolve,reject)=>{
    resolve(data);
  })
}
var login=(phoneNO,pwd,imgCode)=>setpromise(loginApi.userInfo)
var getUser=()=>setpromise(loginApi.userInfo);
function verifiedInfo(legalName,IDNO){
  return setpromise(authInfoApi.userDetailInfo);
}
export {login,getUser,verifiedInfo}
