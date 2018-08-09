// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'
import '../node_modules/material-design-lite/dist/material.css'
import "../node_modules/material-design-lite/material.min.css"
// import '../node_modules/mdbvue/build/css/mdb.css'

import BootstrapVue from 'bootstrap-vue'
import aaa from 'material-design-lite'
import VueMaterial from 'vue-material'
import '../node_modules/vue-material/dist/vue-material.min.css'
import '../node_modules/vue-material/dist/theme/default.css'

import '../node_modules/material-design-icons-iconfont/dist/material-design-icons.css'
import '../node_modules/vuetify/dist/vuetify.min.css'
import '../node_modules/vuetify/src/stylus/main.styl'




import Vuelidate from 'vuelidate'
import VueReasource from 'vue-resource'
import Pagination from 'vuejs-uib-pagination'
import mpagination from 'vue-multiple-pagination'
import Vuetify from 'vuetify'


Vue.use(mpagination)
Vue.use(Vuelidate)
Vue.use(VueReasource)
Vue.use(VueMaterial)
Vue.use(Pagination)

 
Vue.use(Vuetify)
// import * as uiv from 'uiv'
// import Mdb from 'mdbvue'

/* import * as uiv from 'uiv'
Vue.use(uiv) */

Vue.config.productionTip = false

// Vue.use(SuiVue)
Vue.use(BootstrapVue)
Vue.use(aaa)
// Vue.use(uiv)
// Vue.use(Mdb)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
