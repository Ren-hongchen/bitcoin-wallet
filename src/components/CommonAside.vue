<template>
    <el-menu class="el-menu-vertical-demo" text-color="#333">
      <h3>Bitcoin-Wallet</h3>
      <el-menu-item index="1" @click="clickHome()">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="2" @click="clickAddress()">
        <i class="el-icon-wallet"></i>
        <span slot="title">地址管理</span>
      </el-menu-item>
    </el-menu>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    clickHome () {
      this.$router.push({
        name: 'home'
      })
    },
    clickAddress () {
      this.$router.push({
        name: 'address'
      })
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu {
  width: 200px;
  min-height: 400px;
  height: 100%;
  h3 {
    text-align: center;
    line-height: 48px;
  }
}
</style>>
