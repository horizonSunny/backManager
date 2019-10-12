<template>
  <div class="main">
    <div class="choose">
      <el-form ref="form" :model="form" label-width="80px">
        <el-row>
          <el-col :span="8" :gutter="20">
            <el-form-item label="订单号">
              <el-input v-model="form.orderNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" :gutter="20">
            <el-form-item label="下单时间">
              <el-date-picker
                style="width: 100%;"
                v-model="tempTime"
                size="small"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change = "dateChange"
              >
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8" :gutter="20">
            <el-form-item label="商品名称">
              <el-input v-model="form.productName" size="small"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8" :gutter="20">
            <el-form-item label="订单状态">
              <el-select style="width: 100%;" v-model="form.status" placeholder="请选择">
                <el-option value="1" label="已经接单"></el-option>
                <el-option value="2" label="待取药"></el-option>
                <el-option value="3" label="待配送"></el-option>
                <el-option value="4" label="已取消"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8" :gutter="20">
            <el-form-item label="接单状态">
              <el-select style="width: 100%;" v-model="form.receiveStatus" placeholder="请选择">
                <el-option value="3" label="全部"></el-option>
                <el-option value="0" label="新订单"></el-option>
                <el-option value="1" label="待取药"></el-option>
                <el-option value="2" label="待配送"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8" :gutter="20">
            <el-button
              style="margin-left:30px; width:100px"
              @click="getList()"
              size="small"
              type="primary"
              >查询订单</el-button>
            <el-button
              style="margin-left:50px; width:100px"
              @click="reset()"
              size="small"
              >重置</el-button>
          </el-col>
        </el-row>
        <el-row>
          
        </el-row>
      </el-form>
    </div>
    <div class="showTable">
      <el-table :data="tableSale" style="width: 100%">
        <el-table-column label="订单" width="280px">
          <template slot-scope="scope">
            <div class="shopping">
              <div>系统订单号: {{ scope.row.orderNo }}</div>
              <div v-for="item in scope.row.orderShops" :key="item.id">
                <img :src="item.productImage" alt="" height="50px" width="50px"> {{ item.productName }}
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="订单价格" width="180">
          <template slot-scope="scope">
            <span>{{ scope.row.totalPrice ? '¥' + scope.row.totalPrice : 0 }}</span>
          </template>
        </el-table-column>
        <el-table-column label="订单状态">
          <template slot-scope="scope">
            <div>{{ scope.row.status | statusFilter }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="totalNum" label="商品件数"></el-table-column>
        <el-table-column prop="totalNum" label="买家">
          <template slot-scope="scope">
            <div>
              <div>ID:{{ scope.row.userId }}</div>
              <div>昵称:{{ scope.row.userName }}</div>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="下单时间">
          <template slot-scope="scope">
            <div>{{ scope.row.createTime }}</div>
          </template>
        </el-table-column>
        <el-table-column label="接单状态">
          <template slot-scope="scope">
            <div>{{ scope.row.receiveStatus | receiveStatusFilter }}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div style="margin-top: 20px;margin-bottom: 20px;text-align: center;" v-show="totalSaleNumber>0">
      <el-pagination
        background
        layout="prev, pager, next, total"
        :total="totalSaleNumber"
        current-page.sync = "page.pageNumber"
        @current-change = "currentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { getOrder } from '@/api/index.js'
const initForm = {
  receiveStatus: "3",
  orderNo: '',
  productName: '',
  startTime: '',
  endTime: ''
}
export default {
  data () {
    return {
      pageSaleNumber: 0,
      pageSoldoutNumber: 0,
      totalSaleNumber: 0,
      totalSoldoutNumber: 0,
      pageSize: 10,
      tableSale: null,
      tableSoldout: null,
      //form
      page: {
        pageNumber: 0,
        pageSize: 10
      },
      tempTime: '',
      form: initForm
    };
  },
  methods: {
    getList () {
      let params = {
        ...this.page,
        ...this.form
      }
      console.log('查询参数:', params)
      getOrder(params).then(
        data => {
          if (data.code === 1) {
            this.tableSale = data.data.pageList
            this.totalSaleNumber = data.data.totalElements
          } else {
            this.$message({
              message: data.msg,
              type: 'error'
            })
          }
        }
      )
    },
    reset () {
      this.page.pageNumber = 0
      this.form = {
        receiveStatus: "3",
        orderNo: '',
        productName: '',
        startTime: '',
        endTime: ''
      }
      console.log(this.form)
      this.getList()
    },
    currentChange (current) {
      this.page.pageNumber = current -1
      this.getList()
    },
    dateChange (value) {
      if (value) {
        this.form.startTime = new Date(value[0]).getTime()/100
        this.form.endTime = new Date(value[1]).getTime()/100
      } else {
        this.form.startTime = ""
        this.form.endTime = ""
      }
    }
  },
  filters: {
    productType: function (value) {
      return value === 0 ? '处方药' : '非处方药'
    },
    statusFilter (value) {
      if (value === 1) {
        return '已接单'
      } else if (value === 2) {
        return '待取药'
      } else if (value === 3) {
        return '待配送'
      } else if (value === 4) {
        return '已取消'
      } else {
        return ''
      }
    },
    receiveStatusFilter (value) {
      if (value === 0) {
        return '新订单'
      } else if (value === 1) {
        return '待取药'
      } else if (value === 2) {
        return '待配送'
      } else {
        return ''
      }
    }
  },
  mounted () {
    this.getList()
  }
}
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  .showTable {
    .shopping {
      display: flex;
      flex-flow: column;
      justify-content: center;
      .shoppingInfo {
        margin-left: 10px;
      }
    }
    .operate {
      span {
        cursor: pointer;
        color: rgb(52, 136, 255);
      }
    }
  }
  .pagination {
    width: 100%;
    position: fixed;
    bottom: 20px;
    left: 0px;
    text-align: center;
    /deep/ .el-pagination {
      text-align: center;
    }
  }
}
</style>
