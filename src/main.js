// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store/index'
import ElUpload from 'element-upload'
import sbAlert from './utils/mixin/alertApi'


/*import VueAwesomeSwiper from 'vue-awesome-swiper'*/
Vue.config.productionTip = false
/* eslint-disable no-new */
Vue.use(VueResource)
Vue.use(ElUpload)
Vue.use(sbAlert)
/*Vue.use(VueAwesomeSwiper)*/
new Vue({
  el: '#app',
  router,
  store,
  sbAlert,
  VueResource,
  template: '<App/>',
  components: { App }
})

