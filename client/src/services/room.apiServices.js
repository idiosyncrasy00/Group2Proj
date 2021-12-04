import { axios, baseURL, getHeaders } from "./AuthHeader.js";

function createRoomAPI(roominfo) {
  return axios
    .post(baseURL + "api/rooms/create", roominfo, getHeaders);
}

function getRoomListAPI() {
  return axios
    .get(baseURL + "api/rooms/list", getHeaders);
}

function editRoomAPI(data) {
  return axios
    .put(baseURL + "api/rooms/edit", data, getHeaders);
}

function deleteRoomAPI(id) {
  const headers = getHeaders.headers;
  const data = {
    id: id,
  };
  return axios.delete(baseURL + "api/rooms/delete", {
    headers,
    data
  });
}

function getRoomReviewAPI(id) {
  //const headers = getHeaders.headers;
  const data = {
    id: id,
  };
  //console.log(typeof id);
  console.log(id);
  //console.log(data.id);
  return axios.post(baseURL + "api/rooms/review", data, getHeaders);
}

function postReviewAPI(comment) {
  return axios.post(baseURL + "api/reviews/add", comment, getHeaders);
}

function editReviewAPI() {
  return 0;
}

function deleteReviewAPI() {
  return 0;
}

function getMeetingsInARoomAPI(roomname, reserveddate) {
  const data = {
    roomname: roomname,
    reserveddate: reserveddate,
  };
  return axios.post(baseURL + "api/util/query", data, getHeaders);
}

//get room statistics 
function getRoomStatsAPI(date) {
  //get time type (day, month or year)
  const data = {
    date: date,
  };
  return axios.post(baseURL + "api/system/roomstats", data, getHeaders);
}

export {
  createRoomAPI, getRoomListAPI, editRoomAPI, deleteRoomAPI, getRoomReviewAPI, postReviewAPI, editReviewAPI,
  deleteReviewAPI, getMeetingsInARoomAPI, getRoomStatsAPI
}