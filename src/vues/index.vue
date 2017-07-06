<template>
  <section>
    <banner></banner>
    <ul id="menu">
        <li v-for="item in items" :id="item.id" class="col-4">
          <router-link :to="{name:item.path,params:{id:item.params}}">
            <dl>
              <dt>
              </dt>
              <dd>{{item.message}}</dd>
            </dl>
          </router-link>
        </li>
    </ul>
    <div class="proList">
      <h3 class="lightLine">热门产品 <span></span></h3>
      <ul>
        <li v-for="item in proLists[userIndex]">
            <router-link :to="{name:item.path}">
              <img :src="item.proImgSrc" alt="">
            </router-link>
        </li>
      </ul>
    </div>
    <v-foot></v-foot>
    <empty></empty>
  </section>
</template>
<script>
  import banner from '../components/banner.vue'
  import vFoot from '../components/footer.vue'
  import empty from '../components/empty.vue'
  import {mapState,mapActions} from 'vuex'
  export default{
    data(){
      return{
        items:[
          {message:"活动中心",id:"activity",path:'activityIndex',params:''},
          {message:"社保资讯",id:"socialInfo",path:'sbInfo',params:'sbInfo'},
          {message:"我的查询",id:"socialSer",path:'queryIndex',params:''},
          {message:"购买指引",id:"buyGuid",path:'wcGuider',params:''},
          {message:"五险一金计算器",id:"calculator",path:'calculator',params:''},
          {message:"我是包工头",id:"baogongtou",path:'baogongtou',params:''},
        ],
        proLists:[
          [
            {proImgSrc:'/static/images3/sb18.jpg',path:'sb18Detail'},
          ],
          [
            {proImgSrc:'/static/images3/sb48.png',path:'sb48Detail'},
          ],
          [
            {proImgSrc:'/static/images3/sb48.png',path:'sb48Detail'},
            {proImgSrc:'/static/images3/sb18.jpg',path:'sb18Detail'},
          ]

        ],
        userType:''
      }
    },
    components: {vFoot,banner,empty},
    computed:{
      ...mapState(['userInfo']),
      userIndex(){
        if(!this.userType||this.userType==''){
          return 2;
        }
        if(this.userType=='1'){
          return 0
        }
        if(this.userType=='2'){
          return 1
        }
      },
    },
    methods:{
      ...mapActions(['getUserInfo'])
    },
    watch:{
      userInfo:function(val){
        this.getUserInfo=val||{};
        this.userType=this.getUserInfo&&this.getUserInfo.user_type||'';
      }
    }
  }
</script>
<style scoped>
  #menu{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  #menu li{
    width: 1rem;
    flex-grow: 1;
    flex-shrink: 1;
  }
  .container{
    padding-bottom:0.98rem;
  }
  dd{
    text-align: center;
  }
  dt{
    margin:0 auto;
    text-align: center;
  }
  .ulFloat{
    overflow: hidden;
  }
  #menu{
    background-color:#f5f6f8;
  }
  #menu li{
    margin:0.15rem 0 0 0.15rem;
    background-color: #ffffff;
    padding-top:0.3rem;
    padding-bottom:0.25rem;
  }
  #menu li.col-4{
    width:30.5%;
  }
  #menu dd{
    font-size:0.24rem;
    margin-top:0.22rem;
    color:#595757;
  }
  #menu dt{
    width:0.7rem;
    height:0.7rem;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  #activity dt{
    background-image: url("../../static/images3/indexActity.png");
  }
  #activity:hover dt{
    background-image: url("../../static/images3/activityActive.png");
  }
  #socialInfo dt{
    background-image: url("../../static/images3/indexSocialInfo.png");
  }
  #socialInfo:hover dt{
    background-image: url("../../static/images3/socialInfoActive.png");
  }
  #socialSer dt{
    background-image: url("../../static/images3/indexSocialSear.png");
  }
  #socialSer:hover dt{
    background-image: url("../../static/images3/socialSearActive.png");
  }
  #buyGuid dt{
    background-image: url("../../static/images3/indexGuide.png");
  }
  #buyGuid:hover dt{
    background-image: url("../../static/images3/guideActive.png");
  }
  #calculator dt{
    background-image: url("../../static/images3/indexCalculator.png");
  }
  #calculator:hover dt{
    background-image: url("../../static/images3/calculatorActive.png");
  }
  #baogongtou dt{
    background-image: url("../../static/images3/indexBgt.png");
  }
  #baogongtou:hover dt{
    background-image: url("../../static/images3/bgtActive.png");
  }
  .proList{
    background-color: #ffffff;
    padding-bottom:0.3rem;
  }
  .proList h3{
    font-size: 0.32rem;
    color:#595757;
    padding-left:0.3rem;
    position: relative;
    font-weight: normal;
    line-height: 0.94rem;
    margin-top:0.15rem;
  }
  .proList ul{
    padding:0 0.3rem;
  }
  .proList ul li{
    margin-top:0.3rem;
  }
  .proList ul li img{
    width:100%;
  }
  h3 span{
    display: block;
    position: absolute;
    width:0.06rem;
    height:0.7rem;
    background-color:#2660ad;
    left:0;
    top:0.12rem;
  }
</style>
