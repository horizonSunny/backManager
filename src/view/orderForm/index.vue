<template>
  <div class="main">
    <el-tabs v-model="activeName" style="width:100%">
      <el-tab-pane label="全部订单" name="allOrder">
        <order-table></order-table>
      </el-tab-pane>
      <el-tab-pane label="待付款" name="obligation">
        <order-table></order-table>
      </el-tab-pane>
      <el-tab-pane label="待发货" name="deliverGoods">
        <order-table></order-table>
      </el-tab-pane>
      <el-tab-pane label="已完成" name="complete">
        <order-table></order-table>
      </el-tab-pane>
      <el-tab-pane label="退款中" name="refund">
        <order-table></order-table>
      </el-tab-pane>
      <el-tab-pane label="已关闭" name="close">
        <order-table></order-table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import orderTable from './orderTable'
export default {
  data () {
    return {
      activeName: 'allOrder',
    }
  },
  components: {
    orderTable
  },
};
</script>
<style lang="scss" scoped>
</style>