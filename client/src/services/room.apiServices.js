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

function deleteRoomAPI(roomID) {
  const headers = getHeaders.headers;
  const data = {
    roomID: roomID,
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
  console.log(typeof id);
  console.log(id);
  //console.log(data.id);
  return axios.post(baseURL + "api/rooms/review", data, getHeaders);
}

export { createRoomAPI, getRoomListAPI, editRoomAPI, deleteRoomAPI, getRoomReviewAPI }