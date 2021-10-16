import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/",
  withCredentials: false,
  headers: {
    "Content-type": "application/json",
  }
});

export default {
  //get userboard
  getUserboard() {
    return '';
  },
  //sign up

  //sign in
  getLogin() {
    return apiClient.get('/signin');
  },
  getRoom() {
    return apiClient.get('/findRoom');
  },
  // getRoomInfo(id) {
  //   return apiClient.get('/findRoom/' + id);
  // },
};


// class DataServices {
//   getAllRooms() {
//     return http.get("/rooms");
//   }
//   get(id) {
//     return http.get(`/room/${id}`);
//   }
//   create(data) {
//     return http.post("/rooms/", data);
//   }
//   delete(id) {
//     return http.delete(`/rooms/${id}`);
//   }
// }

// export default new DataServices();