import { createApp } from 'vue';
import App from './App.vue';
//import signup from './views/Signup.vue'
import router from './router';
import store from './store';
import 'bootstrap';
import './assets/app.scss';
import './services/axios.js';

const getToken = localStorage.getItem('accesstoken');

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth == 1)) {
    if (getToken == null) {
      //if not logged in, redirect to the home page
      next({
        path: '/',
      });
    } else {
      next();
    }
  } else if (to.matched.some(record => record.meta.requiresAuth == 0)) {
    if (getToken == null) {
      //if not logged in, redirect to the home page
      next();
    } else {
      next({
        path: '/',
      });
    }
  }
  else {
    next();
  }
});

createApp(App).use(store).use(router).mount('#app');
/*
import Vue from 'vue'
import AppLayout from './components/index.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  name: 'Root',
  router,
  store,
  mounted () {
    store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth)
    window.addEventListener('resize', () => store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth))
  },

  beforeUnmount () {
    window.removeEventListener('resize', () => store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth))
  },
  render: h => h(AppLayout)
}).$mount('#app')
*/

