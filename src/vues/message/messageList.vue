<template>
  <div class="container">
    <div id="null" v-if="nullMsg==true">
      <dl>
        <dt>
          <img src="resources/images3/nullMessage.png" alt="">
        </dt>
        <dd>
          您还没有消息
        </dd>
      </dl>
    </div>
    <div id="wrapper" v-else>
      <div id="scroller">
        <div id="pullDown">
          <span class="pullDownIcon"></span><span class="pullDownLabel"></span>
        </div>
        <ul class="row" id="msgList">
          <router-link :to="{}" v-for="item in items" tag="li">{{item.title}}</router-link>
        </ul>
        <div id="pullUp">
          <span class="pullUpIcon"></span><span class="pullUpLabel"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .container{
    margin-top:0.2rem;
  }
  #null{
    margin-top:45%;
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
  dt img{
    width:100%;
  }
  .touch{
    overflow: hidden;
    padding-left:0.3rem;
    position: relative;
    background-color: #ffffff;
  }
  .item{
    overflow: hidden;
    width:125%;
    -webkit-transition: all  0.3s linear;
    -moz-transition: all  0.3s linear;
    -ms-transition: all  0.3s linear;
    -o-transition: all  0.3s linear;
    transition: all  0.3s linear;
  }
  .msgText{
    padding-top:0.2rem;
    padding-bottom:0.2rem;
    width:80%;
  }
  .desc{
    padding-right:0.2rem;
    margin-top:0.1rem;
    padding-left:0.2rem;
  }
  .titleP{
    color:#403e3e;
  }
  .detailP{
    font-size:0.26rem;
    margin-top:0.18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color:#595757;
  }

  .date{
    float: right;
    font-size: 0.22rem;
    color:#d0d0d0;
  }
  .msgIcon{
    display: block;
    width:0.9rem;
    height:0.9rem;
    background-size: 100%;
    background-repeat: no-repeat;
    margin-top:0.1rem;
  }
  .icon{
    position: relative;
  }
  .col-2{
    width:15.66%;
  }
  .col-3{
    width:20%;
  }
  .feeTip .msgIcon{
    background-image: url('../../../static/images3/feeTip.png');
  }
  .inform .msgIcon{
    background-image: url('../../../static/images3/activityTip.png');
  }
  .warn .msgIcon{
    background-image: url('../../../static/images3/oprateTip.png');
  }
  .deleteBtn{
    display: block;
    height:1.42rem;
    line-height: 1.42rem;
    color:#ffffff;
    background-color:#ea5504;
    font-size: 0.32rem;
    text-align: center;
    width:90%;
  }
  .selected{
    transform: translate(-18%,0);
    -webkit-transition:all 0.3s linear;
  }
  .newMsg .undoFlag{
    display: block;
    position: absolute;
    width:0.16rem;
    height:0.16rem;
    border-radius:0.08rem;
    background-color:#ff0000;
    right:0;
    top:0.1rem;
  }
  #wrapper{
    bottom:0;
  }
</style>
<script>
  export default{
    data(){
      return {
        nullMsg:false,
        items:[
          {title:'域名变更提醒',msg:'【沙包在线】客官，沙包在线已于2016年5月31日完成网站域名变更，新域名为www.shabaozaixian.com，望知悉。沙包在线，祝您生活愉快！'}
        ]
      }
    }
  }
</script>
