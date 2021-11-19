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
var meetingListAsHost = [];
var meetingListAsParticipant = [];
roomlist = JSON.parse(localStorage.getItem('roomlist'));
var userInfo = JSON.parse(localStorage.getItem('userinfo'));
meetingListAsHost = JSON.parse(localStorage.getItem('meetingsInfoAsHost'));
meetingListAsParticipant = JSON.parse(localStorage.getItem('meetingsInfoAsParticipant'));
function getRoom(index) {
  return roomlist[index - 1];
}

function getUserInfo() {
  return userInfo;
}

//manage meetings
function getMeetingsAsParticipant() {
  return meetingListAsParticipant;
}

function getMeetingsAsHost() {
  return meetingListAsHost;
}

module.exports = { getRoom, getUserInfo, getMeetingsAsParticipant, getMeetingsAsHost };

//console.log(roomlist);
