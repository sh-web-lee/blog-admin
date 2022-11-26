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
    path: '/register',
    name: 'register',
    component: view('Login/register')
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
        redirect: 'layouts/category',
        name: 'layouts',
        component: view('Layouts/layouts'),
        children: [
          {
            path: 'category',
            name: 'category',
            component: view('Layouts/pages/category')
          }
        ]
      }, {
        path: 'article',
        name: 'article',
        redirect: 'article/post',
        component: view('Article/article'),
        children: [
          {
            path: 'post',
            name: 'post',
            component: view('Article/pages/post')
          }, {
            path: 'lists',
            name: 'lists',
            component: view('Article/pages/lists')
          }, {
            path: 'category',
            name: 'ar-category',
            component: view('Article/pages/category')
          }, {
            path: 'tags',
            name: 'tags',
            component: view('Article/pages/tags')
          }
        ]
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
