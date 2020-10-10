
<template>
  <div>
    <el-menu
      class="sidebar-menu"
      router
      :default-active="$route.path"
      :collapse="!sidebar.opened"
      :collapse-transition="false"
      :show-timeout="200"
      unique-opened
      background-color="#272a36"
      text-color="#e7e7e7"
      active-text-color="#ff6600">
      <el-scrollbar wrap-class="scrollbar-wrapper" style="height: 100%">
        <template v-for="group in menuList">
          <el-submenu
            v-if="group.children && group.children.length > 0"
            :key="group.id"
            :index="group.id">
            <template slot="title">
              <i :class="group.icon"></i>
              <span slot="title">{{ group.name }}</span>
            </template>
            <el-menu-item
              v-for="menu in group.children"
              :key="menu.id"
              :index="menu.url">
              <i class="icon iconfont icon-pointer"
                style="vertical-align: baseline"/>
              {{ menu.name }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :key="group.id" :index="group.url">
            <i :class="group.icon"></i>
            <span slot="title">{{ group.name }}</span>
          </el-menu-item>
        </template>
      </el-scrollbar>
    </el-menu>
  </div>
</template>
