import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import StatusOfPostedIllustrations from '@/views/StatusOfPostedIllustrations'
import CheckYourVote from '@/views/CheckYourVote'
import Staff from '@/views/Staff'

Vue.use(VueRouter)
Vue.config.productionTip = false

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'root',
      component: Home,
    },
    {
      path: '/status_of_illustrations',
      name: 'status-of-illustrations',
      component: StatusOfPostedIllustrations,
    },
    {
      path: '/check_your_vote',
      name: 'check-your-vote',
      component: CheckYourVote,
    },
    {
      path: '/staff',
      name: 'staff',
      component: Staff,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})
