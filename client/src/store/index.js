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

function formatDate(date) {
  const getDateArray = date.split("-");
  var temp = getDateArray[0];
  getDateArray[0] = getDateArray[2];
  getDateArray[2] = temp;
  return (getDateArray.join("-"));
}

module.exports = { getUserInfo, getMeetingsAsParticipant, getMeetingsAsHost, getARoomInfo, roomlist, formatDate };

//console.log(roomlist);
