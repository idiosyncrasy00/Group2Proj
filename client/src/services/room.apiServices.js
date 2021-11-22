import { axios, baseURL, getHeaders } from "./AuthHeader.js";

function getRoomListAPI() {
  return axios
    .get(baseURL + "api/rooms/list", getHeaders);
}

export { getRoomListAPI }