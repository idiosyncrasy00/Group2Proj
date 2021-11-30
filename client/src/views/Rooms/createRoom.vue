<template>
  <div>
    <div class="row mt-2">
      <div class="h3 mx-auto col-sm-4 text-center mb-5 mt-3">
        Create your room
      </div>
    </div>
    <div
      class="container card border border-3"
      style="width: 600px; background-color: #e3e5e7"
      onsubmit="return false"
    >
      <div class="form-group row d-flex mt-3">
        <label for="inputRoomId" class="col-sm-3 col-form-label">Room ID</label>
        <div class="col-sm-8">
          <UiInput
            type="text"
            aria-describedby="meetidHelp"
            placeholder="Nhập tên phòng họp"
            v-model="this.roominfo.roomname"
            v-on:keyup.enter="this.$refs.pass.focus()"
            autofocus
          />
          <small id="meetidHelp" class="form-text text-muted col-sm-8"
            >Nhập tên phòng của bạn</small
          >
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-3 col-form-label"
          >Sức chứa</label
        >
        <div class="col-sm-8">
          <UiInput
            type="number"
            class="form-control"
            id="inputPassword"
            placeholder="Sức chứa"
            v-model="this.roominfo.capacity"
            v-on:keyup.enter="this.$refs.time.focus()"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputStartTime" class="col-sm-3 col-form-label"
          >Trang thiết bị</label
        >
        <div class="col-sm-5">
          <UiInput
            type="text"
            class="form-control"
            id="inputStartTime"
            v-model="this.roominfo.facilities"
            v-on:keyup.enter="this.$refs.date.focus()"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputDate" class="col-sm-3 col-form-label"
          >Trạng thái</label
        >
        <div class="col-sm-5">
          <UiInput
            type="text"
            class="form-control"
            v-model="this.roominfo.status"
            v-on:keyup.enter="this.$refs.duration.focus()"
          />
        </div>
      </div>
      <!-- <div class="form-group row">
        <label for="inputDuration" class="col-sm-3 col-form-label"
          >Duration
        </label>
        <div class="col-sm-5">
          <UiInput
            ref="duration"
            type="number"
            min="0"
            max="12"
            class="form-control"
            id="inputDuration"
            placeholder="1"
            v-model="duration"
            v-on:keyup.enter="this.$refs.submit.focus()"
          />
        </div>
      </div> -->
      <div class="row mt-2 pb-1">
        <button
          ref="submit"
          type="submit"
          class="btn btn-primary mx-auto col-sm-3"
          @click="createRoom"
        >
          Tạo phòng
        </button>
      </div>
    </div>
    <div
      class="position-absolute top-50 end-0 translate-middle-y"
      style="z-index: 11"
      v-for="meeting in meetings"
      :key="meeting"
    >
      <div
        id="liveToast"
        class="toast show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div class="toast-header" style="background-color: lightblue">
          <strong class="me-auto">Create success</strong>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
        <div class="toast-body">
          Room with ID :{{ meeting.meetingId }} start at {{ meeting.time }},
          {{ meeting.date }} with duration {{ meeting.duration }}
          <button type="button" @click="deleteMeeting(meeting)">Undo</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UiInput from "@/components/UiInput";
import { createRoomAPI } from "@/services/room.apiServices.js";

export default {
  name: "createRoom",
  data() {
    return {
      // meeting: "",
      // meetings: [],
      roominfo: {
        roomname: "",
        capacity: "",
        facilities: "", // Not required
        status: "",
      },
    };
  },
  create: function () {
    this.addMeeting();
  },
  methods: {
    createRoom() {
      // this.meetings.push({
      //   meetingId: this.meetingId,
      //   password: this.password,
      //   time: this.time,
      //   date: this.date,
      //   duration: this.duration,
      //   show_toast: 1,
      // });
      // this.meeting = "";
      // this.meetingId = "";
      // this.password = "";
      // console.log(this.meetingId);
      createRoomAPI(this.roominfo)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // DataServices.create(data).then(res => {
    //   this.meeting = res.data.meeting;
    //   console.log(res.data);
    // }).catch(e => {
    //   console.log(e);
    // }),

    // deleteMeeting(meeting) {
    //   this.meetings = this.meetings.filter((item) => {
    //     return meeting != item;
    //   });
    // },
    // newRoom() {
    //   this.submitted = false;
    //   this.rooms = {};
    // },
  },
  components: {
    UiInput,
  },
};
</script>

<style>
.form {
  background-color: white var(--bg-color);
}
.form-group {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
}
.col-form-label {
  font-family: $font-family-sans-serif;
  font-weight: bold;
}
</style>
