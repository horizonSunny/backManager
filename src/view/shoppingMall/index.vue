<template>
  <div class="main">
      <div class="choose">
        <el-select v-model="productType" placeholder="请选择" style="margin-left:20px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
       <el-input v-model="productName" placeholder="请输入内容" style="width:200px;margin-left:20px"></el-input>
       <el-button style="margin-left:20px" @confirm="confirmSelect()">搜索</el-button>
      </div>
      <el-tabs v-model="activeName"  style="width:100%" >
        <el-tab-pane label="出售中" name="sale" class='sale'>
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
                :total="100">
              </el-pagination>
             </div>
        </el-tab-pane>
        <el-tab-pane label="已下架" name="soldOut" class='sale'>
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
                :total="100">
              </el-pagination>
             </div>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
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
        productName:'',
        productType:'',
        pageNumber:0,
        pageSize:10,
        tableSale:null,
        tableSoldout:null,
      };
    },
    methods: {
      confirmSelect(){
        const params = {
          pageNumber:0,
          pageSize:10,
          productName:this.productName,
          productType:this.productType,
          status:this.activeName === 'sale'?1:0
        }
        this.$http.get('/admin/product',{params}).then((resp)=>{
              // console.log('resp_',resp)
              if(this.activeName === 'sale'){
                this.tableSale = resp.data.pageList
              }else{
                this.tableSoldout = resp.data.pageList
              }
              this.pageNumber = resp.data.pageNumber
          })
      }
    },
    filters:{
      productType:function (value) {
          return value ===0 ? '处方药':'非处方药'
      }
    },
    created() {
      const params = 
      { pageNumber:0,
        pageSize:10}
     this.$http.get('/admin/product',{params}).then((resp)=>{
       console.log('resp_',resp)
        this.tableSale = resp.data.pageList
     })
    }
  };
</script>
<style lang="scss" scoped>
.main{
  position:relative;
  .choose{
    position:relative;
    left:50%;
    width:50%;
    display:flex;
    justify-content:flex-end;
  }
  .sale{
    .showTable{
      height:90%;
      overflow:auto;
      overflow-x:hidden;
      .shopping{
        display:flex;
        .shoppingInfo{
          margin-left:10px
        }
      }
      .operate{
        span{
            cursor:pointer;
            color:rgb(52,136,255)
          }
      }
    }
    .pagination{
      width:100%;
      position:fixed;
      bottom:20px;
      text-align:center;
      left:0px
    }
  }
  
}
</style>