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
                <label class="input form-control" readonly>
                  {{ roomname }}
                </label>
              </div>
              <div class="row">
                <div class="form-group col-sm-6">
                  <label>Thời gian bắt đầu</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="this.meetingInfo.startingtime"
                  >
                    <option value="08:00 sáng">08:00 giờ</option>
                    <option value="09:00 sáng">09:00 giờ</option>
                    <option value="10:00 sáng">10:00 giờ</option>
                    <option value="11:00 sáng">11:00 giờ</option>
                    <option value="12:00 sáng">12:00 giờ</option>
                    <option value="13:00 chiều">13:00 giờ</option>
                    <option value="14:00 chiều">14:00 giờ</option>
                    <option value="15:00 chiều">15:00 giờ</option>
                    <option value="16:00 chiều">16:00 giờ</option>
                    <option value="17:00 chiều">17:00 giờ</option>
                    <option value="18:00 tối">18:00 giờ</option>
                    <option value="19:00 tối">19:00 giờ</option>
                    <option value="20:00 tối">20:00 giờ</option>
                    <option value="21:00 tối">21:00 giờ</option>
                    <option value="22:00 tối">22:00 giờ</option>
                  </select>
                  <!-- <input type="number" min="8" max="22" value="0" /> -->
                </div>
                <div class="form-group col-sm-6">
                  <label>Thời gian họp (Giờ)</label>
                  <input
                    class="form-control"
                    type="number"
                    min="1"
                    max="10"
                    name="during"
                    placeholder="Nhập thời gian họp"
                    v-model="this.meetingInfo.during"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-sm-7">
                  <label>Tên cuộc họp</label>
                  <input
                    class="form-control"
                    type="text"
                    name="title"
                    placeholder="Nhập tên cuộc họp"
                    v-model="this.meetingInfo.title"
                  />
                </div>
                <div class="form-group col-sm-5">
                  <label>Ngày họp</label>
                  <input
                    class="form-control"
                    type="date"
                    name="date"
                    placeholder="Nhập ngày đặt phòng"
                    v-model="this.meetingInfo.reserveddate"
                  />
                </div>
              </div>
              <div class="form-group">
                <label>Nội dung cuộc họp</label>
                <textarea
                  class="form-control"
                  type="textarea"
                  name="content"
                  placeholder="Nhập nội dung họp"
                  rows="5"
                  v-model="this.meetingInfo.content"
                ></textarea>
              </div>
              <div class="text-center mt-3">
                <button class="btn btn-primary" @click.prevent="createMeeting">
                  Tạo
                </button>
                {{ errMsg }}
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
      // comments: [],
      meetingInfo: {
        adminid: "",
        roomid: "",
        roomname: "",
        reserveddate: "",
        startingtime: "",
        during: "",
        title: "",
        content: "", // Not required
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
      const getTime = parseInt(this.meetingInfo.startingtime.substring(0, 2));
      const meetingInfo = {
        adminid: store.getUserInfo().id,
        //admin: {id: 11, adminname: "Đức Hoàng"},
        roomid: this.roomid,
        reserveddate: this.meetingInfo.reserveddate,
        startingtime: getTime,
        during: this.meetingInfo.during,
        title: this.meetingInfo.title,
        content: this.meetingInfo.content, // Not required
      };
      console.log(meetingInfo);
      //axios post
      if (getTime >= 8 && getTime <= 22) {
        createMeetingAPI(meetingInfo)
          .then((res) => {
            console.log(res);
            this.$swal.fire(
              "Thành công!",
              "Tạo cuộc họp thành công",
              "success"
            );
            const getFormInfo = {
              id: res.data.id,
              room: { id: this.roomid, roomname: this.roomname },
              during: this.meetingInfo.during,
              title: this.meetingInfo.title,
              content: this.meetingInfo.content, // Not required
              reserveddate: this.meetingInfo.reserveddate,
              startingtime: getTime,
            };
            localStorage.setItem("meetinginfo", JSON.stringify(getFormInfo));
            window.setTimeout(function () {
              location.href =
                "/admin/editMeeting/" +
                "roomid=" +
                res.data.roomid +
                "/meetingid=" +
                res.data.id;
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
      // if (isSuccess == true) {

      //   this.$swal.fire("Thành công!", "Tạo cuộc họp thành công", "success");
      //   window.setTimeout(function () {
      //     location.href = "/admin";
      //   }, 3000);
      // }
    },
  },
};
</script>

<style>
input {
  height: 2.45rem;
  margin-bottom: 0.7rem;
}
.input {
  height: 2.45rem;
  margin-bottom: 0.7rem;
}
</style>