import Vue from 'vue'
import App from '@/App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import childComponent from '@/childComponent.vue'
import eventBus from '@/plugins/evet-bus'
import VueRouter from 'vue-router'
import routes from '@/routes'
import MsToMm from '@/filters/ms-to-mm'
import Blur from '@/directives/blur'
import store from '@/store'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project

Vue.use(VueRouter)
Vue.use(eventBus)
Vue.use(MsToMm)
Vue.use(BootstrapVue)
Vue.component('child', childComponent)
Vue.use(Blur)

const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store
})
