import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import HomePage from '@/pages/Home/HomePage'
import NoUIAmap from '@/components/Index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/homePage',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: '/no_UI_Amap',
          name: 'No_UI_Amap',
          component: NoUIAmap
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  next()
})

router.afterEach((to, from) => {
  // 关闭加载进度条
  // if (to.matched[to.matched.length - 1].name === 'Error') {
  //   iView.LoadingBar.error()
  // } else {
  //   iView.LoadingBar.finish()
  // }
})

export default router
