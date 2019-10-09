<template>
  <div class="main">
      <div class="choose">
        <el-select v-model="value" placeholder="请选择" style="margin-left:20px">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
       <el-input v-model="productName" placeholder="请输入内容" style="width:200px;margin-left:20px"></el-input>
       <el-button style="margin-left:20px">搜索</el-button>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick" style="width:100%" >
        <el-tab-pane label="出售中" name="first" class='sale'>
              <el-table
                :data="tableData"
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
        </el-tab-pane>
        <el-tab-pane label="已下架" name="second">配置管理</el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'second',
        options: [{
          value: '1',
          label: '处方药'
        }, {
          value: '2',
          label: '非处方药'
        }],
        productName:'',
        value:'',
        pageNumber:0,
        pageSize:10,
        tableData:null
      };
    },
    methods: {
      handleClick(tab, event) {
        /* eslint-disable */
        console.log(tab, event);
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
        this.tableData = resp.data.pageList
     })
    }
  };
</script>
<style lang="scss" scoped>
.main{
  .choose{
    position:relative;
    left:50%;
    width:50%;
    display:flex;
    justify-content:flex-end;
  }
  .sale{
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
  
}
</style>