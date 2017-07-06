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
      return {
        items:[
          {title:'五险一金',id:'socialInsure'},
          {title:'缴社保的好处',id:'socialBenefit'}
        ]
      }
    },
    components:{aboutSocialHd}
  }
</script>
