<template>
  <div class="home">
    <Header />
  </div>
</template>

<script>
import Header from '@/components/Header'
// import Footer from '@/components/Footer'
export default {
  name: 'Home',
  props: {
    msg: String
  },
  components:{
    Header
  }
}
</script>

<style scoped lang="less">
.home {
  h1 {
    color: red;
  }
}
</style>
