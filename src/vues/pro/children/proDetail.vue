<template>
  <div>
    <div class="package-img">
      <img :src="items.proImg" :alt="items.title">
    </div>
    <div class="package-introduce">
      <div class="list text-des clearfix">
        <div class="row clearfix">
          <p class="title fl">{{items.title}}</p>
        </div>
        <div class="row">
          <p class="service-fee fee35">{{items.des}}</p>
        </div>
      </div>
      <div class="des-list list">
        <h5 class="p-title"><p>{{suitInfo.title}}</p></h5>
        <div class="content">
          <ul class="package-content clearfix">
            <li v-for="item in suitInfo.conList">
              <dl>
                <dt><img :src="item.imgSrc" alt=""></dt>
                <dd>{{item.des}}</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <div v-for="block in infoBlock" class="des-list">
        <h5 class="p-title"><p>{{block.title}}</p></h5>
        <div class="content" style="padding-top:0;">
          <ul class="ensure-content">
            <li v-for="item in block.conList">
              <p><span class='circle'></span>{{item.title}}</p>
              <ul>
                <li v-for="list in item.subList">
                  <p><span class="ensure-money">{{list.subT}}</span> </p>
                  <p v-for="msgList in list.msg">{{msgList}}</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="operate operate18 clearfix">
      <a href="orderCIIndex.html?set_id=${set_id}">我要购买</a>
    </div>
  </div>
</template>
<script>
  import {proDetail} from '../../../assets/js/proContent'
  export default{
    data(){
      return{
          items:null,
          suitInfo:null,
          infoBlock:null
      }
    },
    created(){
        var index=this.$route.params.id;
        this.items=proDetail[index];
        this.suitInfo=this.items.suitInfo;
        this.infoBlock=this.items.infoBlock;
    }
  }
</script>
<style lang="scss" scoped>
  @import "../../../assets/css/proDetail.scss";

</style>
