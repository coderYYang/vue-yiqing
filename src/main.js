import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/base.css'
import 'vant/lib/index.css'
import { Tab, Tabs, Field, Popup, Cascader, Button,IndexBar, IndexAnchor, Cell } from "vant";
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Field)
Vue.use(Popup)
Vue.use(Cascader)
Vue.use(Button)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Cell)
import demo from './utils/echarts'
Vue.use(demo)

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
