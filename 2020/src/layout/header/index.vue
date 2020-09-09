<template>
  <el-header class="cm_bg_color1">
    <el-row>
      <el-col :span="12" :offset="12" class="cm_text_right">
        <el-dropdown>
          <i class="el-icon-setting"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>新增</el-dropdown-item>
            <el-dropdown-item>删除</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <span>王小虎</span>
      </el-col>
    </el-row>
  </el-header>
</template>
