import { axios, baseURL, getHeaders } from "./AuthHeader.js";

function createMeetingAPI(meetingInfo) {
  return axios
    .post(baseURL + "api/meetings/create", meetingInfo, getHeaders);
}

//get list of meetings as an admin of the meeting
function getMeetingListAPI() {
  return axios
    .get(baseURL + "api/util/reserved", getHeaders);
}

function editMeetingAPI(data) {
  return axios
    .put(baseURL +
      "api/meetings/edit",
      data,
      getHeaders
    );
}

function deleteMeetingAPI(id) {
  //console.log(id);
  const headers = getHeaders.headers;
  const data = {
    id: id,
  };
  return axios.delete(baseURL + "api/meetings/delete", {
    headers,
    data
  });
  //axios.delete()
}

function getInvitedMeetingsListAPI() {
  return axios.get(baseURL + "api/util/invited", getHeaders);
}

//invite a person to meeting 
function invitePerson(userID, meetingID) {
  const data = {
    meetingid: meetingID,
    userid: userID,
  };
  return axios.post(baseURL + "api/participants/invite", data, getHeaders);
}

//invite many people to the meeting
function invitePeopleAPI(meetingid, participants) {
  const data = {
    meetingid: meetingid,
    participants: participants,
  };
  return axios.post(baseURL + "api/participants/invitemany", data, getHeaders);
}

//delete a participant leaves the meeting
function adminDeletesParticipantAPI(userID, meetingID) {
  const data = {
    meetingid: meetingID,
    userid: userID,
  };
  const headers = getHeaders.headers;
  return axios.delete(baseURL + "api/participants/delete", {
    headers,
    data
  });
}

function participantLeavesMeetingAPI(meetingID) {
  const data = {
    meetingid: meetingID,
  };
  return axios.post(baseURL + "api/participants/leave", data, getHeaders);
}

//Get user list who's in/outside meeting API:
function listparticipantAPI(meetingid) {
  //POST
  //const headers = getHeaders.headers;
  const data = {
    "meetingid": meetingid,
    "outside": "",
  };
  return axios.post(baseURL + "api/util/listparticipant", data, getHeaders);
}

function getAllUsersAPI() {
  return axios.get(baseURL + "api/users/listall", getHeaders);
}

function sendEmailAPI(meetingid) {
  const data = {
    "id": meetingid,
  };
  return axios.post(baseURL + "api/meetings/sendemail", data, getHeaders);
}

export {
  createMeetingAPI, getMeetingListAPI, editMeetingAPI, deleteMeetingAPI, getInvitedMeetingsListAPI,
  invitePeopleAPI, invitePerson, adminDeletesParticipantAPI, participantLeavesMeetingAPI, listparticipantAPI, getAllUsersAPI,
  sendEmailAPI
};