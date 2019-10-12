<template>
  <div class="container">
    <div class="login-container">
      <div class="title">用户登录</div>
      <div>
        <el-form ref="form" :rules="rules" :model="form" label-width="70px">
          <el-form-item label="用户名" prop="username"><el-input v-model="form.username" placeholder="请输入用户名"></el-input></el-form-item>
          <el-form-item label="密码" prop="password"><el-input v-model="form.password" type='password' placeholder="请输入密码"></el-input></el-form-item>
          <el-form-item><el-button type="primary" style="width: 150px;" :loading="loading" @click="loginClick">登陆</el-button></el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
import { RSAencrypt } from '@/utils/rsa.js'
export default {
  data () {
    return {
      loading: false,
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    loginClick () {
      console.log('点击登陆:', this.form)
      this.$refs['form'].validate((valid) => {
        if (valid) {
          this.loading = true
          let params = {
            ...this.form,
            username: this.form.username,
            password: RSAencrypt(this.form.password),
            grant_type: 'password',
            scope: 'server',
            userType: 1
          }
          this.$store.dispatch('userlogin', params).then(
            (data) => {
              this.loading = false
              if (data.code === 1) {
                this.$router.push({
                  path: '/shoppingMall'
                })
              } else {
                this.$message({
                  message: data.msg,
                  type: 'error'
                })
              }
              console.log('登陆成功:', data)
              
            },
            (error) => {
              this.loading = false
              console.log('error:', error)
              this.$message({
                message: error,
                type: 'error'
              })
            }
          )
        } else {
          this.loading = false
          console.log('error submit!!');
          return false;
        }
      })
    }
  }
}
</script>
<style scoped lang="scss">
  .container{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background:-webkit-linear-gradient(to right, red, blue); 
    background:linear-gradient(to right,red,blue);
  }
  .login-container{
    height: 360px;
    width: 320px;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.09);
    border-radius: 4px;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 20px;
    .title{
      margin-top: 43px;
      margin-bottom: 31px;
      font-size: 18px;
      color: #282828;
      text-align: center;
    }
  }
</style>
