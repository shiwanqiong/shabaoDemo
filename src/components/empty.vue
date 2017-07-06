<template>
</template>
<style lang="scss" scoped></style>
<script>
    import {mapState,mapActions} from 'vuex'
    export default{
        data(){
            return {}
        },
      mounted(){
        this.getUserInfo();
      },
      computed:{
        ...mapState(['userInfo'])
      },
      methods:{
        ...mapActions(['getUserInfo'])
      }
    }
</script>
