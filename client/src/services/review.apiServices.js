import { axios, baseURL, getHeaders } from "./AuthHeader.js";
function getSelfReviewAPI() {
  //const headers = getHeaders.headers;
  return axios.get(baseURL + "api/reviews/get", getHeaders);
}

function postReviewAPI(comment) {
  return axios.post(baseURL + "api/reviews/add", comment, getHeaders);
}

function editReviewAPI() {
  return 0;
}

function deleteReviewAPI(id) {
  const headers = getHeaders.headers;
  const data = {
    id: id,
  };
  return axios.delete(baseURL + "api/reviews/delete", { headers, data });
}


export {
  getSelfReviewAPI, postReviewAPI, editReviewAPI, deleteReviewAPI
}