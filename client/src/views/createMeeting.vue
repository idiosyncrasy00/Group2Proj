<template>
  <div class="container h-100">
    <div class="row h-100">
      <div
        class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100"
        v-if="this.meetingInfo.roomid > 4"
      >
        <roomNotFound />
      </div>
      <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100" v-else>
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
                    <label class="form-control form-control-lg" readonly>
                      {{ this.meetingInfo.roomname }}
                    </label>
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
                    <label>Thời gian họp (Giờ)</label>
                    <input
                      class="form-control form-control-lg"
                      type="number"
                      min="1"
                      max="10"
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
                    <button class="btn btn-primary" @click.prevent="createMeeting">Tạo phòng</button>
										<button class="btn btn-secondary mx-2" @click.prevent="cancel">Thoát</button>
                    <p style="color:red;">{{ errMsg }}</p>
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
//import axios from "axios";
import { createMeetingAPI } from "@/services/meeting.apiServices.js";
import {
  getRoomReviewAPI,
  postReviewAPI,
} from "@/services/room.apiServices.js";
import store from "@/store/index.js";
import roomNotFound from "@/components/roomNotFound.vue";

export default {
  name: "createMeeting",
  components: {
    roomNotFound,
  },
  data() {
    return {
      comments: [],
      postComment: {
        roomid: this.$route.params.roomid,
        rating: "",
        message: "",
      },
      roomid: store.getARoomInfo().id,
      roominfo: {
        id: store.getARoomInfo().id,
        roomname: store.getARoomInfo().roomname,
        capacity: store.getARoomInfo().capacity,
        facilities: store.getARoomInfo().facilities,
        status: store.getARoomInfo().status,
      },
      meetingInfo: {
        adminid: "",
        roomid: this.$route.params.roomid,
        roomname: this.$route.params.roomname,
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
    postAComment() {
      console.log(this.postComment);
      //POST
      postReviewAPI(this.postComment)
        .then((res) => {
          console.log(res);
          this.comments.push(res.data);
          this.postComment.message = "";
          this.postComment.rating = "";
        })
        .catch((err) => {
          console.log(err);
        });
    },
    createMeeting() {
      const meetingInfo = {
        adminid: store.getUserInfo().id,
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
        createMeetingAPI(meetingInfo)
          .then((res) => {
            console.log(res);
            this.$swal.fire("Good job!", "Tạo cuộc họp thành công", "success");
            window.setTimeout(function () {
              location.href = "/Room";
            }, 3000);
          })
          .catch((err) => {
            console.log(err);
            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Tạo cuộc họp thất bại :(((",
              // footer: '<a href="">Why do I have this issue?</a>',
            });
          });
      } else {
        this.errMsg = "Giờ đặt họp chỉ cho phép từ 8:00 AM đến 22:00 PM";
      }
    },
  },
  async created() {
    this.meetingInfo.roomname = store.getARoomInfo().roomname;
    //comment
    getRoomReviewAPI(this.roomid)
      .then((res) => {
        console.log(res);
        this.comments = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
label{
	margin-bottom: 0.3rem;
}
input{
	height: 1rem;
	margin-bottom: 0.9rem;
}
.card{
	border-radius: 2rem;
	background-color: #d9d9f2;
}
.review{
	margin-top: 3rem;
}
.form-select {
  width: 40%;
}
</style>