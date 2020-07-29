<template>
  <div>
      home
        <div v-for="(item,index) in imgesArr" :key="index">
          <img :src="imgUrl(item)" alt="" class="test_img">
        </div>
  </div>
</template>

<script>
var imagesContext = require.context('@/assets/images/', false, /\.png$/)
console.log(imagesContext)
console.log(imagesContext('./111.png'))
console.log(imagesContext.keys())

export default {
  name: 'home',
  data () {
    return {
      images: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    imgesArr: () => {
      return imagesContext.keys()
    }
  },
  methods: {
    imgUrl: function (path) {
      return imagesContext(path)
    }
  }

}
</script>

<style scoped>
.test_img{
  height: 100px;
  width: 100px;
}
</style>>
