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
var roomlist = [];
//var meetingListAsHost = [];
//var meetingListAsParticipant = [];
roomlist = JSON.parse(localStorage.getItem('roomlist'));
//let userInfo = JSON.parse(localStorage.getItem('userinfo'));  
//meetingListAsHost = JSON.parse(localStorage.getItem('meetingsInfoAsHost'));
//meetingListAsParticipant = JSON.parse(localStorage.getItem('meetingsInfoAsParticipant'));
//roominfo = 
function getRoom(index) {
  return roomlist[index - 1];
}

function getUserInfo() {
  return JSON.parse(localStorage.getItem('userinfo'));
}

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

module.exports = { getRoom, getUserInfo, getMeetingsAsParticipant, getMeetingsAsHost, getARoomInfo };

//console.log(roomlist);
