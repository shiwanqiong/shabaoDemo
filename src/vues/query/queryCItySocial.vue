<template>
  <div class="container">
    <div class="query">
      <div class="search">
        <select id="searchCitySelect">
          <option value="">-请选择城市搜索-</option>
          <option value="gz">广州</option>
          <option value="sz">深圳</option>
          <option value="sh">上海</option>
          <option value="bj">北京</option>
        </select>
        <span class="searchIcon" onclick="searchCity()"></span>
      </div>
      <div class="hotList">
        <h1>热门</h1>
        <div class="list">
          <div class="city">
            <a href="http://gzlss.hrssgz.gov.cn/gzlss_web/weixin/index.xhtml" target="_blank">广州</a>
            <a href="https://shebao.szsi.gov.cn:4482/socialsecurity/" target="_blank">深圳</a>
            <a href="http://www.bjrbj.gov.cn/csibiz/indinfo/login" target="_blank">北京</a>
            <a href="http://www.12333sh.gov.cn/sbsjb/wzb/226.jsp" target="_blank">上海</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .query{
    width: 100%;
  }
  .query .search{
    position: relative;
    width: 100%;
    background-color:#fff;
    padding:0.3rem 0.6rem;
  }
  .search select{
    border:1px solid #d8d8d8;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    font-size: 0.24rem;
    padding-left:0.2rem;
    width: 100%;
    height: 0.65rem;
    line-height: 0.65rem;
    background-color: #f5f6f8;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .search .searchIcon{
    position: absolute;
    display: inline-block;
    width: 0.48rem;
    height: 0.48rem;
    top:0.4rem;
    right: 0.85rem;
    background: url("../../../static/images3/search.png") no-repeat center center;
    background-size:contain;
  }
  .hotList{
    width: 100%;
  }
  .hotList h1{
    line-height: 0.9rem;
    background-color: #f5f6f8;
    padding-left: 0.75rem;
    font-size: 0.26rem;
    color:#333;
    background-image: url("../../../static/images3/hot.png");
    background-repeat: no-repeat;
    background-size:0.3rem 0.3rem;
    background-position: 0.3rem 0.3rem;
  }
  .hotList .list{
    width: 100%;
    padding:0.15rem 0.3rem;
  }
  .list .city{
    width: 100%;
    border-bottom: 1px solid #dbdbdb;
  }
  .city>a{
    width: 23.5%;
    height: 0.45rem;
    line-height: 0.45rem;
    text-align: center;
    font-size: 0.26rem;
    color: #595757;
    display: inline-block;
    overflow: hidden;
    border-right: 1px solid #dbdbdb;
    margin: 0.3rem 0;
    box-sizing: border-box;
  }
  .city>a:last-child{
    border: 0;
  }
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
