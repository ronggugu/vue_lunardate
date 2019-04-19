import Vue from 'vue'
import App from './App.vue'
import router from '@/router/router'
import 'lib-flexible'

Vue.config.productionTip = false

let VM = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

export default VM
