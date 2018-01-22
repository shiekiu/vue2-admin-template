<template>
  <el-menu class="navbar" mode="horizontal">
    <v-breadcrumb class="breadcrumb-container"></v-breadcrumb>
    <div class="right-menu">
      <el-dropdown class="avatar-container right-menu-item" trigger="click">
        <div class="avatar-wrapper">
          <img class="user-avatar" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1963855246,894575748&fm=27&gp=0.jpg">
          <i class="el-icon-caret-bottom"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
              管理员
          </el-dropdown-item>
          <router-link to="/account/password">
            <el-dropdown-item>
              修改密码
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
  methods: {
    logout () {
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
  .breadcrumb-container{
    float: left;
  }
  .right-menu {
    float: right;
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
