<template>
    <el-menu
    :collapse="isCollapse"
    background-color="#304156"
    text-color="#fff"
    active-text-color="#409EFF" :unique-opened = "true"
    class="el-menu-vertical" mode="vertical" :default-active="$route.path" >
        <div class="menu-wrapper">
          <template v-for="item in menuList" v-if = "!item.hidden && item.children">
            <!--一级菜单-->
            <router-link v-if="item.children.length === 1 && !item.children[0].children" :to="item.path + '/' + item.children[0].path" :key="item.children[0].name">
              <el-menu-item :index = "item.path+'/'+item.children[0].path" class='submenu-title-noDropdown'>
                <i v-bind:class="item.icon"></i>
                <span >{{item.children[0].title}}</span>
              </el-menu-item>
            </router-link>
            <!--一级菜单-->
            <!--有需要二级子菜单的-->
            <el-submenu v-else :index="item.name || item.path" :key="item.name">
              <template slot="title">
                <i v-bind:class="item.icon"></i>
                <span>{{item.title}}</span>
              </template>
              <template v-for="childitem in item.children" >
                <!--二级菜单-->
                <router-link :to="item.path + '/' + childitem.path" :key="childitem.name">
                  <el-menu-item :index = "childitem.path" :key="childitem.name">
                    <i v-bind:class="childitem.icon"></i>
                    <span >{{childitem.title}}</span>
                  </el-menu-item>
                </router-link>
                <!--二级菜单-->
              </template>
            </el-submenu>
            <!--有需要二级子菜单的-->
    </template>
  </div>
    </el-menu>
</template>
<script>
export default {
  props: {
    menuList: {
      type: Array
    },
    isCollapse: {
      type: Boolean
    }
  }
}
</script>
<style lang="scss">
a {
  text-decoration:none;
}
.el-menu--collapse .el-submenu .el-menu {
    border :0px;
}
.el-menu {
  height:100%;
}
.menu-wrapper {
  height:100%;
}
.el-menu-vertical:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
.el-menu-vertical.el-menu--collapse{
  .el-icon-arrow-right,.el-submenu__title>span, .submenu-title-noDropdown span{
    display:none;
  }
  .nest-menu .el-submenu__title span{
    display:block;
  }
}
</style>
