<template>
  <div class="container">
    <ul>
      <router-link tag="li" :to="{name:item.path}" v-for="item in items">
        <div>
          <img :src="item.imgSrc" alt="">
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default{
     data(){
       return {
         items:[
           {imgSrc:'./static/images3/activety1.png',path:'activityDetail'}
         ]
       }
     }
  }
</script>
<style lang="scss" scoped>
  .container{
    padding:0.3rem 0.3rem 0;
  }
  img{
    width:100%;
  }
</style>
