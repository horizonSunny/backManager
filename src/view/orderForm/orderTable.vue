<template>
  <div class="main">
    <div class="choose">
      <el-form ref="form" :model="form" label-width="80px">
        <div style="display:flex">
          <el-form-item label="订单号">
            <el-input size="small" v-model="form.orderNumber"></el-input>
          </el-form-item>
          <el-form-item label="下单时间">
            <el-date-picker
              v-model="form.orderNumber"
              size="small"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
        </div>
        <div style="display:flex">
          <el-form-item label="商品名称">
            <el-input v-model="form.orderNumber" size="small"></el-input>
          </el-form-item>
          <el-form-item label="商品名称">
            <el-button
              style="margin-left:100px;width:100px"
              @confirm="confirmSelect()"
              size="small"
              >查询订单</el-button
            >
            <el-button
              style="margin-left:50px; width:100px"
              @confirm="confirmSelect()"
              size="small"
              >重置</el-button
            >
          </el-form-item>
        </div>
      </el-form>
    </div>
    <div class="showTable">
      <el-table :data="tableSale" style="width: 100%">
        <el-table-column label="商品" width="180">
          <template slot-scope="scope">
            <div class="shopping">
              <img :src="scope.row.image" style="width:70px;height:70px" />
              <div class="shoppingInfo">
                <div>{{ scope.row.productName }}</div>
                <div>¥{{ scope.row.price }}</div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="分组" width="180">
          <template slot-scope="scope">
            <span style="">{{ scope.row.productType | productType }}</span>
          </template>
        </el-table-column>
        <el-table-column label="访问统计">
          <template slot-scope="scope">
            <div>总流量次数: {{ scope.row.browse ? scope.row.browse : 0 }}</div>
            <div>独立用户: {{ scope.row.browse ? scope.row.browse : 0 }}</div>
            <div>新用户: {{ scope.row.browse ? scope.row.browse : 0 }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="销售统计">
          <template slot-scope="scope">
            <div>库存:{{ scope.row.stock ? scope.row.stock : 0 }}</div>
            <div>已销售:{{ scope.row.sales ? scope.row.sales : 0 }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="创建时间">
          <template slot-scope="scope">
            <div>{{ scope.row.createTime }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作">
          <div class="operate"><span>编辑</span> | <span>下架</span></div>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
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
export default {
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
    confirmSelect () {
      const params = {
        pageNumber: 0,
        pageSize: 10,
        productName: this.productName,
        productType: this.productType,
        status: this.activeName === 'sale' ? 1 : 0
      }
      this.$http.get('/admin/product', { params }).then((resp) => {
        // console.log('resp_',resp)
        if (this.activeName === 'sale') {
          this.tableSale = resp.data.pageList
        } else {
          this.tableSoldout = resp.data.pageList
        }
        this.pageNumber = resp.data.pageNumber
      })
    }
  },
  filters: {
    productType: function (value) {
      return value === 0 ? '处方药' : '非处方药'
    }
  },
  created () {
    const params =
    {      pageNumber: 0,
      pageSize: 10    }
    this.$http.get('/admin/product', { params }).then((resp) => {
      console.log('resp_', resp)
      this.tableSale = resp.data.pageList
    })
  }
}
</script>
<style lang="scss" scoped>
.main {
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