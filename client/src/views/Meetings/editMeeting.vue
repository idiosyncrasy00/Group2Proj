<template>
  <div>
    <link
      href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div id="tabs" class="container">
      <div class="tabs">
        <a
          v-on:click="activetab = 1"
          v-bind:class="[activetab === 1 ? 'active' : '']"
          >Thông tin cuộc họp</a
        >
        <a
          v-on:click="activetab = 2"
          v-bind:class="[activetab === 2 ? 'active' : '']"
          >Danh sách thành viên</a
        >
        <a
          v-on:click="activetab = 3"
          v-bind:class="[activetab === 3 ? 'active' : '']"
          >Danh sách người đang mời</a
        >
      </div>
      <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
          <div class="container h-100">
            <div class="row h-100">
              <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div class="d-table-cell align-middle">
                  <div class="text-center mt-4">
                    <h1 class="h2">Chỉnh sửa cuộc họp</h1>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <div class="m-sm-4">
                        <form>
                          <div class="form-group">
                            <label>Tên phòng</label>
                            <label
                              class="form-control form-control-lg"
                              readonlyy
                              >{{ this.roomid }}
                            </label>
                          </div>
                          <div class="form-group">
                            <label>Tên meeting</label>
                            <label
                              class="form-control form-control-lg"
                              readonlyy
                            >
                              {{ this.meetingid }}</label
                            >
                          </div>
                          <div class="form-group">
                            <label>Mật khẩu phòng</label>
                            <input
                              class="form-control form-control-lg"
                              type="password"
                              name="password"
                              v-model="this.updateMeetingInfo.password"
                            />
                          </div>
                          <div class="form-group">
                            <label>Ngày họp</label>
                            <input
                              class="form-control form-control-lg"
                              type="date"
                              name="date"
                              placeholder="Nhập ngày đặt phòng"
                              v-model="this.updateMeetingInfo.reserveddate"
                            />
                          </div>
                          <div class="form-group">
                            <label>Thời gian bắt đầu</label>
                            <input
                              class="form-control form-control-lg"
                              type="time"
                              name="startTime"
                              placeholder="Nhập thời gian bắt đầu"
                              v-model="this.updateMeetingInfo.startingtime"
                            />
                          </div>
                          <div class="form-group">
                            <label>Thời gian họp</label>
                            <input
                              class="form-control form-control-lg"
                              type="number"
                              name="during"
                              placeholder="Nhập thời gian họp"
                              v-model="this.updateMeetingInfo.during"
                            />
                          </div>
                          <div class="form-group">
                            <label>Tên cuộc họp</label>
                            <input
                              class="form-control form-control-lg"
                              type="text"
                              name="title"
                              placeholder="Nhập tên cuộc họp"
                              v-model="this.updateMeetingInfo.title"
                            />
                          </div>
                          <div class="form-group">
                            <label>Nội dung cuộc họp</label>
                            <textarea
                              class="form-control form-control-lg"
                              type="textarea"
                              name="content"
                              placeholder="Nhập nội dung họp"
                              rows="5"
                              v-model="this.updateMeetingInfo.content"
                            ></textarea>
                          </div>
                          <div class="text-center mt-3">
                            <!-- <button @click.prevent="updateMeeting">
                              Xác nhận
                            </button> -->
                            <button
                              type="button"
                              class="btn btn-primary"
                              @click.prevent="updateMeeting"
                            >
                              Xác nhận
                            </button>
                            <!-- <button type="submit" class="btn btn-lg btn-primary">Sign up</button> -->
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="activetab === 2" class="tabcontent">
          <div class="table-responsive">
            <table class="table no-wrap user-table mb-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="border-0 text-uppercase font-medium pl-4"
                  >
                    ID
                  </th>
                  <th scope="col" class="border-0 text-uppercase font-medium">
                    Tên
                  </th>
                  <th scope="col" class="border-0 text-uppercase font-medium">
                    Địa chỉ
                  </th>
                  <th scope="col" class="border-0 text-uppercase font-medium">
                    Email
                  </th>
                  <th scope="col" class="border-0 text-uppercase font-medium">
                    SĐT
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="pl-4"><h5>1</h5></td>
                  <td><h5 class="font-medium mb-0">Nguyễn Văn Anh</h5></td>
                  <td><h5 class="text-muted">Hà Nội</h5></td>
                  <td><h5 class="text-muted">19022102@gmail.com</h5></td>
                  <td><h5 class="text-muted">09129129212</h5></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-if="activetab === 3" class="tabcontent">
          <div class="table-responsive">
            <div class="example" style="max-width: 500px">
              <input
                type="text"
                placeholder="Nhập tên người cần mời"
                v-model="searchTerm"
              />
              <button class="btn btn-primary" @click="inviteperson()">
                Mời
              </button>
            </div>
            <ul
              v-if="searchUsers.length < users.length"
              style="max-width: 400px"
            >
              <li
                v-for="user in searchUsers"
                :key="user.email"
                @click="selectUser(user.name)"
                class="cursor-pointer hover:bg-gray-100 p-1"
              >
                {{ user.name }}
                <br />
                Email:{{ user.email }}
                <label> &emsp;&emsp; </label>
                SĐT:{{ user.phone }}
                <br />
              </li>
            </ul>

            <table class="table no-wrap user-table mb-0">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="border-0 text-uppercase font-medium pl-4"
                  >
                    ID
                  </th>
                  <th scope="col" class="border-0 text-uppercase font-medium">
                    Tên
                  </th>
                  <th scope="col" class="border-0 text-uppercase font-medium">
                    Địa chỉ
                  </th>
                  <th scope="col" class="border-0 text-uppercase font-medium">
                    Email
                  </th>
                  <th scope="col" class="border-0 text-uppercase font-medium">
                    SĐT
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="invitedUser in invitedUsers" :key="invitedUser.id">
                  <td class="pl-4"><h5>1</h5></td>
                  <td>
                    <h5 class="font-medium mb-0">{{ invitedUser.id }}</h5>
                  </td>
                  <td>
                    <h5 class="text-muted">{{ invitedUser.id }}</h5>
                  </td>
                  <td>
                    <h5 class="text-muted">{{ invitedUser.id }}</h5>
                  </td>
                  <td>
                    <h5 class="text-muted">{{ invitedUser.id }}</h5>
                  </td>
                  <td>
                    <button
                      class="btn btn-danger"
                      type="button"
                      @click="deleteParticipant(invitedUser.id)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import {
  editMeetingAPI,
  adminDeletesParticipantAPI,
  invitePerson,
  listparticipantAPI,
  getAllUsersAPI,
} from "@/services/meeting.apiServices.js";

export default {
  name: "editMeeting",
  components: Nav,
  data() {
    return {
      searchTerm: "",
      users: [],
      invitedUsers: [],
      activetab: 1,
      roomid: this.$route.params.roomid,
      meetingid: this.$route.params.meetingid,
      updateMeetingInfo: {
        id: this.$route.params.meetingid,
        roomid: this.$route.params.roomid, // Not required
        reserveddate: "", // Not required
        startingtime: "", // Not required
        during: "", // Not required
        title: "", // Not required
        content: "", // Not required
        password: "1", // Not required
        status: "ok", // Not required
      },
    };
  },

  methods: {
    selectUser(name) {
      this.searchTerm = name;
    },
    deleteParticipant(userid) {
      adminDeletesParticipantAPI(userid, this.meetingid)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    inviteperson() {
      invitePerson(this.searchTerm, this.meetingid)
        .then((res) => {
          console.log(res);
          this.invitedUsers.push({
            id: this.searchTerm,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateMeeting() {
      const data = {
        id: this.updateMeetingInfo.id,
        roomid: this.updateMeetingInfo.roomid, // Not required
        reserveddate: this.updateMeetingInfo.reserveddate, // Not required
        startingtime: this.updateMeetingInfo.startingtime.substring(0, 2), // Not required
        during: this.updateMeetingInfo.during, // Not required
        title: this.updateMeetingInfo.title, // Not required
        content: this.updateMeetingInfo.content, // Not required
        password: this.updateMeetingInfo.password, // Not required
        status: this.updateMeetingInfo.status, // Not required
      };
      console.log(data);
      //PUT
      editMeetingAPI(data)
        .then((res) => {
          console.log(res);
          this.$swal.fire(
            "Good job!",
            "Cập nhật cuộc họp thành công",
            "success"
          );
          window.setTimeout(function () {
            location.href = "/admin";
          }, 5000);
          //window.location.href = "/admin";
        })
        .catch((err) => {
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Cập nhật cuộc họp thất bại :(((",
            // footer: '<a href="">Why do I have this issue?</a>',
          });
          console.log(err);
        });
    },
  },
  async created() {
    listparticipantAPI(this.meetingid)
      .then((res) => {
        this.invitedUsers = res.data;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    //error not found
    getAllUsersAPI()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    searchUsers() {
      return this.users.filter(
        (users) => users.name.toLowerCase().search(this.searchTerm) != -1
      );
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  max-width: 80%;
  min-width: 80%;
  margin: 40px auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.9em;
}

.tabs {
  overflow: hidden;
  margin-left: 20px;
  margin-bottom: -2px;
}

.tabs ul {
  list-style-type: none;
  margin-left: 20px;
}

.tabs a {
  float: left;
  cursor: pointer;
  padding: 12px 24px;
  transition: background-color 0.2s;
  border: 1px solid #ccc;
  border-right: none;
  background-color: #f1f1f1;
  border-radius: 10px 10px 0 0;
  font-weight: bold;
}
.tabs a:last-child {
  border-right: 1px solid #ccc;
}

.tabs a:hover {
  background-color: #aaa;
  color: #fff;
}

.tabs a.active {
  background-color: var(--bg-color);
  color: #484848;
  border-bottom: 2px solid #fff;
  cursor: default;
}

.tabcontent {
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}

.card {
  background-color: var(--bg-color);
}
body {
  background: #edf1f5;
  margin-top: 20px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent;
  border-radius: 0;
}
.btn-circle.btn-lg,
.btn-group-lg > .btn-circle.btn {
  width: 50px;
  height: 50px;
  padding: 14px 15px;
  font-size: 18px;
  line-height: 23px;
}
.text-muted {
  color: #8898aa !important;
}
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}
.btn-circle {
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 10px;
}
.user-table tbody tr .category-select {
  max-width: 150px;
  border-radius: 20px;
}

* {
  box-sizing: border-box;
}

div.example input[type="text"] {
  padding: 8px;
  font-size: 14px;
  border: 2px solid grey;
  float: left;
  width: 80%;
  background: #f1f1f1;
}
div.example button {
  padding: 8px;
  font-size: 14px;
  border: 2px solid grey;

  background: blue;
}
div.example::after {
  content: "";
  clear: both;
  display: table;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

ul li {
  border: 1px solid #ddd;
  margin-top: -1px; /* Prevent double borders */
  background-color: white;
  padding: 12px;
}
</style>
