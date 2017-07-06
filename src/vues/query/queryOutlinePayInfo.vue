<template>
  <div id="wrapper">
    <div id="scroller">
      <div id="pullDown">
        <span class="pullDownLabel"></span>
      </div>
      <ul class="query-result" style="position:relative;width:100%;">
        <li>
          <p class="date">2016-04-01</p>
          <div class="info-detail clearfix">
            <div class="fl">
              <p class="name">账户名：张三三</p>
              <p class="money">汇款金额：500000元</p>
            </div>
            <p class="result-tip fail fr">上传失败</p>
          </div>
          <div class="resubmit clearfix">
            <a href="" class="resubmit-btn fr">重新上传</a>
          </div>
        </li>
      </ul>
      <p id="null" style="display:none;text-align:center;line-height:1rem;">您目前没有汇款底单信息~~</p>
      <div id="pullUp" style="text-align:center;line-height:1rem;">
        <span class="pullUpIcon"></span><span class="pullUpLabel"></span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../../assets/css/query.scss";
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
