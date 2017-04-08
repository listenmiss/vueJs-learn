import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login/Login.vue'
import MainView from '../components/mainView/MainView.vue'
import Home from '../components/home/Home.vue'
import Edit from '../components/edit/Edit.vue'
import Center from '../components/center/Center.vue'
import About from '../components/about/About.vue'
import Published from '../components/published/Published.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/mainView',
      name: 'mainView',
      component: MainView,
      children: [

                { path: 'home', name: 'home', component: Home },
                { path: 'edit', name: 'edit', component: Edit },
                { path: 'center', name: 'center', component: Center },
                { path: 'about', name: 'about', component: About }

      ]
    },
    {
      path: '/published/:id',
      name: 'published',
      component: Published
    }
  ]
})
