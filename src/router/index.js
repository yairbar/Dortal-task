import Vue from 'vue';
import VueRouter from 'vue-router';
import { store }from '../store/store'

import Login from '../components/Login';
import MainPage from '../components/MainPage';

Vue.use(VueRouter)

const routes = [
  { path: '/', component: MainPage , meta: { requiresLogin: true } },
  { path: '/login', component: Login ,  meta: { itIsLoginPage: true }},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {

    const user = store.getters['user/getUser'];

    let itsUserLogout = user.userName === '' || user.password === '';

    if (to.matched.some(record => record.meta.requiresLogin) && itsUserLogout ) {
        next("/login")
    } else {
        next()
    }

    if (to.matched.some(record => record.meta.itIsLoginPage)){
      store._actions['routerModel/setRoutherPath'][0]('/login')
      next()
    }else{
      store._actions['routerModel/setRoutherPath'][0]('/')
      next()
    }

})

export default router;