<template>
  <div>
    <about-social-hd :head-info="items"></about-social-hd>
    <router-view></router-view>
  </div>
</template>
<script>
  import aboutSocialHd from '../../components/aboutSocialHd.vue'
  export default{
    data(){
      return{
        items:[
          {title:'上传图片凭证',id:'outlinePayImgInfo'},
          {title:'汇款信息录入',id:'outlinePayInfo'}
        ]
      }
    },
    components:{aboutSocialHd}
  }
</script>

