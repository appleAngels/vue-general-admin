<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span class="title">system</span>
      </div>
      <el-form label-width="80px" :model="form" ref="loginForm">
        <el-form-item label="username" prop="username" :rules="rules.username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="password" prop="password" :rules="rules.password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('loginForm')">submit</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { passRule, nameRule } from '@/utils/validate'
import { setToken } from '@/utils/setToken'
import { login } from '@/api/index'

export default {
  name: 'Login',
  props: {
    msg: String
  },
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, validator: nameRule, trigger: 'blur' },
        ],
        // password: [
        //   { required: true, message: '111', trigger: 'blur' },
        //   { min: 6, max: 12, message: '6-12', trigger: 'blur' }
        // ],
        password: [
          { required: true, validator: passRule, trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    login (loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          console.log('this.form', this.form);
          login(this.form).then(res => {
            // this.request.post('/login', this.form).then(res => {
            console.log(res);
            if (res.status == 200) {
              setToken('username', res.username)
              setToken('token', res.token)
              this.$message({
                type: 'success',
                message: '登录成功',
              })
              this.$router.push('/home')
            }

          }).catch(err => {
            console.log(err);
          })
        } else {
          console.log(this.form);
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.login {
  width: 100vw;
  height: 100vh;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('../assets/login-bg.jpg') center no-repeat;
  background-size: 100vw 100vh;

  .box-card {
    width: 450px;
    height: 300px;

    .title {
      font-size: 2rem;
    }

    .el-card__header {
      font-size: 3rem;
    }

    .el-button {
      width: 100%;
    }
  }
}
</style>
