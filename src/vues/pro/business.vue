<template>
  <section>
    <div class="list">
      <ul class="package-list">
        <li class="clearfix" v-for="item in proLists" style="padding-right:0;">
          <router-link :to="{name:'proDetail',params: { id: item.id }}" class="fl">
            <img :src="item.proImgSrc" alt="沙包10号"/>
          </router-link>
          <div class="text-des fl">
            <p class="title">{{item.proName}}</p>
            <p class="fee">{{item.proPrice}}</p>
          </div>
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
          {proImgSrc:'/static/images3/sb10.png',proPrice:'保费：10元/人/月',proName:'沙包10号',id:'sb10'},
          {proImgSrc:'/static/images3/sb42.png',proPrice:'保费：42元/人/月',proName:'沙包42号',id:'sb42'},
          {proImgSrc:'/static/images3/sb35.png',proPrice:'保费：35元/人/月',proName:'沙包35号',id:'sb35'},
          {proImgSrc:'/static/images3/sb65.png',proPrice:'保费：65元/人/月',proName:'沙包65号',id:'sb65'},
          {proImgSrc:'/static/images3/sb118.png',proPrice:'保费：118元/人/月',proName:'沙包118号',id:'sb118'},
          {proImgSrc:'/static/images3/sb15.png',proPrice:'保费：15元/人/月',proName:'沙包15号',id:'sb15'}
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
  .list{
    margin-bottom: 0.2rem;
  }
</style>
