import { createApp } from 'vue';
import App from './App.vue';
//import signup from './views/Signup.vue'
import router from './router';
import store from './store';
import 'bootstrap';
import './assets/app.scss';
import './services/axios.js';

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

