/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import '@/assets/icons'
import 'element-ui/lib/theme-chalk/index.css'
import './common/style/cm.scss'

Vue.config.productionTip = false
Vue.use(Element, { size: 'medium', zIndex: 3000 })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
