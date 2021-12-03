<template>
  <div
    class="modal fade"
    id="userList"
    data-bs-backdrop="static"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header float-right">
          <h5>User details</h5>
          <div class="text-right">
            <i data-dismiss="modal" aria-label="Close" class="fa fa-close"></i>
          </div>
        </div>
        <div class="modal-body">
          <div>
            <div class="example" style="max-width: 500px">
              <input
                type="text"
                placeholder="Nhập tên người cần mời"
                v-model="searchTerm"
              />
            </div>
            <ul style="max-width: 400px">
              <li class="cursor-pointer hover:bg-gray-100 p-1">
                <!-- {{ user.fullname }} -->
                <br />
                <!-- Email:{{ user.email }} -->
                <label> &emsp;&emsp; </label>
                <!-- SĐT:{{ user.phone }} -->
                <br />
              </li>
            </ul>
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Tên</th>
                  <th scope="col">Địa chỉ</th>
                  <th scope="col">SĐT</th>
                  <th scope="col">Email</th>
                  <th scope="col">Xóa</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="invitingUser in invitingUsers"
                  :key="invitingUser.id"
                >
                  <!--vfor here-->
                  <td>{{ invitingUser.fullname }}</td>
                  <td>{{ invitingUser.address }}</td>
                  <td>{{ invitingUser.phone }}</td>
                  <td>{{ invitingUser.email }}</td>
                </tr>
                <!-- <tr>
                  <th scope="row">2</th>
                  <td>Tinor</td>
                  <td>Horton</td>
                  <td>@tinor_har</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Mythor</td>
                  <td>Bully</td>
                  <td>@myth_tobo</td>
                </tr> -->
              </tbody>
            </table>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Đóng
          </button>
          <button type="button" class="btn btn-primary">Lưu thay đổi</button>
        </div>
      </div>
    </div>
  </div>
  <!-- <h1>fsdfsad</h1> -->
</template>
<script>
import {
  // editMeetingAPI,
  // adminDeletesParticipantAPI,
  // invitePerson,
  // listparticipantAPI,
  //getAllUsersAPI,
  //invitePeopleAPI,
  //sendEmailAPI
} from "@/services/meeting.apiServices.js";
export default {
  inheritAttrs: false,
  data() {
    return {
      searchTerm: "",
      getUserId: "",
      getUserEmail: "",
      getUserPhone: "",
      getUserAddress: "",
      users: [],
      invitedUsers: [],
      invitingUsers: [
        {
          fullname: "Hoang",
          address: "Ha noi",
          phone: "4172",
          email: "sd@gmail.com",
        },
        {
          fullname: "Hoang",
          address: "Ha noi",
          phone: "4172",
          email: "sd@gmail.com",
        },
        {
          fullname: "Hoang",
          address: "Ha noi",
          phone: "4172",
          email: "sd@gmail.com",
        },
      ],
      roomid: this.$route.params.roomid,
      meetingid: this.$route.params.meetingid,
      // updateMeetingInfo: {
      //   id: this.$route.params.meetingid,
      //   roomid: this.$route.params.roomid, // Not required
      //   reserveddate: "", // Not required
      //   startingtime: "", // Not required
      //   during: "", // Not required
      //   title: "", // Not required
      //   content: "", // Not required
      //   status: "ok", // Not required
      // },
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
      // adminDeletesParticipantAPI(userid, this.meetingid)
      //   .then((res) => {
      //     console.log(res);
      //     //this.activetab = 3;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      console.log(userid);
    },
    // addPerson() {
    //   this.invitedUsers.push({
    //     id: this.getUserId,
    //     fullname: this.searchTerm,
    //     email: this.getUserEmail,
    //     phone: this.getUserPhone,
    //     address: this.getUserAddress,
    //   });
    // },
    // inviteperson() {
    //   invitePerson(this.getUserId, this.meetingid)
    //     .then((res) => {
    //       console.log(res);
    //       this.invitedUsers.push({
    //         id: this.getUserId,
    //         fullname: this.searchTerm,
    //         email: this.getUserEmail,
    //         phone: this.getUserPhone,
    //         address: this.getUserAddress,
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // },
  },
  async created() {
    // listparticipantAPI(this.meetingid)
    //   .then((res) => {
    //     this.invitedUsers = res.data;
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // getAllUsersAPI()
    //   .then((res) => {
    //     console.log(res);
    //     this.users = res.data;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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
