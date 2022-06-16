<template>
  <div>
    <div class="login">
    <el-dropdown v-if="isLogined">
      <el-avatar :size="small" :src="circleUrl"></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click="account()">个人信息</el-dropdown-item>
        <el-dropdown-item divided>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-button v-else @click="login()">登录</el-button>
    </div>
    <div class="button">
      <el-button type="primary">Send</el-button>
      <el-button type="primary">Recieve</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isLogined: false,
      circleUrl: '../assets/bitcoin.png'
    }
  },
  methods: {
    login () {
      this.$router.push({
        name: 'login'
      })
    },
    account () {
      this.$router.push({
        name: 'account'
      })
    }
  }
}
</script>

<style lang="less">
.button {
  float: right;
  margin: 10px;
}
.login {
  float: right;
  margin: 10px;
}
</style>
