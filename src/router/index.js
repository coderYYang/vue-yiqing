import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home/Home'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/hesuan',
      name: 'HeSuan',
      component: () => import('../views/HeSuan'),
      meta: {
        title: '核酸'
      }
    },
    {
      path: '/riskArea',
      name: 'RiskArea',
      component: () => import('../views/RiskArea'),
      meta: {
        title: '风险地区'
      }
    },
    {
      path: '/prevention',
      name: 'Prevention',
      component: () => import('../views/Prevention'),
      meta: {
        title: '防疫物资'
      }
    },
    {
      path: '/citys/:citysName',
      name: 'Citys',
      component: () => import('../views/Citys'),
      meta: {
        title: '城市详情'
      }
    },
    {
      path: '/travel',
      name: 'Travel',
      component: () => import('../views/Travel'),
      meta: {
        title: '出行防疫'
      }
    },
    {
      path: '/selectCity',
      name: 'SelectCity',
      component: () => import('../views/SelectCity'),
      meta: {
        title: '国内疫情'
      }
    }
  ]
})
