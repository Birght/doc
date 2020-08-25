import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const files = require.context('./modules', false, /\.js$/)
let Allroutes = []
files.keys().forEach(key => {
  Allroutes = Allroutes.concat(files(key).default)
})
console.log(Allroutes)
export const constRoutes = Allroutes
export default new Router({
  routes: Allroutes
})
