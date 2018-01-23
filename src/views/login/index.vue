<template>
<div id="login-container">
  <div class="header-w3l">
    <h1>管理系統</h1>
  </div>
  <!--main-->
  <div class="main-agileinfo">
    <div class="wthree-form">
      <el-form :model="loginForm" status-icon :rules="loginRules" ref="loginForm">
        <div class="form-sub-w3">
          <el-form-item label="" prop="username">
            <el-input class='username' placeholder="請填寫賬號" v-model ="loginForm.username"></el-input>
          </el-form-item>
        </div>
        <div class="form-sub-w3">
          <el-form-item label="" prop="password">
            <el-input class='password' type="password" placeholder="請輸入密碼"  v-model="loginForm.password" auto-complete="off"></el-input>
          </el-form-item>
        </div>
        <div class="clear"></div>
        <div class="submit-agileits">
          <input type="submit" value="登錄" @click="submitForm('loginForm')">
        </div>
      </el-form>
    </div>
  </div>
  <div class="footer">
    <p>&copy; 2018 shiekiu</p>
  </div>
</div>
</template>
<style scoped>
/* Header */
.main-agileinfo {
    width: 30%;
    margin: 0 auto;
    padding: 4em 2em;
    background: rgba(255, 255, 255, 0.07);
    -webkit-box-shadow: 0 6px 12px 0 rgb(37, 37, 37);
    -moz-box-shadow: 0 6px 12px 0 rgb(37, 37, 37);
    box-shadow: 0 6px 43px 0 rgba(0, 0, 0, 0.4);
}
.wthree-form h2 {
    color: #fff;
    font-size: 20px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 1.5em;
    letter-spacing: 3px;
    text-shadow: 3px 3px 4px #000;
}
h1 {
    text-align: center;
    font-size: 45px;
    font-weight: 300;
    margin: 40px 0;
    color: #fff;
    letter-spacing: 9px;
    text-shadow: 4px 4px 3px #000;
    word-spacing: 4px;
    font-weight: 500;
    font-family: 'Josefin Slab', serif;
}
form {
    margin: 0 auto;
    width: 100%;
}
.submit-agileits {
    text-align: center;
    margin-top: 2em;
}
.form-sub-w3 {
    position: relative;
    margin-bottom: 20px;
}
.form-sub-w3 input[type="text"], input[type="password"] {
    width: 85%;
    padding: 15px 66px 15px 19px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.16);
    border: 0;
    border-left: 2px solid #00c6d7;
    font-size: 15px;
    letter-spacing: 1.5px;
    color: #fff;
    outline: 0;
    -webkit-box-shadow: 0 6px 12px 0 rgb(37, 37, 37);
    -moz-box-shadow: 0 6px 12px 0 rgb(37, 37, 37);
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.4);
    font-family: 'Open Sans', sans-serif;
}
.submit-agileits input[type="submit"] {
    text-align: center;
    border: 0;
    color: #ffffff;
    font-size: 17px;
    font-weight: 600;
    padding: 14px 90px;
    background-color: rgba(0, 0, 0, 0.34);
    border: 3px solid rgba(255, 255, 255, 0.43);
    box-shadow: 0 12px 32px 0 rgba(0, 0, 0, 0.71);
    outline: none;
    cursor: pointer;
    font-family: 'Open Sans', sans-serif;
    letter-spacing: 1px;
    transition: 0.5s ease-in-out;
}
.submit-agileits input[type="submit"]:hover {
    color: #ffffff;
    border-color: #00c6d7;
}
/*--copy-right-starts-here--*/
.footer p {
    margin: 0 auto;
    text-align: center;
    margin: 8em 0;
    font-size: 14px;
    color: #fff;
    letter-spacing: 2px;
    text-transform: none;
}
.footer a {
    color: #00c6d7;
    transition: 0.3s all;
}
.footer a:hover{
    color: #fff;
    transition: 0.3s all;
}
/*--copy-right-ends-here--*/
/*--placeholder-color--*/

::-webkit-input-placeholder {
   color:#fff;
}

:-moz-placeholder { /* Firefox 18- */
   color: #fff;
}

::-moz-placeholder { /* Firefox 19+ */
   color: #fff;
}

:-ms-input-placeholder {
   color: #fff;
}
/*--//placeholder-color--*/
/*--- Responsive Code ---*/
@media screen and (max-width: 1920px) {
   h1 {
     margin: 150px 0 100px;
     font-size: 55px;
   }
   .copyright p {
     margin: 50px 0px 150px;
   }
}
@media screen and (max-width: 1680px) {
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 82.6%;
   }
   h1 {
     margin: 130px 0 70px;
   }
}
@media screen and (max-width: 1600px) {
   h1 {
     margin: 2em 0 1.5em;
   }
   .copyright p {
     margin: 50px 0px;
   }
   .icon-w3 {
     right: 0px;
     bottom: 0;
     width: 53px;
     height: 50px;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 81.8%;
   }
   .footer p {
     margin: 4em 0em;
   }
   h1 {
     font-size: 50px;
   }
}
@media screen and (max-width: 1440px) {
   .main-agileinfo {
     width: 33%;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 81.5%;
   }
}
@media screen and (max-width: 1366px) {
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 80.8%;
   }
   h1 {
     margin: 1.7em 0 1em;
     font-size: 50px;
   }
}
@media screen and (max-width: 1280px) {
   .main-agileinfo {
     width: 36%;
   }
   .footer p {
     margin: 5em 0em;
   }
}
@media screen and (max-width: 1080px) {
   .main-agileinfo {
     width: 42%;
   }
   h1 {
     margin: 82px 0 0px;
   }
   .footer p {
     margin: 3em 0 4em;
   }
}
@media screen and (max-width: 1050px) {
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 83.5%;
   }
}
@media screen and (max-width: 1024px) {
   .main-agileinfo {
     width: 45%;
   }
   .footer p {
     margin: 4em 0em;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 80.8%;
   }
   h1 {
     margin: 1.8em 0 0.8em;
   }
   .submit-agileits input[type="submit"] {
     padding: 11px 90px;
   }
}

@media screen and (max-width: 991px) {
   h1 {
     margin: 1.5em 0 0.7em;
     font-size: 46px;
   }
   .footer p {
     margin: 3em 0em;
   }
   .main-agileinfo {
     padding: 3em 2em;
   }
   .wthree-form h2 {
     font-size: 18px;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 80.1%;
   }
}
@media screen and (max-width: 900px) {
   .main-agileinfo {
     width: 50%;
   }
}
@media screen and (max-width: 800px) {
   .main-agileinfo {
     width: 55%;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 79.8%;
   }
}
@media screen and (max-width: 768px) {
   .main-agileinfo {
     width: 58%;
   }
   h1 {
     margin: 2.5em 0 1em;
   }
   .footer p {
     margin: 5em 0em;
   }
   label.anim a {
     margin-top: 3px;
   }
}
@media screen and (max-width: 767px) {
   h1 {
     margin: 1.2em 0 0.7em;
   }
   .footer p {
     margin: 3em 0em;
   }
}
@media screen and (max-width: 736px) {
   .main-agileinfo {
     width: 60%;
   }
   h1 {
     font-size: 42px;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 79.7%;
   }
   .footer p {
     margin: 2.3em 0em;
   }
}
@media screen and (max-width: 667px) {
   .main-agileinfo {
     width: 68%;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     padding: 12px 60px 12px 15px;
     font-size: 14px;
     width: 82.9%;
   }
   .icon-w3 {
     width: 45px;
     height: 43px;
   }
   .icon-w3 i {
     font-size: 18px;
     line-height: 44px;
   }
   .footer p {
     margin: 2.7em 0em;
   }
}
@media screen and (max-width: 640px) {
   .main-agileinfo {
     width: 70%;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 82.8%;
   }
}
@media screen and (max-width: 600px) {
   .main-agileinfo {
     width: 73%;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 82.5%;
   }
   .footer p {
     margin: 3em 0em;
     font-size: 13px;
   }
}
@media screen and (max-width: 568px) {
   .main-agileinfo {
     width: 80%;
   }
   h1 {
     font-size: 38px;
     letter-spacing: 8px;
   }
   .footer p {
     margin: 2.2em 1em 2em;
     line-height: 28px;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 82.5%;
   }
}
@media screen and (max-width: 480px) {
   .main-agileinfo {
     width: 80%;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 80%;
   }
   h1 {
     letter-spacing: 5px;
   }
   .wthree-form h2 {
     font-size: 16px;
   }
   .footer p {
     margin: 2.2em 2em 2em;
   }
}
@media screen and (max-width: 440px) {
   h1 {
     letter-spacing: 4px;
     font-size: 36px;
     margin: 1.4em 0 0.9em;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 78%;
   }
   .main-agileinfo {
     padding: 2.5em 2em;
   }
}
@media screen and (max-width: 414px) {
   h1 {
     font-size: 35px;
   }
   .form-sub-w3 input[type="text"], input[type="password"] {
     width: 77%;
   }
   .footer p {
     margin: 3.2em 2em;
   }
}
@media screen and (max-width: 384px) {
   .form-sub-w3 input[type="text"], .form-sub-w3 input[type="password"] {
     width: 73.8%;
   }
   h1 {
     font-size: 31px;
   }
   .wthree-form h2 {
     letter-spacing: 2px;
   }
}
@media screen and (max-width: 320px) {
   .main-agileinfo {
     padding: 1.5em 1.3em;
     width: 80%;
   }
   h1 {
     font-size: 32px;
     letter-spacing: 0.5px;
     margin: 1em 0 0.6em;
   }
   .wthree-form h2 {
     letter-spacing: 1.5px;
     font-size: 14px;
     margin-bottom: 1em;
   }
   .form-sub-w3 input[type="text"], .form-sub-w3 input[type="password"] {
     padding: 12.5px 60px 12.5px 15px;
     font-size: 13px;
     width: 68.2%;
   }
   .submit-agileits input[type="submit"] {
     padding: 8px 68px;
     font-size: 15px;
   }
   .submit-agileits {
     margin-top: 1.3em;
   }
   .footer p {
     margin: 1.6em 2em;
     letter-spacing: 1.4px;
   }
}
/*--- //Responsive Code ---*/
</style>
<script>
export default {
  data () {
    let checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('账号不能为空'))
      } else {
        callback()
      }
    }
    let validatePassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        password: [{ validator: validatePassword, trigger: 'blur' }],
        username: [{ validator: checkUsername, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$store.dispatch('LoginIn', this.loginForm).then(() => {
            console.log(this.$store)
            // this.$router.push({ path: '/dashboard/index' })
          }).catch(() => {
          })
        } else {
          console.log('登录失败!!')
          return false
        }
      })
    }
  }
}
</script>
