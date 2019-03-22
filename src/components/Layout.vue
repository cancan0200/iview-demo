<template>
  <div id="layout">
    <div class=""></div>
    <div class="menu-wrapper">
      <Menu  class="menu" :theme="thame" active-name="1-2" :open-names="['1']">
        <h1 class="title">iView Demo</h1>
        <Submenu name="1">
            <template slot="title">
                <Icon type="ios-paper" />
                组件
            </template>
            <router-link to='/Home'>
                <MenuItem name="1-1">首页</MenuItem>
            </router-link>
            <router-link to='/Table'>
                <MenuItem name="1-2">Table</MenuItem>
            </router-link>
            <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
            <template slot="title">
                <Icon type="ios-people" />
                应用
            </template>
            <router-link>
                <MenuItem name="2-1">权限管理</MenuItem>
            </router-link>
            <MenuItem name="2-2">权限管理测试部分</MenuItem>
        </Submenu>
        <Submenu name="3">
            <template slot="title">
                <Icon type="ios-stats" />
                统计分析
            </template>
            <MenuGroup title="使用">
                <MenuItem name="3-1">新增和启动</MenuItem>
                <MenuItem name="3-2">活跃分析</MenuItem>
                <MenuItem name="3-3">时段分析</MenuItem>
            </MenuGroup>
            <MenuGroup title="留存">
                <MenuItem name="3-4">
                  hhh
                </MenuItem>
                <MenuItem name="3-5">流失用户</MenuItem>
            </MenuGroup>
        </Submenu>
      </Menu>
    </div>
    <div class="content-wrapper">
        <Breadcrumb>
            <BreadcrumbItem to="/">Home</BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
        </Breadcrumb>
      <router-view></router-view>
    </div>
    <div class="copyright">
       <strong>Copyright &copy;{{year}} Can Zhou Test.</strong> All rights
    </div>
    <!-- <router-view/> -->
  </div>
</template>

<script type='ECMAscript'>
export default {
  data () {
    return {
      thame: 'dark'
    }
  },
  computed: {
    year () {
      let date = new Date()
      let year = date.getFullYear()
      return year
    }
  }
}
</script>

<style>
.menu-wrapper {
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}
.menu {
    height: 100%;
}
.title {
    color: #fff;
    font-size: 24px;
    padding: 14px 24px;
    font-weight: normal;
}
.content-wrapper {
  position: absolute;
  bottom: 51px;
  top: 15px;
  left: 240px;
  right: 0;
  padding: 10px 20px;
  height: auto;
}
.copyright {
  text-align: center;
  height: 50px;
  line-height: 50px;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 240px;
}
</style>
