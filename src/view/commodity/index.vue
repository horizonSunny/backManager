<template>
  <div class="text-box">
    <el-tabs v-model="activeName">
      <el-tab-pane label="填写商品信息" name="first">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="100px"
        >
          <el-form-item label="商品名称" prop="productName">
            <el-col :span="11">
              <el-input
                v-model="ruleForm.productName"
                maxlength="30"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品封面" prop="image">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-change="handlePictureCard"
              :auto-upload="false"
              :limit="1"
              :file-list="fileList"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="生产厂家" prop="manufacturer">
            <el-col :span="11">
              <el-input
                v-model="ruleForm.manufacturer"
                maxlength="30"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="描述" prop="describe">
            <el-col :span="11">
              <el-input v-model="ruleForm.describe" maxlength="80"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="商品分组" prop="productType">
            <el-col :span="11">
              <el-select
                v-model="ruleForm.productType"
                placeholder="请选择活动区域"
              >
                <el-option label="处方药" :value="0"></el-option>
                <el-option label="非处方药" :value="1"></el-option>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item label="价格" prop="price">
            <el-col :span="11">
              <el-input v-model.number="ruleForm.price"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="删除线价格" prop="vipPrice">
            <el-col :span="11">
              <el-input v-model.number="ruleForm.vipPrice"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="产品规格" prop="productSpecif">
            <el-col :span="11">
              <el-input v-model="ruleForm.productSpecif"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="库存" prop="stock">
            <el-col :span="11">
              <el-input v-model.number="ruleForm.stock"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="上架时间" prop="isShow">
            <el-col :span="11">
              <el-radio-group v-model="ruleForm.isShow">
                <div>
                  <el-radio :label="1">立即上架</el-radio>
                </div>
                <div style="display:flex;align-items:center">
                  <el-radio :label="2">定时上架</el-radio>
                  <div class="block">
                    <span class="demonstration">默认</span>
                    <el-date-picker
                      :disabled="ruleForm.isShow !== 2"
                      v-model="ruleForm.shelfTime"
                      type="datetime"
                      size="small"
                      placeholder="选择日期时间"
                    >
                    </el-date-picker>
                  </div>
                </div>
                <div>
                  <el-radio :label="0">暂不上架</el-radio>
                </div>
              </el-radio-group>
            </el-col>
          </el-form-item>
          <el-form-item label="商品详情" prop="producInfo">
            <el-col :span="11">
              <el-input
                type="textarea"
                v-model="ruleForm.producInfo"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="onSubmit('ruleForm')"
              style="width:100px"
              >下一步</el-button
            >
            <el-button style="width:100px" @click="resetruleForm('ruleForm')"
              >重置</el-button
            >
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import validate from '@/utils/validate.js'
import { newProduct, editProduct } from '@/api/index.js'
export default {
  data () {
    return {
      activeName: 'first',
      ruleForm: {
        productName: '',
        image: '',
        manufacturer: '',
        describe: '',
        productType: 0,
        price: '',
        vipPrice: '',
        productSpecif: '',
        stock: '',
        isShow: 1,
        shelfTime: '',
        producInfo: ''
      },
      id: '',
      fileList: [],
      rules: {
        productName: [
          { required: true, message: '请输入商品名称', trigger: 'blur' },
          { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' }
        ],
        manufacturer: [
          { required: true, message: '请填写生产厂家', trigger: 'blur' }
        ],
        describe: [
          { required: true, message: '请填写商品描述', trigger: 'blur' }
        ],
        productType: [
          { required: true, message: '请选择商品类别', trigger: 'blur' }
        ],
        price: [
          { required: true, message: '请填写商品价格', trigger: 'blur' },
          { type: 'number', message: '商品价格为数字' }
        ],
        vipPrice: [
          { required: true, message: '请填写折扣价格', trigger: 'blur' },
          { type: 'number', message: '折扣价格为数字' }
        ],
        productSpecif: [
          { required: true, message: '请填写商品规格', trigger: 'blur' }
        ],
        stock: [
          { required: true, message: '请填写商品库存', trigger: 'blur' },
          { type: 'number', message: '库存为数字' }
        ],
        producInfo: [
          { required: true, message: '请填写商品详情', trigger: 'blur' }
        ]
      },
      type: 'new'
    };
  },
  methods: {
    onSubmit (formName) {
      let validateInfo = true
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('success')
        } else {
          console.log('error submit!!');
          validateInfo = false
          return false;
        }
      });
      // 校验失败返回
      if (!validateInfo) {
        return false
      }
      let Rules = [
        { name: 'shelfTime', type: 'required', errmsg: '请选择商品上架时间' }
      ]
      let valLoginRes = validate.validate(this.ruleForm, Rules)
      // 校验时间和产品图
      if (!valLoginRes.isOk && this.ruleForm.isShow === 2) {
        this.$message.error('请选择商品上架时间');
        return false
      }
      if (this.type !== 'edit' && this.ruleForm.image === '') {
        this.$message.error('请选择商品封面');
        return false
      }
      // 
      const params = this.ruleForm
      if (this.ruleForm.isShow === 2 || this.ruleForm.shelfTime) {
        params.shelfTime = new Date(this.ruleForm.shelfTime).getTime();
      }
      params.file = params.image
      // 建立new formdata 
      const formData = new FormData()
      for (let item in params) {
        formData.append(item, params[item])
      }
      if (this.type === 'new') {
        newProduct(formData).then(() => {
          this.$router.push('shoppingMall')
          console.log('发送成功');
        })
      } else {
        formData.append('id', this.id)
        editProduct(formData).then(() => {
          this.$router.push('shoppingMall')
          console.log('发送成功');
        })
      }
    },
    // 选择图片
    handlePictureCard (file) {
      this.ruleForm.image = file.raw
      console.log('file.url_', this.ruleForm.image);
    },
    resetruleForm (ruleFormName) {
      console.log(this.$refs[ruleFormName]);
      this.$refs[ruleFormName].resetFields();
    }
  },
  created () {
    console.log('this.$route.params_', this.$route.params)
    const productInfo = this.$route.params
    if (JSON.stringify(productInfo) !== "{}") {
      this.type = 'edit'
      this.id = productInfo.id
      this.ruleForm.productName = productInfo.productName
      this.ruleForm.manufacturer = productInfo.manufacturer
      this.ruleForm.describe = productInfo.describe
      this.ruleForm.productType = productInfo.productType
      this.ruleForm.price = productInfo.price
      this.ruleForm.otPrice = productInfo.otPrice
      this.ruleForm.productSpecif = productInfo.productSpecif
      this.ruleForm.stock = productInfo.stock
      this.ruleForm.isShow = productInfo.isShow
      this.ruleForm.shelfTime = productInfo.shelfTime
      this.ruleForm.producInfo = productInfo.producInfo,
        this.fileList.push({ url: productInfo.image })
    }
  },
}
</script>

<style scoped lang="scss">
.text-box {
  /deep/ .avatar-uploader {
    height: 100px;
    /deep/ .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    /deep/ .el-upload:hover {
      border-color: #409eff;
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
  /deep/ .el-tabs__nav {
    /deep/ .el-tabs__active-bar {
      background-color: #e4e7ed;
    }
  }
  /deep/ .el-tabs__item.is-active {
    color: #303133;
  }
}
</style>