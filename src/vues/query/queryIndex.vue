<template>
  <div class="list">
    <ul class="query-list">
      <router-link :to="{name:item.path}" v-for="item in items" tag="li" class="lightLine">{{item.title}}<span class="arrowRight"></span></router-link>

      <!--<c:if test="${userInfo.userType eq '1'}">-->
        <!--<a href="wcSocialAccountInfoReq.html">-->
     <!-- </c:if>-->
     <!-- <c:if test="${userInfo.userType eq '2'}">
        <a href="wcQuerySocialAccountInfoDetail.html">
      </c:if>-->
      <!--<li class="lightLine">社保/公积金账号查询 <span class="arrowRight"></span></li></a>-->
    </ul>
  </div>
</template>
<style lang="scss" scoped>
  body{background:#f5f6f8;}
  .list{
    background: #fff;
    margin-top:0.2rem;
    padding-left:0.3rem;
  }
  .query-list li{
    height:0.96rem;
    line-height: 0.96rem;
    font-size: 0.3rem;
    position:relative;
  }
  .arrowRight{
    position: absolute;
    width: 0.22rem;
    height: 0.27rem;
    right: 0.3rem;
    top: 0.36rem;
    background: url('../../../static/images3/right.png') no-repeat;
    background-size: cover;
  }
  .query-list a{
    color:#403e3e;
  }
  .tip{
    color:#ccc;
    margin-right:0.3rem;
  }
</style>
<script>
    export default{
        data(){
            return {
              items:[
                {title:'我的沙包人社记录查询',path:'querySocialIndex'},
                {title:'汇款底单信息查询',path:'queryOutlinePayInfo'},
                {title:'申报结果查询',path:'queryDeclareInfo'},
                {title:'社保/公积金账号查询',path:'socialAccountList'},
                {title:'理赔结果查询',path:''},
                {title:'城市人社查询',path:'queryCitySocial'}
              ]
            }
        }
    }
</script>
