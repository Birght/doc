<template>
  <div>
    <el-container>
        <el-header class="cm_bg_color1">
          <el-row>
            <el-col :span="12" :offset="12" class="cm_text_right">
            </el-col>
          </el-row>
        </el-header>
        <el-container>
          <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <menuAside></menuAside>
          </el-aside>
          <el-main>
            <appMain></appMain>
          </el-main>
        </el-container>
    </el-container>
  </div>
</template>
<script>
import menuAside from '@/layout/menuSlider'
import appMain from '@/layout/appMain'

export default {
  name: 'layout',
  components: {menuAside, appMain}
}
</script>
