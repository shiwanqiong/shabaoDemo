<template>
  <section>
    <div class="package">
       <ul>
        <li v-for="item in proLists">
          <img :src="item.proImgSrc" alt="">
        </li>
      </ul>
    </div>
    <v-foot></v-foot>
  </section>
</template>
<script>
  import vFoot from '../../components/footer.vue'
  export default{
    data(){
      return{
        proLists:[
          {proImgSrc:'./static/images3/sb481.png'},
          {proImgSrc:'./static/images3/sb181.png'}
        ]
      }
    },
    components:{
      vFoot
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/css/shangList.scss";
  .package{
    display: block;
  }
</style>
