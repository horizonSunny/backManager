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
            <i
              :class="indexInfo % 2 === 0 ? 'el-icon-menu' : 'el-icon-document'"
            ></i
            >{{ item["name"] }}
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px">
              {{ userName }}</i
            >
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="handleLogout"
                >退出</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <keep-alive :include="saveComponent">
            <router-view></router-view>
          </keep-alive>
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
        { name: '优惠券', routePath: 'discountCoupon' }
      ],
      userName: this.$store.state.user.userData ? this.$store.state.user.userData.username : '暂无'
    }
  },
  computed: {
    saveComponent () {
      return this.$store.getters.saveComponent
    }
  },
  methods: {
    sidebarClick (e) {
      this.$router.push(e.routePath)
    },
    handleLogout () {
      // 退出登录
      this.$store.dispatch('logout').then(() => {
        this.$message('请重新登录!')
        this.$router.push({ 'path': '/login' })
        // location.reload()
      })
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
