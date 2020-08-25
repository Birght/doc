<template>
  <el-menu :default-openeds="['1']">
    <el-submenu v-for="(sub1,index) in curRoutes" :key="index" index="1">
      <template slot="title">
        <i :class="sub1.meta.icon"></i>{{sub1.meta.title}}--{{index}}
        <el-menu-item-group v-for="(item,ii) in sub1.children" :key="ii">
          <template slot="title">{{item.meta.title}}</template>
          <el-menu-item index="1-1">{{item.meta.title}}</el-menu-item>
        </el-menu-item-group>
      </template>
    </el-submenu>
  </el-menu>
</template>
<script>
import { constRoutes } from '@/router'

export default {
  name: 'menuAside',
  data () {
    return {
      curRoutes: constRoutes
    }
  },
  mounted () {
    console.log(constRoutes, '1111')
  }
}
</script>
