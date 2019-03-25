import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import "@/assets/css/base.less"

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

var VueCodeMirror = require('vue-codemirror-lite')
Vue.use(VueCodeMirror)

import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView, {
  transfer: true,
  size: 'large'
})
const {ipcRenderer:ipc,remote} = require('electron')
Vue.prototype.$ipc=ipc
Vue.prototype.$remote=remote


Vue.prototype.$bus=new Vue()

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
