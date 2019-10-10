<template>
  <div class="main">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246);">
        <el-menu>
          <el-menu-item
            v-for="(item, indexInfo) in sidebarInfo"
            :key="indexInfo"
            @click="sidebarClick(item)"
          >
            <template slot="title"
              ><i
                :class="
                  indexInfo % 2 === 0 ? 'el-icon-menu' : 'el-icon-document'
                "
              ></i
              >{{ item["name"] }}</template
            ></el-menu-item
          >
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sidebarInfo: [
        { name: '商城', routePath: 'shoppingMall' },
        { name: '商品管理', routePath: 'commodity' },
        { name: '订单管理', routePath: 'orderForm' },
        { name: '会员管理', routePath: 'member' },
        { name: '优惠券', routePath: 'discountCoupon' },]
    }
  },
  methods: {
    sidebarClick (e) {
      console.log('e_', e)
      this.$router.push(e.routePath)
    }
  }
};
</script>
<style>
.main {
  height: 100%;
  width: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>