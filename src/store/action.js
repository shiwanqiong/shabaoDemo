/**
 * Created by Administrator on 2017/4/26.
 */
import{
  GET_USERINFO,
}from './mutation-type'
import {getUser} from '../utils/fetch'
export default {
  async getUserInfo({
    commit,
    state
  }) {
    let res = await getUser();
    commit(GET_USERINFO, res)
  }
}
