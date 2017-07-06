<template>
  <div class="container">
    <div id="tab" class="lightLine">
      <ul>
        <li v-for="item in items" :data="item.id" class="col-4">
          {{item.title}}
        </li>
      </ul>
    </div>
    <div id="null" style="display: none">
      <p class="tip">
        如果您的参保人数过多，建议到沙包官网操作
      </p>
      <div id="nullMsg">
        <dl>
          <dt>
            <img src="/static/images3/nullInsuere.png" alt="">
          </dt>
          <dd>
            您还没有参保人
          </dd>
        </dl>
        <div class="addInsurerBtn">
          <input type="button" class="btn btn-big btn-white" value="+添加参保人">
        </div>
      </div>
    </div>
    <div id="msgList">
      <div class="search">
        <input type="text" id="name" placeholder="请输入参保人名字">
        <span class="searBtn"></span>
      </div>
      <p class="titleP">您的所有参保人（共<span id="totalNum"></span>人）</p>
      <div id="wrapper">
        <div id="scroller">
          <div id="pullDown">
            <span class="pullDownLabel"></span>
          </div>
          <ul class="insurerList">
              <router-link :to="{name:'personalInfo'}" v-for="list in insurerList" tag="li" class="lightLine added">
                <p class="col-3">{{list.name}}<span class="flag"></span></p>
                <p class="col-5">{{list.certId}}</p>
                <p class="col-4">{{list.status}}</p>
                <span class="arrowRight"></span>
              </router-link>
          </ul>
          <p style="line-height:1rem;text-align:center;display:none;font-size:0.26rem;" id="null1"></p>
          <div id="pullUp">
            <span class="pullUpIcon"></span><span class="pullUpLabel"></span>
          </div>
        </div>
      </div>
      <div class="addPersonBtn">
        <a href="wcAddInsurerReq.html" class="btn btn-blue btn-big">新增参保人</a>
      </div>
      <div class="addBPersonBtn" style="display:none">
        <a href="wcAddBInsurerReq.html" class="btn btn-blue btn-big">新增参保人</a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  #nullMsg{
    margin-top:30%;
  }
  #null dd{
    font-size:0.32rem;
    color:#cccccc;
    text-align: center;
    margin-top:0.6rem;
  }
  #null dl{
    overflow: hidden;
  }
  #null dt{
    width:33.3%;
    margin:0 auto;
  }
  .tip{
    line-height:0.94rem;
    font-size:0.28rem;
    color:#e6bd38;
    background-color: #fff8de;
    text-align: center;
  }
  dt img{
    width:100%;
  }
  .addInsurerBtn{
    padding:0 0.3rem;
    margin-top:1.5rem;
  }
  #tab{
    height:0.94rem;
    background-color: #fff;
    border:1px solid #dbdbdb;
  }
  #tab li{
    line-height:0.94rem;
    color:#585757;
    font-size:0.32rem;
    text-align: center;
  }
  #tab li.active{
    color:#2660ad;
    border-bottom:0.06rem solid #2660ad;
    line-height:0.88rem;
  }
  .search{
    padding:0.3rem 0.6rem;
    background-color: #ffffff;
    position: relative;
  }
  .search input{
    height:0.62rem;
    line-height:0.62rem;
    border:1px solid #d6d6d6;
    padding-left:0.25rem;
    border-radius: 0.06rem;
    background-color: #f5f6f8;
    font-size: 0.22rem;
    width:100%;
  }
  .searBtn{
    width:0.4rem;
    height:0.44rem;
    display:block;
    position:absolute;
    background: url('/static/images3/search.png') no-repeat;
    background-size: 100%;
    right:0.9rem;
    top:0.4rem;
  }
  .titleP{
    line-height:0.94rem ;
    background-color: #f5f6f8;
    padding-left:0.3rem;
    color:#403e3e;
  }
  .insurerList li{
    background-color: #ffffff;
    line-height: 0.94rem;
    padding:0 0.3rem;
    overflow: hidden;
    position:relative;
  }
  .insurerList a{
    cursor:pointer;
  }
  .insurerList li p{
    color:#595757;
    font-size:0.26rem;
  }
  p.col-3{
    width:22%;
  }
  p.col-5{
    width:44.6%;
  }
  p.col-4{
    text-align: center;
  }
  .addPersonBtn,.addBPersonBtn{
    position: fixed;
    bottom:0;
    width:100%;
  }
  .addPersonBtn input,.addBPersonBtn input{
    width:100%;
  }
  .added p.col-4{
    color:#2685ad;
  }
  .stoped p.col-4{
    color:#ad5926;
  }
  .adding p.col-4{
    color:#26ad5c;
  }
  .stoping p.col-4{
    color:#26ad5c;
  }
  .insurered p.col-4{
    color:#2660ad;
  }
  .normal p.col-4{
    color:#2660ad;
  }
  .arrowRight{
    position: absolute;
    width:0.22rem;
    height:0.27rem;
    right:0.3rem;
    top:0.36rem;
    background:url('/static/images3/right.png') no-repeat;
    background-size:cover;
  }
</style>
<script>
    export default{
        data(){
            return {
              items:[
                {title:'社保',id:'1'},
                {title:'公积金',id:'2'},
                {title:'商保',id:'3'}
              ],
              insurerList:[
                {name:'陈青岛八',certId:'640521199712312408',status:'正常'},
                {name:'陈青岛八',certId:'640521199712312408',status:'正常'},
                {name:'陈青岛八',certId:'640521199712312408',status:'正常'},
                {name:'陈青岛八',certId:'640521199712312408',status:'正常'}
              ]
            }
        },
    }
</script>
