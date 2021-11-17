import { createApp } from 'vue';
import App from './App.vue';
//import signup from './views/Signup.vue'
import router from './router';
import store from './store';
import 'bootstrap';
import './assets/app.scss';
import './services/axios.js';

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth == true)
    && to.matched.some(record => record.meta.notrequiresAuth == false)) {
    //if not logged in, redirect to login page
    if (localStorage.getItem("accesstoken") == null) {
      next({ name: 'signin' })
    } else {
      next() // go to whatever
    }
  } else if (to.matched.some(record => record.meta.requiresAuth == false)
    && to.matched.some(record => record.meta.notrequiresAuth == true)) {
    if (localStorage.getItem("accesstoken") == null) {
      next()
    } else {
      next({ name: 'home' });
    }
  } else if (to.matched.some(record => record.meta.requiresAuth == true)
    && to.matched.some(record => record.meta.notrequiresAuth == true)) {
    next();
  }
})

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

