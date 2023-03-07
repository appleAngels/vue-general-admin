<template>
  <div class="hello">
    <h1>Header</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
.hello {
  h1 {
    color: red;
  }
}
</style>
