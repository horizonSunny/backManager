<template>
  <div class="text-box">
    <div class="choose">
      <!-- <el-button size="small" style="margin-left:20px">新建会员</el-button> -->
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="全部会员" name="first"> </el-tab-pane>
    </el-tabs>
    <div class="showTable">
      <el-table :data="tableSale" style="width: 100%">
        <el-table-column label="手机号" width="180" prop="phone"></el-table-column>
        <el-table-column label="会员昵称" width="180" prop="nickname"></el-table-column>
        <el-table-column label="姓名" width="180" prop="fullName"></el-table-column>
        <el-table-column label="积分" prop="integral"></el-table-column>
        <el-table-column label="创建时间" prop="createTime"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div class="operate"><span @click="giftCoupon(scope.row)">赠优惠券</span></div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination" v-show="totalSaleNumber>0">
      <el-pagination
        background
        layout="prev, pager, next, total"
        :total="totalSaleNumber"
        current-page.sync = "page.pageNumber"
        @current-change = "currentChange"
      >
      </el-pagination>
    </div>
    <el-dialog title="赠送优惠券" :visible.sync="dialogCouponVisible">
      <el-table :data="tableCoupon" style="width: 100%">
        <el-table-column label="名称" prop="couponName"></el-table-column>
        <el-table-column label="使用规则" width="160">
          <template slot-scope="scope">
            <div>①{{ scope.row.couponType===0 ? '不限制使用门槛' : ('满'+ scope.row.useMinPrice +'减'+ scope.row.couponPrice) }}</div>
            <div>②所有人可领取</div>
            <div>③商品限制:{{ scope.row.usableGoods ? scope.row.usableGoods : '所有商品' }}</div>
          </template>
        </el-table-column>
        <el-table-column label="有效期" width="360">
          <template slot-scope="scope">
            <div>{{ scope.row.startTime }} 至 {{ scope.row.endTime }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <div><el-button type="text" @click="giftSubmit(scope.row)">赠送</el-button></div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, total"
        :total="totalCoupon"
        current-page.sync = "pageCoupon.pageNumber"
        @current-change = "couponChange"
      >
      </el-pagination>
    </el-dialog>
  </div>
</template>
<script>
import { getPatient, getCouponList, giftCoupon } from '@/api/index.js'
export default {
  data () {
    return {
      activeName: 'first',
      // 筛选条件
      pageSaleNumber: 0,
      pageSoldoutNumber: 0,
      totalSaleNumber: 0,
      totalSoldoutNumber: 0,
      pageSize: 10,
      tableSale: null,
      tableSoldout: null,
      dialogCouponVisible: false,
      page: {
        pageNumber: 0,
        pageSize: 10
      },
      pageCoupon: {
        pageNumber: 0,
        pageSize: 10
      },
      currentUser: {},
      tableCoupon: [],
      totalCoupon: 0
    };
  },
  methods: {
    giftCoupon (row) {
      this.currentUser = row
      this.dialogCouponVisible = true
      this.pageCoupon = {
        pageNumber: 0,
        pageSize: 10
      }
      this.getCouponList()
    },
    getCouponList () {
      let params = {      
        ...this.pageCoupon
      }
      getCouponList(params).then(
        data => {
          if (data.code === 1) {
            this.tableCoupon = data.data.pageList
            this.totalCoupon = data.data.totalElements
          } else {
            this.$message({
              message: data.msg,
              type: 'error'
            })
          }
        }
      )
    },
    getList () {
      let params = {
        ...this.page
      }
      getPatient(params).then(
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
    currentChange (current) {
      this.page.pageNumber = current -1
      this.getList()
    },
    couponChange (current) {
      this.pageCoupon.pageNumber = current -1
      this.getCouponList()
    },
    giftSubmit (row) {
      if (row.id && this.currentUser.id) {
        let params = {
          couponId: row.id,
          patientId: this.currentUser.id
        }
        giftCoupon(params).then(
          data => {
            if (data.code === 1) {
              this.$message({
                message: '赠送成功',
                type: 'success'
              })
              this.getCouponList()
            } else {
              this.$message({
                message: data.msg,
                type: 'error'
              })
            }
          }
        )
      }
    }
  },
  filters: {
    productType: function (value) {
      return value === 0 ? '处方药' : '非处方药'
    }
  },
  created () {
    this.getList()
  }
};
</script>

<style scoped lang="scss">
.text-box {
  .choose {
    position: relative;
    left: 50%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
  /deep/ .el-tabs__nav {
    /deep/ .el-tabs__active-bar {
      background-color: #e4e7ed;
    }
  }
  /deep/ .el-tabs__item.is-active {
    color: #303133;
  }
  position: relative;
  .showTable {
    height: 90%;
    overflow: auto;
    overflow-x: hidden;
    .shopping {
      display: flex;
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
