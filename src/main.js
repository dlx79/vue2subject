import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import vuex from 'vuex'

import store from './store'


Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(vuex)


new Vue({
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
