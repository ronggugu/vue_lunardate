import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.VUE_APP_URL,
  routes: [{
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      title: '关于我们'
    }
  }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    // 如果设置标题，拦截后设置标题
    document.title = to.meta.title
  }
  next()
})
export default router
