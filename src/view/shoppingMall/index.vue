<template>
  <div>
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
      <el-tabs v-model="activeName" @tab-click="handleClick" style="width:100%">
        <el-tab-pane label="出售中" name="first">
              <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                  label="商品"
                  width="180">
                  <template slot-scope="scope">
                    <span style="">{{ scope.row.date }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="分组"
                  width="180">
                  <template slot-scope="scope">
                    <span style="">{{ scope.row.name }}</span>
                  </template>
                </el-table-column>
                <el-table-column
                  label="访问统计">
                  <template slot-scope="scope">
                    <span style="">{{ scope.row.address }}</span>
                  </template>
                </el-table-column>
                  <el-table-column
                  prop="address"
                  label="销售统计">
                </el-table-column>
                   <el-table-column
                  prop="address"
                  label="创建时间">
                </el-table-column>
                    <el-table-column
                  prop="address"
                  label="操作">
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
        tableData: []
      };
    },
    methods: {
      handleClick(tab, event) {
        /* eslint-disable */
        console.log(tab, event);
      }
    },
    created() {
      const params = 
      { pageNumber:0,
        pageSize:10}
     this.$http.get('/admin/product',{params}).then((resp)=>{
       console.log('resp_',resp)
       console.log('resp_',resp)
     })
    }
  };
</script>
<style lang="scss" scoped>
  .choose{
    position:relative;
    left:50%;
    width:50%;
    display:flex;
    justify-content:flex-end;
  }
</style>