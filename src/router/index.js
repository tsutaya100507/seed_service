import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
// import engineers from './components/users/engineers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/engineers',
      name: 'engineers',
      components: engineers
      // component: require('./components/users/enginners')
    }
  ]
})
