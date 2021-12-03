<template>
  <tr>
    <div
      class="modal fade"
      id="exampleModal3"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Tạo cuộc họp</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label>Tên phòng</label>
                <label class="form-control form-control-lg" readonly>
                  {{ roomname }}
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
                <button @click.prevent="createMeeting">Tạo</button>
                {{ errMsg }}
                <!-- <button type="submit" class="btn btn-lg btn-primary">Sign up</button> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </tr>
</template>
<script>
//import axios from "axios";
import { createMeetingAPI } from "@/services/meeting.apiServices.js";
// import {
//   getRoomReviewAPI,
//   postReviewAPI,
// } from "@/services/room.apiServices.js";
import store from "@/store/index.js";

export default {
  name: "createMeeting",
  props: ["roomid", "roomname"],
  inheritAttrs: false,
  components: {},
  data() {
    return {
      comments: [],
      postComment: {
        rating: "",
        message: "",
      },
      meetingInfo: {
        adminid: "",
        roomid: "",
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
    postAComment() {
      console.log(this.postComment);
      //POST
      // postReviewAPI(this.postComment)
      //   .then((res) => {
      //     console.log(res);
      //     this.comments.push(res.data);
      //     this.postComment.message = "";
      //     this.postComment.rating = "";
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    createMeeting() {
      const getTime = this.meetingInfo.startingtime.substring(0, 2).toString();
      const meetingInfo = {
        adminid: store.getUserInfo().id,
        roomid: this.roomid,
        reserveddate: this.meetingInfo.reserveddate,
        startingtime: getTime,
        during: this.meetingInfo.during,
        title: this.meetingInfo.title,
        content: this.meetingInfo.content, // Not required
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
    // getRoomReviewAPI(this.roomid)
    //   .then((res) => {
    //     console.log(res);
    //     this.comments = res.data;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>
