import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const files = require.context('./modules', false, /\.js$/)
let Allroutes = []
files.keys().forEach(key => {
  Allroutes = Allroutes.concat(files(key).default)
})
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  };
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)
export const constRoutes = Allroutes
export default new Router({
  routes: Allroutes
})
