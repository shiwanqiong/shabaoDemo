<template>
  <div>
    <info-header></info-header>
    <!--<header>
      <ul class="tab" id="tab">
        <li class="active" @click="listChange('sbInfo')">资讯</li>
        <li @click="listChange('sbNews')">动态</li>
      </ul>
    </header>-->
    <section>
      <div class="info detail">
          <div v-for="item in items" class="row secContent">
            <router-link :to="{name:item.path}">
              <div class="col-4">
                <div class="secImg">
                  <img :src="item.infoImg"/>
                </div>
              </div>
              <div class="col-8">
                <h2 class="secTitle">{{item.title}}</h2>
                <p class="secTime">{{item.subTitle}}</p>
              </div>
            </router-link>
          </div>
      </div>
    </section>
  </div>
</template>
<script>
  import infoHeader from '../../../components/sbInfoHeader.vue'
  import VueResource from 'vue-resource';
  export default{
    components:{infoHeader},
    data(){
        return{
          items:[],
          apiUrl:'./static/js/sbInfo.json',
        }
    },
    created(){
        this.getLists();
    },
    watch:{
      '$route':'getLists'
    },
    methods:{
      getLists :function(){
        var index=this.$route.params.id;
        this.$http.get(this.apiUrl)
          .then(response=>{
            this.items=response.data[index];
          })
          .catch(function(response){
            console.log(response)
          })
      }
    },

  }
</script>
<style  scoped>
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
  ul li.active{
    color:#2660ad;
    border-bottom:6px solid #2660ad;
  }
  section{
    width:100%;
    padding:0 20px;
    height:auto;
    margin:0 auto;
  }

  .secContent{
    padding:20px 0;
    border-bottom: 1px solid #dfdfdf;
  }
  .secImg{
    width:1.9rem;
    height:1.4rem;
    display: inline-block;
  }
  h2.secTitle{
    font-size: 0.28rem;
    color:#323232;
    font-weight: normal;
  }
  p.secTime{
    padding-top:0.1rem;
    font-size: 0.22rem;
    color: #939393;
    position:absolute;
    bottom:0;
  }
  .secDetail{
    display:inline-block;
    width:0.16rem;
    height:0.24rem;
  }
  .secImg img,.secDetail img{
    width:100%;
    height:100%;
    vertical-align:middle;
  }
  .secDetail img{
    margin-top:0.4rem;
  }
  .secMore{
    vertical-align: middle;
    text-align: right;
  }
  section .col-8{
    padding-left:0.2rem;
    position:relative;
    height:1.4rem;
  }
  .row{
    margin-bottom:0;
    overflow: hidden;
  }

</style>
