import { createRouter, createWebHistory } from 'vue-router';
//import axios from 'axios';

//const getToken = localStorage.getItem('accesstoken');

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
    // component: () => {
    //   if (getToken == null) {
    //     return import('../views/Signin.vue');
    //   } else {
    //     return import('../views/Home/Home.vue');
    //   }
    // },
    meta: {
      // requiresVisitor: true,
      // layout: 'landing',
      //conditionalRoute: false,
      //requiresAuth: false,
      //requiresAuth: false,
      requiresAuth: 0,
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue'),
    // component: () => {
    //   if (getToken == null) {
    //     return import('../views/Signup.vue');
    //   } else {
    //     return import('../views/Home/Home.vue');
    //   }
    // },
    meta: {
      // requiresVisitor: true,
      // layout: 'landing',
      //conditionalRoute: false,
      //requiresAuth: false,
      //requiresAuth: false,
      requiresAuth: 0,
    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/Users/User.vue'),
    meta: {
      requiresAuth: 1,
    }
  },
  {
    path: '/createRoom',
    name: 'createRoom',
    component: () => import('../views/Rooms/createRoom.vue'),
    meta: {
      requiresAuth: 1,
    }
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