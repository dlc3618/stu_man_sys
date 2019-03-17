import Vue from 'vue'
import Router from 'vue-router'
import addStu from './views/addStu.vue'
import stuList from './views/stuList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/add_stu',
      name: 'addStu',
      component: addStu
    },
    {
      path: '/stu_list',
      name: 'stuList',
      component: stuList
    },
    {
      path: '*',
      redirect: '/stu_list'
    },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})
