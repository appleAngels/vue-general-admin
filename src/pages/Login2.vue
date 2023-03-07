<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>system</span>
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
export default {
  name: 'Login',
  props: {
    msg: String
  },
  data () {
    const validName = (rule, value, callback) => {
      let reg = /^([a-zA-Z0-9]{4,12})$/
      if (value == '') {
        callback(new Error('please input username'))
      } else if (!reg.test(value)) {
        callback(new Error('please input 6-12 username'))
      } else {
        callback()
      }
    }
    const validPass = (rule, value, callback) => {
      let reg = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])\S*$/
      if (value == '') {
        callback(new Error('please input password'))
      } else if (!reg.test(value)) {
        callback(new Error('please input 6-12 password'))
      } else {
        callback()
      }
    }
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, validator: validName, trigger: 'blur' },
        ],
        // password: [
        //   { required: true, message: '111', trigger: 'blur' },
        //   { min: 6, max: 12, message: '6-12', trigger: 'blur' }
        // ],
        password: [
          { required: true, validator: validPass, trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
    login (loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          console.log('this.form', this.form);
          this.axios.post('https://rapserver.sunmi.com/app/mock/340/login', this.form).then(res => {
            console.log(res);
            localStorage.setItem('username', res.data.username)
            this.$message({
              type: 'success',
              message: '登录成功',
            })
            this.$router.push('/home')
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
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;

  .box-card {
    width: 450px;
    height: 300px;
  }
}
</style>
