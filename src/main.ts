import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VuePageStack from 'vue-page-stack'
import LocalConfig from '@/config.json'

Vue.config.productionTip = false

if (LocalConfig.VuePageStackEnabled) {
  Vue.use(VuePageStack, { router })
}

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
