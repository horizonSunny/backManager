<template>
  <div class="text-box">
    <el-tabs v-model="activeName">
      <el-tab-pane label="新建优惠券" name="first">
        <el-form ref="form" :rules="rules" :model="form" label-width="100px">
          <el-form-item label="优惠券名称" prop="couponName">
            <el-col :span="11">
              <el-input v-model="form.couponName"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="发送总量" prop="totalCount">
            <el-col :span="11">
              <el-input v-model="form.totalCount" type="number"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="优惠方式" prop="couponType">
            <el-col :span="11">
              <div>
                <el-radio-group v-model="form.couponType">
                  <el-radio label="0">无门槛</el-radio>
                  <el-radio label="1">
                    <span>
                      <span>满减券</span>
                      <span> 满 <el-input v-model="form.useMinPrice" type="number" style="width: 100px;"></el-input> 可使用</span>
                    </span>
                  </el-radio>
                </el-radio-group>
              </div>
            </el-col>
          </el-form-item>
          <el-form-item label="优惠券面值" prop="couponPrice">
            <el-col :span="11">
              <el-input type="number"  v-model="form.couponPrice"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="领取数限制" prop="quantityLimit">
            <el-col :span="11">
              <el-input v-model="form.quantityLimit" type="number"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="生效日期" prop="useTime">
            <el-col :span="11">
              <!-- <el-input v-model="form.startTime"></el-input> -->
              <el-date-picker
                style="width: 100%;"
                v-model="form.useTime"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change = "dateChange"
              >
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="可使用商品" prop="productType">
            <el-col :span="11">
              <div>
                <el-radio-group v-model="form.productType">
                  <el-radio label="0">不限制</el-radio>
                  <el-radio label="1">
                    <span>
                      <span>限制  </span>
                      <span>
                        <el-select :disabled="form.productType !== '1'" v-model="form.usableGoods" placeholder="请选择">
                          <el-option
                            v-for="item in productList"
                            :key="item.id"
                            :label="item.productName"
                            :value="item.id">
                          </el-option>
                        </el-select>
                      </span>
                    </span>
                  </el-radio>
                </el-radio-group>
              </div>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" :loading="loading" @click="onSubmit" style="width:100px">确定</el-button>
            <el-button style="width:100px" @click="goBack">返回</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getProduct, insertCoupon, updateCoupon } from '@/api/index.js'
export default {
  data () {
    return {
      activeName: 'first',
      form: {
        "couponName": "",
        "couponPrice": "",
        "couponType": "0",
        "endTime": 0,
        "quantityLimit": 0,
        "startTime": 0,
        "totalCount": "",
        "usableGoods": "",
        "useMinPrice": "",
        "productType": "0",
        "useTime": ''
      },
      rules: {
        couponName: [
          { required: true, message: '请输入优惠券', trigger: 'blur' },
        ],
        totalCount: [
          { required: true, message: '请输入发送总量', trigger: 'blur' },
        ],
        couponType: [
          { required: true, message: '请输入优惠方式', trigger: 'blur' },
        ],
        couponPrice: [
          { required: true, message: '请输入优惠券面值', trigger: 'blur' },
        ],
        quantityLimit: [
          { required: true, message: '请输入领取数量限制', trigger: 'blur' },
        ],
        useTime: [
          { required: true, message: '请选择生效日期', trigger: 'blur' },
        ],
        productType: [
          { required: true, message: '请选择限制商品', trigger: 'blur' },
        ]
      },
      productList: [],
      loading: false
    };
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    onSubmit () {
      console.log('submit!')
      this.$refs['form'].validate((valid) => {
        console.log('valid', valid)
        if (valid) {
          this.loading = true
          console.log('提交的内容为:', this.form)
          if (this.form.couponType === "0" && !this.form.useMinPrice) {
            this.$message({
              message: '请设置满减门槛',
              type: 'error'
            })
            return false
          }
          if (this.form.productType === "1" && !this.form.usableGoods) {
            this.$message({
              message: '请选择限制使用商品',
              type: 'error'
            })
            return false
          }
          let params = {}
          if (this.form.id) {
            params = {
              "id": this.form.id,
              "couponName": this.form.couponName,
              "couponPrice": Number(this.form.couponPrice),
              "couponType": Number(this.form.couponType),
              "endTime": this.form.endTime,
              "quantityLimit": Number(this.form.quantityLimit),
              "startTime": this.form.startTime,
              "totalCount": Number(this.form.totalCount),
              "usableGoods": this.form.usableGoods ? this.form.usableGoods.toString() : '',
              "useMinPrice": Number(this.form.useMinPrice)
            }
            updateCoupon(params).then(
              data => {
                this.loading = false
                if (data.code === 1) {
                  this.goBack()
                } else {
                  this.$message({
                    message: data.msg,
                    type: 'error'
                  })
                }
              },
              error => {
                this.loading = false
                console.log(error)
                this.$message({
                  message: '网络连接失败',
                  type: 'error'
                })
              }
            )
          } else {
            params = {
              "couponName": this.form.couponName,
              "couponPrice": Number(this.form.couponPrice),
              "couponType": Number(this.form.couponType),
              "endTime": this.form.endTime,
              "quantityLimit": Number(this.form.quantityLimit),
              "startTime": this.form.startTime,
              "totalCount": Number(this.form.totalCount),
              "usableGoods": this.form.usableGoods ? this.form.usableGoods.toString() : '',
              "useMinPrice": Number(this.form.useMinPrice)
            }
            insertCoupon(params).then(
              data => {
                this.loading = false
                if (data.code === 1) {
                  this.goBack()
                } else {
                  this.$message({
                    message: data.msg,
                    type: 'error'
                  })
                }
              },
              error => {
                this.loading = false
                console.log(error)
                this.$message({
                  message: '网络连接失败',
                  type: 'error'
                })
              }
            )
          }
        }
      })
    },
    dateChange (value) {
      console.log('日期选择变化:', value)
      if (value) {
        this.form.useTime = value
        this.form.startTime = new Date(value[0]).getTime()
        this.form.endTime = new Date(value[1]).getTime()
      } else {
        this.form.useTime = value
        this.form.startTime = ""
        this.form.endTime = ""
      }
      console.log(this.form)
    },
    getProductList () {
      let params = {
        pageNumber: 0,
        pageSize: 100000,
      }
      getProduct(params).then(
        data => {
          if (data.code === 1) {
            this.productList = data.data.pageList
          } else {
            this.$message({
              message: data.msg,
              type: 'error'
            })
          }
        },
        error => {
          console.log(error)
          this.$message({
            message: '网络连接失败',
            type: 'error'
          })
        }
      )
    }
  },
  mounted () {
    let oldData = this.$route.query.coupon
    console.log('页面传入数据:', oldData)
    if (oldData) {
      oldData.couponType = oldData.couponType.toString()
      if (oldData.usableGoods) {
        oldData.productType = "1"
      } else {
        oldData.productType = "0"
      }
      if (oldData.startTime && oldData.endTime) {
        this.useTime = [new Date(oldData.startTime), new Date(oldData.endTime)]
        oldData.useTime = [new Date(oldData.startTime), new Date(oldData.endTime)]
        oldData.startTime = new Date(oldData.startTime).getTime()
        oldData.endTime = new Date(oldData.endTime).getTime()
      }
      this.form = Object.assign({},oldData)
    }
    console.log(this.form)
    this.getProductList()
  },
};
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
