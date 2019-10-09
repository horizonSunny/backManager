<template>
  <div id="app" class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style >
html,
body {
  height: 99%;
  overflow: hidden;
}
.main {
  width: 100%;
  height: 100%;
}
</style>
