const files = require.context('.', true, /\.js$/)
let Allroutes = []
files.keys().forEach(key => {
  if (key === './index.js') {
    return
  };
  Allroutes = Allroutes.concat(files(key).default)
})
export default Allroutes
