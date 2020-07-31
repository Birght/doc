<template>
  <div>
      home
            <svg-icon icon-class="footbal"></svg-icon>
            <svg-icon icon-class="1-01"></svg-icon>
            <svg-icon icon-class="1-02"></svg-icon>
            <svg-icon icon-class="1-03"></svg-icon>
            <svg-icon icon-class="1-04"></svg-icon>
            <svg-icon icon-class="1-05"></svg-icon>
            <svg-icon icon-class="1-06"></svg-icon>

  </div>
</template>

<script>

export default {
  name: 'home',
  data () {
    return {
      images: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {

  },
  mounted () {
    console.log(11111)
    console.log(22)
    console.log(33)
    console.log(44)
    console.log(55)
  },
  methods: {
    imgUrl: function (path) {
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
