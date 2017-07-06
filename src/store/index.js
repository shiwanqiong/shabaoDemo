/**
 * Created by Administrator on 2017/4/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutation'
import actions from './action'

Vue.use(Vuex)

const state={
  userInfo:null,
  login:window.sessionStorage.getItem('login')?window.sessionStorage.getItem('login'):false,
  /*legal_name:'',
  IDCode:'',*/
  userDetailInfo:null,
  authErrTime:window.sessionStorage.getItem('authErrTime')?window.sessionStorage.getItem('authErrTime'):0
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
