<template>
  <div class="main">
    <order-table></order-table>
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
