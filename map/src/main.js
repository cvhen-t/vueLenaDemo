import Vue from 'vue'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import router from './route/route'
import axios from 'axios';

if (process.env.NODE_ENV !== 'production') require('./mock')
Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

import jshint from "jshint";

window.JSHINT = jshint.JSHINT;
// 引入代码编辑器 

import { codemirror } from "vue-codemirror";

import "codemirror/lib/codemirror.css";

Vue.use(VueRouter)
Vue.use(ViewUI);
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

Vue.use(BaiduMap,{
ak:'SJ5BZ-WUB6U-TNXV3-B3L4L-7437F-I4FU4'
})

Vue.use(codemirror);

