<template>
  <div class="main">
    <div class="choose">
      <el-select
        v-model="productType"
        placeholder="请选择"
        style="margin-left:20px"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input
        v-model="productName"
        placeholder="请输入内容"
        style="width:200px;margin-left:20px"
      ></el-input>
      <el-button style="margin-left:20px" @click="confirmSelect"
        >搜索</el-button
      >
    </div>
    <el-tabs
      v-model="activeName"
      @tab-click="handleClick"
      style="width:100%;flex:1;display:flex;flex-direction: column;"
    >
      <el-tab-pane label="出售中" name="sale" class="sale">
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
                <div>
                  总流量次数: {{ scope.row.browse ? scope.row.browse : 0 }}
                </div>
                <div>
                  独立用户: {{ scope.row.browse ? scope.row.browse : 0 }}
                </div>
                <div>新用户: {{ scope.row.browse ? scope.row.browse : 0 }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="销售统计">
              <template slot-scope="scope">
                <div>库存:{{ scope.row.stock ? scope.row.stock : 0 }}</div>
                <div>已接单:{{ scope.row.sales ? scope.row.sales : 0 }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="创建时间">
              <template slot-scope="scope">
                <div>{{ scope.row.createTime }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="操作">
              <template slot-scope="scope">
                <div class="operate" @click="operate($event, scope.row)">
                  <span>编辑</span> | <span>下架</span>
                </div>
              </template>
              <!-- <div class="operate" @click="operate($event, scope.row)">
                <span>编辑</span> | <span>下架</span>
              </div> -->
            </el-table-column>
          </el-table>
        </div>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="totalSaleNumber"
            :current-page.sync="pageSaleNumber"
            @current-change="confirmSelect"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
      <el-tab-pane label="已下架" name="soldOut" class="sale">
        <div class="showTable">
          <el-table :data="tableSoldout" style="width: 100%">
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
                <div>
                  总流量次数: {{ scope.row.browse ? scope.row.browse : 0 }}
                </div>
                <div>
                  独立用户: {{ scope.row.browse ? scope.row.browse : 0 }}
                </div>
                <div>新用户: {{ scope.row.browse ? scope.row.browse : 0 }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="销售统计">
              <template slot-scope="scope">
                <div>库存:{{ scope.row.stock ? scope.row.stock : 0 }}</div>
                <div>已接单:{{ scope.row.sales ? scope.row.sales : 0 }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="创建时间">
              <template slot-scope="scope">
                <div>{{ scope.row.createTime }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="操作">
              <template slot-scope="scope">
                <div class="operate" @click="operate($event, scope.row)">
                  <span>编辑</span>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="totalSoldoutNumber"
            :current-page.sync="pageSoldoutNumber"
            @current-change="confirmSelect"
          >
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import { getProduct, soldOutProduct } from '@/api/index'
export default {
  data () {
    return {
      activeName: 'sale',
      options: [
        {
          value: '',
          label: '全部'
        }, {
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
    };
  },
  methods: {
    confirmSelect () {
      const params = {
        pageNumber: this.activeName === 'sale' ? this.pageSaleNumber - 1 : this.pageSoldoutNumber - 1,
        pageSize: 10,
        productName: this.productName,
        productType: this.productType,
        status: this.activeName === 'sale' ? '' : 2
      }
      return getProduct(params).then((resp) => {
        // 加入传回来为空,并且pageNumber不为0则表示这页没数据了
        if (resp.data.pageList.length === 0 && params.pageNumber !== 0) {
          console.log('lalsaldalsdasldal');
          this.activeName === 'sale' ? this.pageSaleNumber -= 1 : this.pageSoldoutNumber -= 1
          this.confirmSelect()
        }
        // 
        if (this.activeName === 'sale') {
          this.tableSale = resp.data.pageList
          this.totalSaleNumber = resp.data.totalElements
        } else {
          this.tableSoldout = resp.data.pageList
          this.totalSoldoutNumber = resp.data.totalElements
        }
        this.pageNumber = resp.data.pageNumber
      })
    },
    operate (e, item) {
      console.log('e_', e.target.innerText);
      if (e.target.innerText === '编辑') {
        console.log('编辑啊');
        this.$router.push({
          name: `commodity`,
          params: item
        })
      } else if (e.target.innerText === '下架') {
        console.log('下架啊', item);
        const params = {
          productId: item.id,
          status: 0
        }
        const formData = new FormData()
        for (let item in params) {
          formData.append(item, params[item])
        }
        soldOutProduct(formData).then(() => {
          this.confirmSelect()
        })
      }
    },
    handleClick (tab) {
      console.log(tab.label);
      if (tab.label === '已下架') {
        this.activeName = 'soldOut'
      } else if (tab.label === '出售中') {
        this.activeName = 'sale'
      }
      this.confirmSelect()
    }
  },
  filters: {
    productType: function (value) {
      return value === 0 ? '处方药' : '非处方药'
    }
  },
  created () {
    const params = {
      pageNumber: 0,
      pageSize: 10,
      productName: this.productName,
      productType: this.productType,
      status: ''
    }
    getProduct(params).then((resp) => {
      this.tableSale = resp.data.pageList
      this.pageNumber = resp.data.pageNumber
      this.totalSaleNumber = resp.data.totalElements
    })
  }
}
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  .choose {
    position: relative;
    left: 50%;
    width: 50%;
    display: flex;
    justify-content: flex-end;
  }
  /deep/ .el-tabs__content {
    flex: 1;
  }
  .sale {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .showTable {
      height: 90%;
      // overflow: auto;
      // overflow-x: hidden;
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
      height: 50px;
      margin-top: 20px;
      // position: relative;
      // bottom: 20px;
      text-align: center;
      left: 0px;
    }
  }
}
</style>