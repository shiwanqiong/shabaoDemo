/**
 * Created by Administrator on 2017/5/23.
 */
/*import EventBus from '../eventBus'

export default {
  methods:{
    alert:function(){
      EventBus.$emit('alert');
    },
    close:function(){
      EventBus.$emit('close');
    }
  }
}*/
import sbAlert from '../../components/alert.vue'

sbAlert.install=function(Vue){
  Vue.component(sbAlert.name,sbAlert);
  Vue.prototype.$sbalert=function(){


 }
}
export default sbAlert
