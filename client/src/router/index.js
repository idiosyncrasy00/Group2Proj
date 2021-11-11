import { createRouter, createWebHistory } from 'vue-router';

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
    path: '/manageRoom',
    name: 'manageRoom',
    component: () => import('../views/Rooms/manageRoom.vue'),
  },
  {
    path: '/UserList',
    name: 'UserList',
    component: () => import('../views/UserList.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;