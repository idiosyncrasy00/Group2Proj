import { axios, baseURL, getHeaders } from "./AuthHeader.js";

function createMeetingAPI(meetingInfo) {
  return axios
    .post(baseURL + "api/meetings/create", meetingInfo, getHeaders);
}

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

function inviteParticipants() {
  return 0;
}

export { createMeetingAPI, getMeetingListAPI, editMeetingAPI, deleteMeetingAPI, inviteParticipants };