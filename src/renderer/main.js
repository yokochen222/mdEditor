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

import 'iview/dist/styles/iview.css'

import {Button,Drawer,Poptip,Input,Form,FormItem,Notice,Spin,Row,Col,Modal} from "iview"
Vue.component('Button',Button)
Vue.component('Drawer',Drawer)
Vue.component('Poptip',Poptip)
Vue.component('Input',Input)
Vue.component('Form',Form)
Vue.component('FormItem',FormItem)
Vue.component('Notice',Notice)
Vue.component('Spin',Spin)
Vue.component('Col',Col)
Vue.component('Row',Row)
Vue.component('Modal',Modal)

Vue.prototype.$Spin=Spin
Vue.prototype.$Notice=Notice
const {ipcRenderer:ipc,remote} = require('electron')
Vue.prototype.$ipc=ipc
Vue.prototype.$remote=remote


Vue.prototype.$bus=new Vue()


import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
