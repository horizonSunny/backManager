<template>
  <div class="main">
    <el-tabs v-model="activeName" style="width:100%">
      <el-tab-pane label="全部订单" name="allOrder" class="sale"> </el-tab-pane>
      <el-tab-pane label="待付款" name="obligation" class="sale"> </el-tab-pane>
      <el-tab-pane label="待发货" name="deliverGoods" class="sale">
      </el-tab-pane>
      <el-tab-pane label="已完成" name="complete" class="sale"> </el-tab-pane>
      <el-tab-pane label="退款中" name="refund" class="sale"> </el-tab-pane>
      <el-tab-pane label="已关闭" name="close" class="sale"> </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
.main {
  position: relative;
  .sale {
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
      text-align: center;
      left: 0px;
    }
  }
}
</style>