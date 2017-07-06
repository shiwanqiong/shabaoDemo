<template>
  <div>
    <p class="auditState">
     <!-- <c:if test="${empty userDetailInfo.temp_busilicence_url }">-->
			<span>非常抱歉，系统认证失败</span>
      <!--</c:if>-->
      <!--<c:if test="${not empty userDetailInfo.temp_busilicence_url}">-->
			<span style="display: none">人工认证审核中</span>
      <!--</c:if>-->
    </p>
    <p class="tip"><span class="textRed">*</span>请上传营业执照复印件照片或者扫描件正面照，支持jpg、png、gif图片文件，单个图片小于6M。<b>复印件请写明“该复印件仅用于与广州仕邦人力资源有限公司签定委托代理协议”，并盖公章（个体工商户由经营者盖手指印）</b></p>
    <div class="img">
      <!--<c:if test="${empty userDetailInfo.temp_busilicence_url }">-->
        <img style="display: none" src="/static/images3/camera.png" id="temp_BL"/>
      <!--</c:if>-->
      <!--<c:if test="${not empty userDetailInfo.temp_busilicence_url}">-->
        <img src="wcDownLoadFile.html?requestData=${userDetailInfo.temp_busilicence_url}" width=100% id="temp_bu"/>
      <!--</c:if>-->
      <input type="hidden" id="temp_busilicence_url" value="">
      <input type="file"  id="TBL" name="myfiles" onchange="uploadFile(1,this)"/>
      <p class="title">上传营业执照</p>
    </div>
    <p class="warn-tip" style="margin-bottom:0.3rem;">您已经成功申请沙包在线人工审核认证，我们将在1-2个工作日以短信方式反馈审核结果，请耐心等待。如有疑问，可联系在线客服热线：400-835-8135</p>
    <a class="btn btn-big btn-blue" style="margin-bottom:10px;" onclick="ManualAuth();">确认提交</a>
    <empty></empty>
  </div>
</template>
<style lang="scss" scoped>
  .warn-tip{
    width:84%;
    margin:0 auto;
    font-size:0.26rem;
    line-height:0.5rem;
    color:#ccc;
  }
  .img{
    position:relative;
    width:4.4rem;
    margin:0.44rem auto;
  }
  .img img,.img input{
    width:4.4rem;
    height:2.8rem;
  }
  .img input{
    position: absolute;
    top:0;
    left:0;
    opacity: 0;
    filter: alpha(opacity = 0);
  }
  .title{
    height:0.9rem;
    line-height: 0.9rem;
    font-size: 0.3rem;
    color:#676666;
    text-align: center;
  }
  .btn{
    width:84%;
    margin-top:1rem;
  }
  .tip{
    font-size:0.24rem;
    padding:0 0.3rem;
    line-height:0.36rem;
  }
  .auditState{
    font-size:0.36rem;
    height:0.8rem;
    line-height:0.8rem;
    padding:0 0.3rem;
    font-weight:bold;
  }
</style>
<script>
    import empty  from '../../../components/empty.vue'
    import {mapState,mapActions} from 'vuex'
    export default{
        data(){
            return {}
        },
      components:{empty},
      watch:{
        userInfo:function(val){
          this.getUserInfo=val||{}
        }
      }
    }
</script>
