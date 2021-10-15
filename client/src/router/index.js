import { createRouter, createWebHistory } from 'vue-router';
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
    component: () => import('../views/Home/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
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
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/Users/User.vue'),
  },
  {
    path: '/createRoom',
    name: 'createRoom',
    component: () => import('../views/Rooms/createRoom.vue'),
  },
  {
    path: '/findRoom',
    name: 'FindRoom',
    component: () => import('../views/Rooms/FindRoom.vue'),
  },
  {
    path: '/findRoom/:id',
    name: 'roomdetails',
    component: () => import('../views/Rooms/RoomDetails.vue'),
  },
  {
    path: '/findRoom/:city',
    name: 'SearchResults',
    component: () => import('../views/SearchResults.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
