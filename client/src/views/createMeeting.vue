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
            <h1>Thông tin phòng họp</h1>
            {{ this.roominfo.id }}
            {{ this.roominfo.roomname }}
            {{ this.roominfo.capacity }}
            {{ this.roominfo.facilities }}
            {{ this.roominfo.status }}
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
          <h1>Reviews tu nguoi dung</h1>
          <div>
            <b-row class="mt-2">
              <div>
                Danh gia phong theo thang diem 10
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="postComment.rating"
                >
                  <option selected>Danh gia phong</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <label for="textarea-large">Nhap binh luan:</label>
                <b-form-textarea
                  id="textarea-rows"
                  placeholder="Tall textarea"
                  rows="8"
                  v-model="postComment.message"
                ></b-form-textarea>
              </div>
            </b-row>
            <b-button class="mx-1" variant="primary" @click="postAComment"
              >Binh luan</b-button
            >
          </div>
          <div class="col-sm-5 col-md-6 col-12 pb-4">
            <h1>Comments</h1>
            <div
              class="comment mt-4 text-justify darker float-left"
              v-for="comment in comments"
              :key="comment.id"
            >
              <img
                src="https://i.imgur.com/yTFUilP.jpg"
                alt=""
                class="rounded-circle"
                width="40"
                height="40"
              />
              <h4>{{ comment.userid }} - Rating: {{ comment.rating }}/10</h4>
              <span>{{ comment.time }}</span> <br />
              <p>
                {{ comment.message }}
              </p>
              <b-button-group v-if="comment.userid === 12">
                <b-button variant="secondary">Edit</b-button>
                <b-button variant="danger">Delete</b-button>
                <!-- <b-button variant="secondary">Warning</b-button> -->
              </b-button-group>
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
.form-select {
  width: 40%;
}
</style>