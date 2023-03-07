<template>
  <div class="home">
    <Header />
    <el-container class="content">
      <Menu />
      <el-container>

        <el-main>Main</el-main>
        <el-footer>
          <Footer />
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Menu from '@/components/Menu'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components: {
    Header,
    Footer,
    Menu
  }
}
</script>

<style scoped lang="less">
.home {
  height: 100%;
  width: 100%;

  .content {
    height: calc(100% - 60px);
    width: 100%;
  }
}
</style>
