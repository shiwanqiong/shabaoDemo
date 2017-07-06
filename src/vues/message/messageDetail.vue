<template>
  <div class="container">
    <div class="msgDetail">
      <div class="title">
        <p class="titleP">
        </p>
        <span id="date" style="font-size:0.24rem;float:right;line-height:0.5rem;"></span>
      </div>

      <p class="detailP">

      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  body{
    background-color: #ffffff;
  }
  .msgDetail{
    padding:0 0.3rem;
  }
  .titleP{
    font-size:0.32rem;

    color:#262525;
    width:60%;
    float:left;
  }
  .detailP{
    line-height:0.5rem;
  }
  .title{
    overflow:hidden;
    padding:0.5rem 0rem;
  }
</style>
<script>
  export default{
    data(){
      return {
      }
    }
  }
</script>
