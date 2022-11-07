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
    redirect: '/malachi/dashboards',
    component: view('Index'),
    children: [
      {
        path: 'dashboards',
        redirect: 'dashboards/analytics',
        name: 'dashboard',
        component: view('Dashboard/dashboard'),
        children: [
          {
            path: 'analytics',
            name: 'analytics',
            component: view('Dashboard/pages/analytics')
          }, {
            path: 'ecommerce',
            name: 'ecommerce',
            component: view('Dashboard/pages/ecommerce')
          }
        ]
      }, {
        path: 'layouts',
        name: 'layouts',
        component: view('Layouts/layouts')
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
