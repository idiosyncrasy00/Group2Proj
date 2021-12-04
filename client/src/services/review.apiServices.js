import { axios, baseURL, getHeaders } from "./AuthHeader.js";
function getSelfReviewAPI() {
  //const headers = getHeaders.headers;
  return axios.get(baseURL + "api/reviews/get", getHeaders);
}

function postReviewAPI(comment) {
  return axios.post(baseURL + "api/reviews/add", comment, getHeaders);
}

// function editReviewAPI(id) {
//   const data = {
//     "id": id,
//     "rating": "",    // Not required
//     "message": ""    // Not required
//   }
//   return axios.put(baseURL + "api/reviews/add", data, getHeaders);
// }

function deleteReviewAPI(id) {
  const headers = getHeaders.headers;
  const data = {
    id: id,
  };
  return axios.delete(baseURL + "api/reviews/delete", { headers, data });
}


export {
  getSelfReviewAPI, postReviewAPI, deleteReviewAPI
}