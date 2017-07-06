<template>
    <div>
      <div class="package-img">
        <img :src="items.proImg" width="100%" height="100%" alt="沙包18号"/>
      </div>
      <div class="package-introduce">
        <div class="list text-des clearfix">
          <div class="row clearfix">
            <p class="title fl">{{items.title}}</p>
            <!-- <span class="tip-icon">赠送两个月意外险</span> -->
          </div>
          <div class="row">
            <p class="service-fee fee18">{{items.des}}</p>
          </div>
        </div>
        <social-pro-com :social-info="items"></social-pro-com>
      </div>
      <div class="operate operate18 clearfix">
        <router-link :to="{name:'chooseInsurer'}">我要购买</router-link>
      </div>
    </div>
</template>
<script>
  import {proDetail} from '../../../assets/js/proContent'
  import socialProCom from './socialProCom.vue'
  export default{
    components:{socialProCom},
    data(){
      return{
        items:proDetail['sb18']
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../../assets/css/proDetail.scss';
</style>

