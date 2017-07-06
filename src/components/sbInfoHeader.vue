<template>
  <header>
    <ul class="tab" id="tab">
     <!-- <li v-for="item in items">-->
        <router-link  :to="{name:'sbInfo',params:{id:item.id}}" tag="li" v-for="item in items">{{item.title}}</router-link>
      <!--</li>-->
    </ul>
  </header>
</template>
<script>
  export default{
    data(){
      return {
        items:[
          {title:'资讯',id:'sbInfo'},
          {title:'动态',id:'sbNews'}
        ]
      }
    }
  }
</script>
<style scoped>
  header{
    width:100%;
    height:1rem;
    border-bottom:1px solid #d6d6d6;
    margin-bottom:0.2rem;
  }
  ul li{
    float:left;
    width:50%;
    font-size:0.28rem;
    text-align:center;
    color:#666666;
    padding:0.26rem 0;
  }
  ul li.router-link-active{
    color:#2660ad;
    border-bottom:6px solid #2660ad;
  }
</style>
