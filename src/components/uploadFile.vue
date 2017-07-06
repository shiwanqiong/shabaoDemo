<template>
  <div>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<style lang="scss" scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<script>
    import Vue from 'vue'
    import ElUpload from 'element-upload'

    Vue.use(ElUpload)
    export default{
        data(){
            return {
              imageUrl:''
            };
        },
      methods:{
        handleAvatarSuccess(res,file){
          this.imageUrl=URL.createObjectURL(file.raw);
        },
        beforeAvatarUpload(file){
          const isJPG=file.type==='image/jpeg';
          const isLt2m=file.size/1024/1024<2;
          if(!isJPG){
            this.$message.error('上传头像图片只能是JPG格式！');
          }
          if(!isLt2m){
            this.$message.error('上传头像图片大小不能超过2吗！');
          }
          return isJPG && isLt2m;
        }
      }
    }
</script>
