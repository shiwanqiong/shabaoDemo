<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'app',
}
</script>

<style>
  @import "assets/css/common.scss";
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  section{
    padding-bottom:0.98rem;
  }
</style>
