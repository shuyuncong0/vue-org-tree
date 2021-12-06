/*
 * @Author: your name
 * @Date: 2021-09-17 14:56:26
 * @LastEditTime: 2021-09-28 11:19:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-demo\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import OrgTreeDemo from '../components/OrgTreeDemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/demo',
      name: 'OrgTreeDemo',
      component: OrgTreeDemo
    }
  ]
})
