<template>
  <el-menu
      @select="handleSelect"
      active-text-color="#ffd04b"
      default-active="/home"
      :collapse="isCollapse"
      :class="{ 'myMenu': isActive }"
      >
      <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
          <template slot="title">
              <i class="el-icon-s-data"></i>
              <span>综合</span>
          </template>
          <el-menu-item index="/doc">文档</el-menu-item>
          <el-menu-item index="/unit">组件</el-menu-item>
      </el-submenu>
  </el-menu>
</template>
<script>
import { constRoutes } from '@/router'
export default {
  name: 'menuAside',
  data () {
    return {
      isCollapse: false,
      isActive: false,
      curRoutes: constRoutes
    }
  },
  mounted () {
    console.log(constRoutes, '1111')
  },
  methods: {
    handleSelect (key, keyPath) {
      this.$router.push({
        path: key
      })
    }
  }
}
</script>
