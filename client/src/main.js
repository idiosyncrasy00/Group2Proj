import { createApp } from 'vue';
import App from './App.vue';
//import signup from './views/Signup.vue'
import router from './router';
import store from './store';
import 'bootstrap';
import './assets/app.scss';
import './services/axios.js';
import AOS from 'aos'
import 'aos/dist/aos.css'

export const app = createApp(App).use(store).use(router);

app.AOS = new AOS.init({ 
	disable: "phone",
	offset: 300, // offset (in px) from the original trigger point
	delay: 500, // values from 0 to 3000, with step 50ms
	duration: 500, // values from 0 to 3000, with step 50ms
});
app.use(AOS).mount('#app')

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

