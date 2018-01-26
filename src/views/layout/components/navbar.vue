<template>
  <div class="navbar">
  <el-menu mode="horizontal" class="navbar-container">
    <v-breadcrumb class="breadcrumb-container"></v-breadcrumb>
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" :src="accountAvatar">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
              {{nickName}}
          </el-dropdown-item>
          <router-link to="/account/password">
            <el-dropdown-item>
              <span @click="modifyPassword" style="display:block;">更改密码</span>
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span @click="logout" style="display:block;">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <v-screenfull class="screenfull right-menu-item"></v-screenfull>
      </el-tooltip>
    </div>
  </el-menu>
  <el-dialog title="更改密码" :visible.sync="passwordFormVisible" width="70%">
    <el-form :model="passwordData" ref="formData">
      <el-form-item label="賬號" :label-width="formLabelWidth">
        <span>{{accountName}}</span>
      </el-form-item>
      <el-form-item label="原密码" :label-width="formLabelWidth" prop="oldpassword" :rules="[ { required: true, message: '请输入原密码', trigger: 'blur' } ]">
        <el-input type="password" v-model="passwordData.oldpassword" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="新密码" :label-width="formLabelWidth" prop="newpassword" :rules="[ { required: true, message: '请输入新密码', trigger: 'blur' } ]">
        <el-input type="password" v-model="passwordData.newpassword" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="passwordFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="handleSave('formData')">確 定</el-button>
    </div>
  </el-dialog>
  </div>
</template>
<script>
import Breadcrumb from './breadcrumb'
import Screenfull from './screenfull'
export default {
  components: {
    'v-breadcrumb': Breadcrumb,
    'v-screenfull': Screenfull
  },
  props: {
    breadcrumblist: {
      type: Array
    }
  },
  mounted () {
    this.accountName = this.$store.state.user.accountName
    this.accountAvatar = this.$store.state.user.accountAvatar
    this.nickName = this.$store.state.user.nickName
  },
  methods: {
    modifyPassword () {
      this.passwordFormVisible = true
    },
    handleSave (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.passwordFormVisible = false
        } else {
          return false
        }
      })
    },
    logout () {
      this.$store.dispatch('loginOut')
      this.$router.push({ path: '/' })
    }
  },
  data () {
    return {
      accountName: '',
      accountAvatar: '',
      nickName: '',
      passwordFormVisible: false,
      formLabelWidth: '80px',
      passwordData: {
        user_name: '',
        oldpassword: '',
        newpassword: ''
      }
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  width:100%;
  .navbar-container{
    display:flex;
  }
  .breadcrumb-container{
    flex:1;
  }
  .right-menu {
    flex:1;
    width: 100%;
    height: 100%;
    &:focus{
     outline: none;
    }
    .right-menu-item {
      // display: inline-block;
      margin: 0 8px;
      float: right;
    }
    .screenfull {
      height: 50px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
