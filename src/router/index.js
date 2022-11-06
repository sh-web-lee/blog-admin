import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: view('Login/login')
  },
  {
    path: '/malachi',
    redirect: '/malachi/dashboard',
    component: view('Index'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: view('Dashboard/dashboard')
      }, {
        path: 'exchange',
        name: 'exchange',
        component: view('Exchange/exchange')
      }, {
        path: 'library',
        name: 'library',
        component: view('Library/library')
      }, {
        path: 'schedules',
        name: 'schedules',
        component: view('Schedules/schedules')
      }, {
        path: 'payouts',
        name: 'payouts',
        component: view('Payouts/payouts')
      }, {
        path: 'settings',
        name: 'settings',
        component: view('Settings/settings')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function view (name) {
  return resolve => require(['@/views/' + name + '.vue'], resolve)
}

export default router
