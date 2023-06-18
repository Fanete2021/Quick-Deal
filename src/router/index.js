import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/pages/Main.vue';
import Tasks from '@/pages/Tasks.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/tasks',
    component: Tasks
  },
]

const index = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default index
