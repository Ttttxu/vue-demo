<template>
  <mu-container class="login">
    <img src="../assets/logo.png">
    <mu-form ref="form" :model="validateForm" class="mu-demo-form">
      <mu-form-item label="用户名" prop="username" :rules="usernameRules">
        <mu-text-field v-model="validateForm.username" prop="username"></mu-text-field>
      </mu-form-item>
      <mu-form-item label="密码" prop="password" :rules="passwordRules">
        <mu-text-field type="password" v-model="validateForm.password" prop="password"></mu-text-field>
      </mu-form-item>
      <mu-form-item>
        <mu-button color="primary" @click="submit">提交</mu-button>
        <mu-button @click="clear">重置</mu-button>
      </mu-form-item>
    </mu-form>
  </mu-container>
</template>

<script>
  import {login} from '../api/api';
  import Cookies from 'js-cookie';
  import store from '../store/index'

  export default {
    name: "login",
    data() {
      return {
        usernameRules: [
          {validate: (val) => !!val, message: '必须填写用户名'},
          {validate: (val) => val.length >= 3, message: '用户名长度大于3'}
        ],
        passwordRules: [
          {validate: (val) => !!val, message: '必须填写密码'},
          {validate: (val) => val.length >= 3 && val.length <= 10, message: '密码长度大于3小于10'}
        ],
        argeeRules: [{validate: (val) => !!val, message: '必须同意用户协议'}],
        validateForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      submit() {
        this.$refs.form.validate().then((result) => {
          if(result){
            login(this.validateForm).then((res) => {
              if(res != null && res.data.code === "0"){
                Cookies.set("token", res.data.data, 1);
                this.$message({
                  message: '登录成功！',
                  type: 'success'
                });
                window.location.href = store.state.localUrl;
              }else{
                this.$message({
                  message: '用户名或密码错误！',
                  type: 'warning'
                });
              }
            }).catch((res) => {
              console.error(res);
            });
          }
        });
      },
      clear() {
        this.$refs.form.clear();
        this.validateForm = {
          username: '',
          password: '',
          isAgree: false
        };
      }
    }
  }
</script>

<style scoped>
  .login{
    text-align: center;
  }
  .mu-demo-form {
    margin: auto;
    width: 100%;
    max-width: 460px;
  }
</style>
