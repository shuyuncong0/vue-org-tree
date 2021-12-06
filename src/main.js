/*
 * @Author: your name
 * @Date: 2021-09-17 14:56:26
 * @LastEditTime: 2021-09-28 10:57:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\main.js
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vue2OrgTree from './components/org-tree'

export default Vue2OrgTree
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
