<template>
  <div  class="text-box">
    <el-tabs v-model="activeName">
    <el-tab-pane label="填写商品信息" name="first">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="商品名称">
          <el-col :span="11">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="商品封面">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="生产厂家">
          <el-col :span="11">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="描述">
          <el-col :span="11">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="商品分组">
          <el-col :span="11">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="处方药" value="0"></el-option>
              <el-option label="非处方药" value="1"></el-option>
            </el-select>
          </el-col>
        </el-form-item>
        <el-form-item label="价格">
          <el-col :span="11">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="删除线价格">
           <el-col :span="11">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="库存">
           <el-col :span="11">
            <el-input v-model="form.name"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="上架时间">
          <el-col :span="11">
               <el-radio-group v-model="form.resource">
                  <div>
                    <el-radio label="立即上架"></el-radio>
                  </div>
                   <div style="display:flex;align-items:center">
                     <el-radio label="定时上架"></el-radio>
                     <div class="block">
                        <span class="demonstration">默认</span>
                        <el-date-picker
                          v-model="valueTime"
                          type="datetime"
                          size="small"
                          placeholder="选择日期时间">
                        </el-date-picker>
                      </div>
                  </div>
                   <div>
                    <el-radio label="暂不上架"></el-radio>
                  </div>
                </el-radio-group>
          </el-col>
        </el-form-item>
        <el-form-item label="商品详情">
          <el-col :span="11">
            <el-input type="textarea" v-model="form.resource"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit" style="width:100px">下一步</el-button>
          <el-button style="width:100px">重置</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        imageUrl: '',
        valueTime:''
 
      };
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      // 上传图片
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
    created() {
    },
  };
</script>

<style scoped lang="scss">
.text-box{
  /deep/ .avatar-uploader{
     height: 100px;
    /deep/ .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    /deep/  .el-upload:hover {
        border-color: #409EFF;
      }
  }
  /deep/ .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  /deep/ .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  /deep/ .el-tabs__nav{
    /deep/ .el-tabs__active-bar{
      background-color: #E4E7ED;
    }
  }
  /deep/ .el-tabs__item.is-active {
      color:#303133;
    }
}
</style>