<template>
  <div class="header">
    <el-header>
      <div class="title">System</div>
      <div>{{ name }}</div>
    </el-header>
  </div>
</template>

<script>
import { getToken } from '@/utils/setToken'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data () {
    return {
      name: ''
    }
  },
  created () {
    console.log('getToken()', getToken('username'));
    this.name = getToken('username')
  }
}
</script>

<style scoped lang="less">
.header {
  // background-color: beige;
  width: 100%;
  color: red;
  border-bottom: 1px solid #eee;

  .el-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
