<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/workbench/brewView' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index">{{item.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
.breadcrumb {
  width: 100%;
  text-align: center;
}
</style>
