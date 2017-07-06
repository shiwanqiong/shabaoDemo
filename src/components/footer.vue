<template>
  <footer>
    <ul id="foot">
      <li v-for="item in items" class="col-3">
        <router-link :to="{name:item.path}" exact>
          <dl>
            <dt :id="item.id" class="small-icon-img">
            </dt>
            <dd>{{item.message}}</dd>
          </dl>
        </router-link>
      </li>
    </ul>
  </footer>
</template>
<script>
  export default{
      data(){
        return{
          items: [
            {message:'首页',id:'indexIcon',path:'index'},
            {message:'社保',id:'socialInsurerIcon',path:'social'},
            {message:'商保',id:'businessInsurerIcon',path:'business'},
            {message:'我的',id:'mineIcon',path:'mine'}
          ]
        }
      }
  }
</script>
<style scoped>

  footer{
    position: fixed;
    bottom:0;
    z-index: 98;
    background: #fff;
    width: 100%;
    height:0.98rem;
    padding-bottom:0.12rem;
    border-top:1px solid #ccc;
    padding-top:0.1rem;
  }
  #foot{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  #foot li{
    align-items: center;
    width:1rem;
    flex-grow: 1;
    flex-shrink: 1;
  }
  footer dd{
    color:#545252;
    text-align: center;
    font-size:0.20rem;
  }
  footer dt{
    width:0.54rem;
    height:0.54rem;
    margin:0 auto;
    background-repeat:no-repeat;
    background-size:100%;
  }
  footer dt img{
    width:100%;
  }
  footer a.router-link-active dd{
    color:#2660ad;
  }
  #indexIcon{
    background-image:url('../assets/home.png');
  }
  #socialInsurerIcon{
    background-image:url('../assets/indexInsurer.png');
  }
  #businessInsurerIcon{
    background-image:url('../assets/indexBusiness.png');
  }
  #mineIcon{
    background-image:url('../assets/indexUser.png');
  }
  .router-link-active #indexIcon{
    background-image:url('../assets/indexHome.png');
  }
  .router-link-active #businessInsurerIcon{
    background-image:url('../assets/businessActive.png');
  }
  .router-link-active #socialInsurerIcon{
    background-image:url('../assets/insureActive.png');
  }
  .router-link-active #mineIcon{
    background-image:url('../assets/userActive.png');
  }
</style>
