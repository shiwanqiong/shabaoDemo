<template>
  <div class="container">
    <img src="resources/images/lottery/lotteryLeader1.png" alt="">
    <a id="lotteryBtn" href="wcSecurityInfoIndex.html?backUrl=${backUrl}" ></a>
  </div>
</template>
<style lang="scss" scoped>
  img{
    width:100%;
  }
  #lotteryBtn{
    display:block;
    border:none;
    position: absolute;
    width:2.5rem;
    height:0.7rem;
    background: url("/static/images3/lotteryBtn.png") no-repeat;
    background-size: 100%;
    text-align: center;
    bottom:1rem;
    left:30%;
  }
  .container{
    background-color:#11335d;
  }
</style>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
