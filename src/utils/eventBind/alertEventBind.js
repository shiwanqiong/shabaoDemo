/**
 * Created by Administrator on 2017/5/23.
 */
import EventBus from '../eventBus';

export default function(alertRef){
  if(!alertRef) return;

  EventBus.$on('alert',function(){alertRef.alert()});

  EventBus.$on('close',function(){alertRef.close()});
}
