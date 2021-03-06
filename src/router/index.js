import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/despre',
    name: 'Despre',
    // beforeEnter: (to, from, next) => {
    //   window.EventBus.dispatch('aboutenter')
    //   next()
    // },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Despre.vue')
  },
  {
    path: '/parteneri',
    name: 'Parteneri',
    component: () => import('../views/Parteneri.vue')
  },
  {
    path: '/lucrari',
    name: 'Lucrari',
    component: () => import('../views/Lucrari.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
]


const router = new VueRouter({
  routes
})


router.beforeEach((to, from, next) => {
  switch(to.path){
    case '/despre':
      if(store.state.isMobile == false){
        window.EventBus.dispatch('aboutenter')
        next()
      }
      next()
    break
    case '/parteneri':
    case '/contact':
      if(store.state.isMobile == false){
        window.EventBus.dispatch('otherenter')
        next()
      }
      next()
    break;
    case '/lucrari':
      next(from.path)
    break
    default:
      window.EventBus.dispatch('resetmainclass')
      next()
  }
})


export default router
