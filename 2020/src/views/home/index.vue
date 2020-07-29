<template>
  <div>
      home
        <div v-for="(item,index) in imgArr" :key="index">
          <img :src="item.src" alt="" class="test_img">
        </div>
  </div>
</template>

<script>
// import aaa from '@/assets/images/111.png'
export default {
  name: 'home',
  data () {
    return {
      imgArr: [
        {
          src: require('../../../static/images/111.jpg')
        }
      ]
    }
  },
  mouted () {
    console.log(this.imgArr)
  }

}
</script>

<style scoped>
.test_img{
  height: 100px;
  width: 100px;
}
</style>>
