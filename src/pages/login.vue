<template>
  <div class="form">
  <el-form ref="form" :model="form" label-width="80px" status-icon :rules="rules">
    <el-form-item label="账号" prop="account">
      <el-input v-model="form.account"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit('form')">登录</el-button>
      <el-button @click="onCancle">取消</el-button>
    </el-form-item>
  </el-form>
  <p class="login_tip">未注册过的账号，登录时将自动注册</p>
  </div>
</template>

<script>
export default {
  data () {
    var checkAccount = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('账号不能为空'))
      }
      var reg = new RegExp(/^[a-z0-9]+$/)
      if (!reg.test(value)) {
        return callback(new Error('账号只能由小写字母和数字组成'))
      } else {
        callback()
      }
    }
    var checkPassword = (rule, value, callback) => {
      if (value === '') {
        return callback(new Error('密码不能为空'))
      }
      var reg = new RegExp(/^\w+$/)
      if (!reg.test(value)) {
        return callback(new Error('密码只能由英文字母，数字，下划线组成'))
      } else {
        callback()
      }
    }
    return {
      form: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { validator: checkAccount, trigger: 'blur' }
        ],
        password: [
          { validator: checkPassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('http://localhost:8081/login', {
          })
        }
      })
    },
    onCancle () {
      this.$router.push({
        name: 'home'
      })
    }
  }
}
</script>

<style lang="less">
.form {
    position: absolute;
    width: 300px;
    height: 200px;
    text-align: center;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -150px;
}
.login_tip {
    margin-left: auto;
    margin-right: auto;
    width: 350px;
}
</style>
