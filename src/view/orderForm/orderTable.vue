<template>
  <div>
        <div class="showTable">
                <el-table
                :data="tableSale"
                style="width: 100%">
                <el-table-column
                  label="商品"
                  width="180">
                  <template slot-scope="scope">
                   <div class="shopping">
                     <img :src ="scope.row.image" style="width:70px;height:70px">
                     <div class="shoppingInfo">
                       <div>{{ scope.row.productName }}</div>
                       <div>¥{{ scope.row.price }}</div>
                     </div>
                   </div>
                  </template>
                </el-table-column>
                <el-table-column
                  label="分组"
                  width="180">
                  <template slot-scope="scope">
                    <span style="">{{ scope.row.productType|productType }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="访问统计">
                  <template slot-scope="scope">
                    <div>总流量次数: {{ scope.row.browse?scope.row.browse:0 }}</div>
                    <div>独立用户: {{ scope.row.browse?scope.row.browse:0 }}</div>
                    <div>新用户: {{ scope.row.browse?scope.row.browse:0 }}</div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="销售统计">
                  <template slot-scope="scope">
                    <div>库存:{{ scope.row.stock?scope.row.stock:0 }}</div>
                    <div>已销售:{{ scope.row.sales?scope.row.sales:0 }}</div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="创建时间">
                  <template slot-scope="scope">
                    <div>{{ scope.row.createTime }}</div>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="address"
                  label="操作">
                  <div class="operate"><span>编辑</span> | <span>下架</span></div>
                </el-table-column>
              </el-table>
              </div>
              <div class="pagination">
                <el-pagination
                background
                layout="prev, pager, next"
                :total="totalSaleNumber">
              </el-pagination>
             </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  
</style>