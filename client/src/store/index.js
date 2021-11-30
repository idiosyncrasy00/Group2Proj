// import { createStore } from 'vuex'

// export default createStore({
//   state: {
//   },
//   mutations: {
//   },
//   actions: {
//   },
//   modules: {
//   }
// })
// var roomlist = [];

// //roominfo = 
// function getRoom(index) {
//   return roomlist[index - 1];
// }

function roomlist() {
  return JSON.parse(localStorage.getItem('roomlist'));
}

function getUserInfo() {
  return JSON.parse(localStorage.getItem('userinfo'));
}

// function getAnotherUserInfo() {
//   return JSON.parse(localStorage.getItem('profileInfo'));
// }

function getARoomInfo() {
  return JSON.parse(localStorage.getItem('roominfo'));
}

//manage meetings
function getMeetingsAsParticipant() {
  return JSON.parse(localStorage.getItem('meetingsInfoAsParticipant'));
}

function getMeetingsAsHost() {
  return JSON.parse(localStorage.getItem('meetingsInfoAsHost'));
}

module.exports = { getUserInfo, getMeetingsAsParticipant, getMeetingsAsHost, getARoomInfo, roomlist };

//console.log(roomlist);
