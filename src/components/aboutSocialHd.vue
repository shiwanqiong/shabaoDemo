<template>
  <header>
    <ul class="tab" id="tab">
      <!-- <li v-for="item in items">-->
      <router-link :to="{name:item.id}" tag="li" v-for="item in items" exact>{{item.title}}</router-link>
      <!--</li>-->
    </ul>
  </header>
</template>
<script>
  export default{
    data(){
      return {
        items:null
      }
    },
    props:['headInfo'],
    created(){
      this.items=this.headInfo;
      console.log('-----------------'+this.items);
    }
  }
</script>
<style scoped>
  #tab{
    height:0.94rem;
    background-color: #fff;
    border:1px solid #dbdbdb;
  }
  #tab li{
    display: block;
    width:50%;
    float: left;
    line-height:0.94rem;
    color:#595757;
    font-size:0.32rem;
    text-align: center;
  }
  #tab li.router-link-active{
    color:#2660ad;
    border-bottom:0.06rem solid #2660ad;
    line-height: 0.88rem;
  }
</style>
