import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import StatusOfPostedIllustrations from './views/StatusOfPostedIllustrations'

Vue.use(VueRouter)
Vue.config.productionTip = false

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/status_of_illustrations',
      component: StatusOfPostedIllustrations,
    },
  ],
})
