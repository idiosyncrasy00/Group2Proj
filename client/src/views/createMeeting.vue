<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
        <div class="d-table-cell align-middle">
          <div class="text-center mt-4">
            <h1 class="h2">Tạo cuộc họp</h1>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="m-sm-4">
                <form>
                  <div class="form-group">
                    <label>Tên phòng</label>
                    <label class="form-control form-control-lg">
                      <!-- {{ roomlist[this.meetingInfo.roomid - 1].roomname }} with
                      room id is
                      {{ roomlist[this.meetingInfo.roomid - 1].id }} andddd
                      {{ this.meetingInfo.roomid }} -->

                      <!-- The room id is {{ this.meetingInfo.roomid }} and the
                      roomname is {{ this.meetingInfo.roomname }} managed by
                      user with ID {{ this.meetingInfo.adminid }} -->
                      {{ this.meetingInfo.roomname }}
                    </label>
                  </div>
                  <div class="form-group">
                    <label>Mật khẩu phòng</label>
                    <input
                      class="form-control form-control-lg"
                      type="password"
                      name="password"
                      v-model="this.meetingInfo.password"
                    />
                  </div>
                  <div class="form-group">
                    <label>Ngày họp</label>
                    <input
                      class="form-control form-control-lg"
                      type="date"
                      name="date"
                      placeholder="Nhập ngày đặt phòng"
                      v-model="this.meetingInfo.reserveddate"
                    />
                  </div>
                  <div class="form-group">
                    <label>Thời gian bắt đầu</label>
                    <input
                      class="form-control form-control-lg"
                      type="time"
                      name="startTime"
                      placeholder="Nhập thời gian bắt đầu"
                      v-model="this.meetingInfo.startingtime"
                    />
                  </div>
                  <div class="form-group">
                    <label>Thời gian họp</label>
                    <input
                      class="form-control form-control-lg"
                      type="number"
                      name="during"
                      placeholder="Nhập thời gian họp"
                      v-model="this.meetingInfo.during"
                    />
                  </div>
                  <div class="form-group">
                    <label>Tên cuộc họp</label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      name="title"
                      placeholder="Nhập tên cuộc họp"
                      v-model="this.meetingInfo.title"
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
                      v-model="this.meetingInfo.content"
                    ></textarea>
                  </div>
                  <div class="text-center mt-3">
                    <button @click.prevent="createMeeting">Tạo</button>
                    {{ errMsg }}
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
</template>
<script>
import axios from "axios";
import store from "@/store/index.js";

export default {
  name: "createMeeting",
  //props: ["roomlist1"],
  components: {},
  data() {
    return {
      //roominfo: this.$route.params.roominfo.id,
      roomlist: [],
      roominfo: "",
      meetingInfo: {
        adminid: "",
        roomid: this.$route.params.id,
        roomname: "",
        reserveddate: "",
        startingtime: "",
        during: "",
        title: "",
        content: "", // Not required
        password: "1", // Not required
        status: "ok", // Not required
      },
      errMsg: "",
    };
  },
  methods: {
    createMeeting() {
      const meetingInfo = {
        adminid: this.meetingInfo.adminid,
        roomid: this.meetingInfo.roomid,
        reserveddate: this.meetingInfo.reserveddate,
        startingtime: this.meetingInfo.startingtime.substring(0, 2),
        during: this.meetingInfo.during,
        title: this.meetingInfo.title,
        content: this.meetingInfo.content, // Not required
        password: this.meetingInfo.password, // Not required
        status: this.meetingInfo.status, // Not required
      };
      console.log(meetingInfo);
      //axios post
      if (
        parseInt(this.meetingInfo.startingtime) >= 8 &&
        parseInt(this.meetingInfo.startingtime) <= 22
      ) {
        axios
          .post("/api/meetings/create", meetingInfo, {
            headers: {
              accesstoken: localStorage.getItem("accesstoken"),
            },
          })
          .then((res) => {
            console.log(res);
            alert("Tạo cuộc họp thành công");
            //this.rooms = res.data;
            //this.userInfo = res.data;
          })
          .catch((err) => {
            console.log(err);
            alert("Tạo cuộc họp thất bại");
          });
      } else {
        this.errMsg = "Giờ đặt họp chỉ cho phép từ 8:00 AM đến 22:00 PM";
      }
    },
  },
  async created() {
    this.roominfo = store.getRoom(this.meetingInfo.roomid);
    this.meetingInfo.roomname = store.getRoom(this.meetingInfo.roomid).roomname;
    this.meetingInfo.adminid = store.getUserInfo().id;
  },
};
</script>

<style>
</style>