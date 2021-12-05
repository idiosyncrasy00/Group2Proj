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
          >Lên danh sách người tham gia</a
        >
      </div>
      <div class="content">
        <div v-if="activetab === 1" class="tabcontent">
          <div class="container h-100">
            <div class="row h-100">
              <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                <div class="d-table-cell align-middle">
                  <div class="text-center mt-0">
                    <h1 class="h2">Chỉnh sửa cuộc họp</h1>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <div class="m-sm-4">
                        <form>
                          <div class="form-group">
                            <label>Tên phòng</label>
                            <label class="form-control input-field" readonly
                              >{{ this.defaultMeetingInfo.room.roomname }}
                            </label>
                          </div>
                          <div class="form-group">
                            <label>Ngày họp</label>
                            <input
                              class="form-control input-field"
                              type="date"
                              name="date"
                              placeholder="Nhập ngày đặt phòng"
                              v-model="this.defaultMeetingInfo.reserveddate"
                            />
                          </div>
                          <div class="form-group">
                            <label>Thời gian bắt đầu</label>
                            <!-- <input
                              class="form-control form-control-lg"
                              type="time"
                              name="startTime"
                              placeholder="Nhập thời gian bắt đầu"
                              v-model="this.updateMeetingInfo.startingtime"
                            /> -->
                            <select
                              class="form-select input-field"
                              aria-label="Default select example"
                              v-model="this.defaultMeetingInfo.startingtime"
                            >
                              <option selected="selected">
                                {{ this.defaultMeetingInfo.startingtime }}
                              </option>
                              <option value="08">08:00 sáng</option>
                              <option value="09">09:00 sáng</option>
                              <option value="10">10:00 sáng</option>
                              <option value="11">11:00 sáng</option>
                              <option value="12">12:00 sáng</option>
                              <option value="13">13:00 chiều</option>
                              <option value="14">14:00 chiều</option>
                              <option value="15">15:00 chiều</option>
                              <option value="16">16:00 chiều</option>
                              <option value="17">17:00 chiều</option>
                              <option value="18">18:00 tối</option>
                              <option value="19">19:00 tối</option>
                              <option value="20">20:00 tối</option>
                              <option value="21">21:00 tối</option>
                              <option value="22">22:00 tối</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label>Thời gian họp</label>
                            <input
                              class="form-control input-field"
                              type="number"
                              name="during"
                              placeholder="Nhập thời gian họp"
                              v-model="this.defaultMeetingInfo.during"
                            />
                          </div>
                          <div class="form-group">
                            <label>Tên cuộc họp</label>
                            <input
                              class="form-control input-field"
                              type="text"
                              name="title"
                              placeholder="Nhập tên cuộc họp"
                              v-model="this.defaultMeetingInfo.title"
                            />
                          </div>
                          <div class="form-group">
                            <label>Nội dung cuộc họp</label>
                            <textarea
                              class="form-control"
                              type="textarea"
                              name="content"
                              rows="5"
                              v-model="this.defaultMeetingInfo.content"
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
          <button
            class="btn btn-primary"
            style="height: 3rem; width: 7rem"
            @click="SendEmail()"
          >
            Gửi email &#9993;
          </button>
          <div class="table-responsive">
            <ul
              v-if="searchUsers.length < users.length"
              style="max-width: 400px"
            >
              <li
                v-for="user in searchUsers"
                :key="user.email"
                @click="
                  selectUser(
                    user.fullname,
                    user.id,
                    user.email,
                    user.phone,
                    user.address
                  )
                "
                class="cursor-pointer hover:bg-gray-100 p-1"
              >
                {{ user.fullname }}
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
                  <th scope="col" class="border-0 text-uppercase font-medium">
                    Xóa
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="invitedUser in invitedUsers" :key="invitedUser.id">
                  <td class="pl-4">
                    <h5>{{ invitedUser.id }}</h5>
                  </td>
                  <td>
                    <h5 class="font-medium mb-0">{{ invitedUser.fullname }}</h5>
                  </td>
                  <td>
                    <h5 class="text-muted">{{ invitedUser.address }}</h5>
                  </td>
                  <td>
                    <h5 class="text-muted">{{ invitedUser.email }}</h5>
                  </td>
                  <td>
                    <h5 class="text-muted">{{ invitedUser.phone }}</h5>
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
      <div v-if="activetab === 3" class="tabcontent">
        <div class="table-responsive">
          <div class="example" style="max-width: 500px">
            <input
              type="text"
              placeholder="Nhập tên người cần mời"
              v-model="searchTerm"
              @click="triggerSearchBar"
            />
            <button class="btn btn-success" @click="addPerson()">
              Thêm người
            </button>
            <!-- <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#userList"
              >
                <invitingPeopleModal />
                <h5 class="card-title text-center text-dark">
                  Lên danh sách người tham dự
                </h5>
              </button> -->
          </div>
          <ul v-if="searchUsers.length < users.length" style="max-width: 400px">
            <li
              v-for="user in searchUsers"
              :key="user.email"
              @click="
                selectUser(
                  user.fullname,
                  user.id,
                  user.email,
                  user.phone,
                  user.address
                )
              "
              class="cursor-pointer hover:bg-gray-100 p-1"
            >
              {{ user.fullname }}
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
                <th scope="col" class="border-0 text-uppercase font-medium">
                  Xóa
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(invitingUser, index) in invitingUsers"
                :key="invitingUser.id"
              >
                <td class="pl-4">
                  <h5>{{ invitingUser.id }}</h5>
                </td>
                <td>
                  <h5 class="font-medium mb-0">
                    {{ invitingUser.fullname }}
                  </h5>
                </td>
                <td>
                  <h5 class="text-muted">{{ invitingUser.address }}</h5>
                </td>
                <td>
                  <h5 class="text-muted">{{ invitingUser.email }}</h5>
                </td>
                <td>
                  <h5 class="text-muted">{{ invitingUser.phone }}</h5>
                </td>
                <td>
                  <button
                    class="btn btn-danger"
                    type="button"
                    @click="removeUserItem(index)"
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
        <button class="btn btn-success but" @click="InvitePeople()">
          Mời người
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import invitingPeopleModal from "@/components/invitingPeopleModal.vue";
import {
  editMeetingAPI,
  adminDeletesParticipantAPI,
  //invitePerson,
  listparticipantAPI,
  getAllUsersAPI,
  invitePeopleAPI,
  sendEmailAPI,
} from "@/services/meeting.apiServices.js";

export default {
  name: "editMeeting",
  components: { invitingPeopleModal },
  data() {
    return {
      searchTerm: "",
      getUsersIdList: [],
      getUserEmail: "",
      getUserPhone: "",
      getUserAddress: "",
      users: [],
      invitedUsers: [],
      invitingUsers: [],
      activetab: 2,
      roomid: this.$route.params.roomid,
      meetingid: this.$route.params.meetingid,
      defaultMeetingInfo: JSON.parse(localStorage.getItem("meetinginfo")),
      updateMeetingInfo: {
        reserveddate: "", // Not required
        startingtime: "", // Not required
        during: "", // Not required
        title: "", // Not required
        content: "", // Not required
        status: "", // Not required
      },
    };
  },

  methods: {
    selectUser(name, userid, email, phone, address) {
      this.searchTerm = name;
      this.getUserId = userid;
      this.getUserEmail = email;
      this.getUserPhone = phone;
      this.getUserAddress = address;
    },
    deleteParticipant(userid) {
      this.$swal
        .fire({
          title: "Bạn muốn xóa người này chứ?",
          showDenyButton: true,
          confirmButtonText: "Có",
          denyButtonText: `Không`,
        })
        .then((result) => {
          if (result.isConfirmed) {
            adminDeletesParticipantAPI(userid, this.meetingid)
              .then((res) => {
                console.log(res);
                this.$swal.fire(
                  "Xóa người tham gia thành công!",
                  "",
                  "success"
                );
                window.setTimeout(function () {
                  location.reload();
                }, 2000);
                //this.activetab = 3;
              })
              .catch((err) => {
                console.log(err);
              });
          }
        });
    },
    addPerson() {
      this.invitingUsers.push({
        id: this.getUserId,
        fullname: this.searchTerm,
        email: this.getUserEmail,
        phone: this.getUserPhone,
        address: this.getUserAddress,
      });
      this.getUsersIdList.push(this.getUserId);
      this.searchTerm = "";
    },
    InvitePeople() {
      invitePeopleAPI(this.meetingid, this.getUsersIdList)
        .then((res) => {
          console.log(res);
          this.$swal.fire("Mời người tham gia thành công!", "", "success");
          window.setTimeout(function () {
            location.reload();
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    SendEmail() {
      sendEmailAPI(this.meetingid)
        .then((res) => {
          console.log(res);
          this.$swal.fire(
            "Gửi email đến người tham gia thành công!",
            "",
            "success"
          );
          window.setTimeout(function () {
            location.reload();
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    removeUserItem(index) {
      console.log(index);
      this.invitingUsers.splice(index, 1);
      this.getUsersIdList.splice(index, 1);
    },
    updateMeeting() {
      // const data = {
      //   id: this.$route.params.meetingid,
      //   roomid: this.$route.params.roomid,
      //   reserveddate: this.updateMeetingInfo.reserveddate,
      //   startingtime: this.updateMeetingInfo.startingtime.substring(0, 2),
      //   during: this.updateMeetingInfo.during,
      //   title: this.updateMeetingInfo.title,
      //   content: this.updateMeetingInfo.content,
      //   status: "ok",
      // };
      const updateMeetingInfo = {
        id: this.$route.params.meetingid,
        roomid: this.$route.params.roomid,
        reserveddate: this.defaultMeetingInfo.reserveddate, // Not required
        startingtime: this.defaultMeetingInfo.startingtime, // Not required
        during: this.defaultMeetingInfo.during, // Not required
        title: this.defaultMeetingInfo.title, // Not required
        content: this.defaultMeetingInfo.content, // Not required
        //status: "", // Not required
      };
      console.log(updateMeetingInfo);
      //PUT
      editMeetingAPI(updateMeetingInfo)
        .then((res) => {
          console.log(res);
          this.$swal.fire(
            "Good job!",
            "Cập nhật cuộc họp thành công",
            "success"
          );
          window.setTimeout(function () {
            location.reload();
          }, 3000);
        })
        .catch((err) => {
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Cập nhật cuộc họp thất bại :(((",
          });
          console.log(err);
        });
    },
    triggerSearchBar() {
      getAllUsersAPI()
        .then((res) => {
          console.log(res);
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async created() {
    //console.log(this.updateMeetingInfo.id);
    listparticipantAPI(this.meetingid)
      .then((res) => {
        this.invitedUsers = res.data;
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
    searchUsers() {
      return this.users.filter(
        (users) => users.fullname.toLowerCase().search(this.searchTerm) != -1
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
button.but {
  padding: 8px;
  font-size: 14px;
  border: 2px solid grey;

  background: blue;
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
.input-field {
  height: 2.5rem;
  margin-bottom: 0.7rem;
}
label {
  font-size: 1rem;
}
.invite-input {
  border-radius: 0.5rem;
}
</style>
