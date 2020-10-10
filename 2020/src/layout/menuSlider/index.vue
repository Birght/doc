<template>
  <el-menu
    @select="handleSelect"
    active-text-color="#ffd04b"
    default-active="/home"
    :collapse="isCollapse"
    :class="{ myMenu: isActive }"
  >
    <el-scrollbar wrap-class="scrollbar-wrapper" style="height: 100%">
      <el-menu-item index="/home">
        <i class="el-icon-s-data"></i>主页
      </el-menu-item>
      <div v-for="(item, index) in curRoutes" :key="index">
        <el-submenu
          index="2"
          v-if="item.hasOwnProperty('children') && item.children.length > 0"
        >
          <template slot="title">
            <i class="el-icon-s-data"></i>
            <span>综合</span>
          </template>
          <el-menu-item index="/doc">文档</el-menu-item>
          <el-menu-item index="/unit">组件</el-menu-item>
        </el-submenu>
      </div>
    </el-scrollbar>
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
