import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/Login'
import home from '@/components/Home'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import store from '../store/index'

Vue.use(MuseUI);
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
});
router.beforeEach((to, from, next) => {
  //store.dispatch('initStatus');
  if (to.path === '/login'){
    next();
    return;
  }
  if (store.state.isLoged) {
    next();
  } else {
    next({path:"/login"});
  }
});
export default router;
