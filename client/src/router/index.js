import { createRouter, createWebHistory } from 'vue-router'
//import home from '../views/Home.vue'
// import about from '../views/About.vue'
// import signin from '../views/Signin.vue'
//import signup from '../views/Signup.vue'
//import App from '../App.vue'

//../../server/router
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: () => import('../views/About.vue'),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/Signin.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
