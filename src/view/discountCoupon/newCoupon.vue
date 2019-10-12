<template>
  <div class="text-box">
    <el-tabs v-model="activeName">
      <el-tab-pane label="新建优惠券" name="first">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="优惠券名称">
            <el-col :span="11">
              <el-input v-model="form.couponName"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="发送总量">
            <el-col :span="11">
              <el-input v-model="form.totalCount" type="number"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="优惠方式">
            <el-col :span="11">
              <div>
                <el-radio-group v-model="form.couponType">
                  <el-radio label="0">
                    <span>
                      <span>满减券</span>
                      <span> 满 <el-input v-model="form.useMinPrice" type="number" style="width: 100px;"></el-input> 可使用</el-input></span>
                    </span>
                  </el-radio>
                  <el-radio label="1">无门槛</el-radio>
                </el-radio-group>
              </div>
            </el-col>
          </el-form-item>
          <el-form-item label="优惠券面值">
            <el-col :span="11">
              <el-input type="number"  v-model="form.couponPrice"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="领取数限制">
            <el-col :span="11">
              <el-input v-model="form.quantityLimit" type="number"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="生效日期">
            <el-col :span="11">
              <!-- <el-input v-model="form.startTime"></el-input> -->
              <el-date-picker
                style="width: 100%;"
                v-model="useTime"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change = "dateChange"
              >
              </el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="可使用商品">
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
            <el-button type="primary" @click="onSubmit" style="width:100px">确定</el-button>
            <el-button style="width:100px" @click="goBack">返回</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getProduct } from '@/api/index.js'
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
        "productType": "0"
      },
      productList: [],
      useTime: ''
    };
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    onSubmit () {
      console.log('submit!')
    },
    dateChange (value) {
      console.log('日期选择变化:', value)
      this.form.startTime = new Date(value[0]).getTime()/100
      this.form.endTime = new Date(value[1]).getTime()/100
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
