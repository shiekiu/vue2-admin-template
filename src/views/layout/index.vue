<template>
  <div class="container-layout">
    <!--菜单-->
    <div :class="!isCollapse?'left':'left coll'" style="background-color: rgb(238, 241, 246);height:100%;">
        <v-sidebar :menuList = "menuList" :isCollapse = "isCollapse"></v-sidebar>
    </div>
    <div class="right">
      <!--导航条-->
      <div class="top">
        <!--菜单缩进切换-->
        <i :class="!isCollapse?'icon iconfont icon-menu-left':'icon iconfont icon-menu-right' " @click="menuChange"></i>
        <v-navbar></v-navbar>
      </div>
      <v-tagsbar v-if = 'breadcrumblist.length > 0'></v-tagsbar>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .container-layout{
    display: flex;
    height:100%;
    .left  {
      width:200px;
      transition: all .2s ease-in;
      height:100%;
      position: relative;
      z-index:1000;
      background-color: rgb(48, 65, 86);
      .menu{
        position: absolute;
        width: 100%!important;
      }
      &.coll{width:64px;}
    }
    .right{
      flex:1;
      min-height: 100%;
      overflow:auto;
    }
    .top{
        background:#fff;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content:flex-start;
        border-bottom:1px solid #e6e6e6;
        i{
          font-size:24px;
          padding-left:10px;
          padding-right:10px;
          cursor: pointer;
        }
    }
    .wrapper{
      padding:20px;
    }
  }
</style>
<script>
import sidebar from './components/sidebar'
import navbar from './components/navbar'
import tagsbar from './components/tagsbar'
export default {
  components: {
    'v-sidebar': sidebar,
    'v-navbar': navbar,
    'v-tagsbar': tagsbar
  },
  data () {
    return {
      menuList: [],
      breadcrumblist: [],
      isCollapse: false
    }
  },
  created () {
    this.getMenu()
    this.getBreadcrumb()
  },
  methods: {
    menuChange () {
      this.isCollapse = !this.isCollapse
    },
    // 获取菜单
    getMenu () {
      this.$router.options.routes.map((e, i) => {
        if (!e.hidden) {
          this.menuList.push(e)
        }
      })
    },
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => item.name)
      this.breadcrumblist = matched
    }
  }
}
</script>
