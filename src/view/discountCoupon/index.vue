<template>
  <div class="text-box">
    <div class="choose">
      <el-button size="small" style="margin-left:20px" @click="confirmNew"
        >新建优惠券</el-button
      >
    </div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="优惠券" name="first"> </el-tab-pane>
    </el-tabs>
    <div class="showTable">
      <el-table :data="tableSale" style="width: 100%">
        <el-table-column label="名称" prop="couponName"></el-table-column>
        <el-table-column label="使用规则" width="160">
          <template slot-scope="scope">
            <div>①不限制使用门槛</div>
            <div>②所有人可领取</div>
            <div>③商品限制:所有商品</div>
          </template>
        </el-table-column>
        <el-table-column label="有效期" width="360">
          <template slot-scope="scope">
            <div>{{ scope.row.startTime }} 至 {{ scope.row.endTime }}</div>
          </template>
        </el-table-column>
        <el-table-column label="状态">
          <template slot-scope="scope">
            <div>{{ scope.row.status | productType }}</div>
          </template>
        </el-table-column>
        <el-table-column label="发放数量" prop="totalCount"></el-table-column>
        <el-table-column label="使用数量">
          <template slot-scope="scope">
            <div>{{ scope.row.totalCount - scope.row.remainCount  }}</div>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <div class="operate"><el-button type='text'>停用</el-button></div>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination" v-show="totalSaleNumber>0">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="totalSaleNumber"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { getCouponList } from '@/api/index.js'
export default {
  data () {
    return {
      activeName: 'first',
    };
  },
  data () {
    return {
      activeName: 'sale',
      options: [{
        value: 0,
        label: '处方药'
      }, {
        value: 1,
        label: '非处方药'
      }],
      // 筛选条件
      productName: '',
      productType: '',
      pageSaleNumber: 0,
      pageSoldoutNumber: 0,
      totalSaleNumber: 0,
      totalSoldoutNumber: 0,
      pageSize: 10,
      tableSale: null,
      tableSoldout: null,
      //form
      form: {
        name: ''
      }
    };
  },
  methods: {
    confirmNew () {
      console.log('confirmNew');
      this.$router.push('newCoupon')
    }
  },
  filters: {
    productType: function (value) {
      // 0：未激活，1：激活，2：已过期或者发放完毕
      let temp = ''
      if (value === 0) {
        return '未激活'
      } else if (value === 1) {
        return '未激活'
      } else {
        return '已过期或者发放完毕'
      }
    }
  },
  mounted () {
    const params = {      
      pageNumber: 0,
      pageSize: 10
    }
    getCouponList(params).then(
      (data) => {
        if (data.code === 1) {
          this.tableSale = data.data.pageList
        } else {
          this.$message({
            message: data.msg,
            type: 'error'
          })
        }
      }
    )
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
