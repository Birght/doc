<template>
  <div>
12412
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogVisible: true,
      tableData: [
        {
          check: true,
          date: '1',
          name: '王小虎',
          address: '上海市普陀区金海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄沙江路 1518 弄'
        },
        {
          check: false,
          date: '2',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '3',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '4',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    }
  }
}
</script>
<style lang="scss" scoped>
.text1{
  height:100px;
  overflow-y: scroll;
}
</style>
