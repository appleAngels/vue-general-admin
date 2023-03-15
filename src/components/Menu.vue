<template>
  <div class="menu">
    <el-aside width="240px">
      <el-menu router default-active="1" class="el-menu-vertical-demo">
        <template v-for="(item, index) in menus">
          <el-submenu :index="`${index}`" :key="index" v-if="!item.hidden">
            <template slot="title">
              <i :class="item.iconClass"></i>
              <span style="padding-left: 10px;">{{ item.name }}</span>
            </template>
            <el-menu-item-group v-for="(child, i) in item.children" :key="i">
              <el-menu-item :index="child.path">{{ child.name }}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>

  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    msg: String
  },
  data () {
    return {
      menus: []
    }
  },
  created () {
    console.log(this.$router.options);
    this.menus = [...this.$router.options.routes]
  },
  methods: {
    handleOpen () { },
    handleClose () { },
  }
}
</script>

<style scoped lang="less">
.menu {
  height: 100%;

  .el-aside {
    height: 100%;

    .el-menu {
      height: 100%;
    }

    .el-submenu .el-menu-item {
      min-width: 0;
    }

    /deep/ .el-menu-item-group__title {
      padding: 0 !important;
    }
  }

}
</style>
