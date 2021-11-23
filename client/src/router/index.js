import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/Home.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: true,
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: true,
    }
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/Signin.vue'),
    meta: {
      requiresAuth: false,
      notrequiresAuth: true,
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/Signup.vue'),
    meta: {
      requiresAuth: false,
      notrequiresAuth: true,
    }

  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/Users/User.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
  {
    path: '/createRoom',
    name: 'createRoom',
    component: () => import('../views/Rooms/createRoom.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
  {
    path: '/findRoom',
    name: 'FindRoom',
    component: () => import('../views/Rooms/FindRoom.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
  {
    path: '/findRoom/:id',
    name: 'roomdetails',
    component: () => import('../views/Rooms/RoomDetails.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
  {
    path: '/manageRoom',
    name: 'manageRoom',
    component: () => import('../views/Rooms/manageRoom.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
  {
    path: '/manageMeeting',
    name: 'manageMeeting',
    component: () => import('../views/Rooms/manageMeeting.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
  {
    path: '/UserList',
    name: 'UserList',
    component: () => import('../views/UserList.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
  {
    path: '/Feedback',
    name: 'Feedback',
    component: () => import('../views/Feedback.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
  {
    path: '/Room',
    name: 'Room',
    component: () => import('../views/Room.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: true,
    }
  },
  {
    path: '/Room/createMeeting/roomid=:id',
    name: 'createMeeting',
    component: () => import('../views/createMeeting.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
  {
    path: '/Meeting',
    name: 'Meeting',
    component: () => import('../views/Meeting.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Meetings/admin.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
  {
    path: '/participant',
    name: 'participant',
    component: () => import('../views/Meetings/participant.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
  {
    path: '/admin/editMeeting/roomid=:roomid/meetingid=:meetingid',
    name: 'editMeeting',
    component: () => import('../views/Meetings/editMeeting.vue'),
    meta: {
      requiresAuth: true,
      notrequiresAuth: false,
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;