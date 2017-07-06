/**
 * Created by Administrator on 2017/4/26.
 */
import {
  RECORD_USERINFO,
  GET_USERINFO,
 /* UPDATE_AUTHFLAG,*/
  RECORD_USERDETAILINFO,
  RECORD_AUTHERRTIME
}from './mutation-type'
export default{
  [RECORD_USERINFO](state,info)
  {
    state.userInfo=info;
    state.login=true;
  },
  [RECORD_USERDETAILINFO](state,detailInfo)
  {
    state.userDetailInfo=detailInfo;
  },
  [GET_USERINFO](state,info){
      if(state.userInfo&&!(state.userInfo.user_nname==info.user_nname)){
        return;
      }
      if(!state.login){
        return;
      }
      if(!info.message){
        state.userInfo={...info};
      }
      else{
        state.userInfo=null;
      }
  },
  /*[UPDATE_AUTHFLAG](state,payload){
    state.userInfo=Object.assign({},state.userInfo,{'auth_flag':payload.auth_flag});
    state.legal_name=payload.legal_name;
    state.IDCode=payload.IDCode
  },*/


}

