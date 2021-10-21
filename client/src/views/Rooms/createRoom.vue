<template>
  <div>
		<div class="row mt-2">
			<div class="h3 mx-auto col-sm-4 text-center">Schedule your meeting</div>
		</div>
    <div
      class="container form "
      style="width: 600px;"
      onsubmit="return false"
    >
      <div class="form-group row d-flex mt-3">
        <label for="inputRoomId" class="col-sm-3 col-form-label">Room ID</label>
        <div class="col-sm-8">
          <input
            type="number"
            min="10000000"
            max="999999999"
            class="form-control"
            id="meetingIdInput"
            aria-describedby="meetidHelp"
            placeholder="Enter Meeting room ID"
            v-model="meetingId"
            v-on:keyup.enter="this.$refs.pass.focus()"
            autofocus
          />
          <small id="meetidHelp" class="form-text text-muted col-sm-8"
            >Choose your 9-digits room ID</small
          >
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-3 col-form-label"
          >Password</label
        >
        <div class="col-sm-8">
          <input
            ref="pass"
            type="password"
            class="form-control"
            id="inputPassword"
            placeholder="Password"
            v-model="password"
            v-on:keyup.enter="this.$refs.time.focus()"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputStartTime" class="col-sm-3 col-form-label"
          >Start time</label
        >
        <div class="col-sm-5">
          <input
            ref="time"
            type="time"
            class="form-control"
            id="inputStartTime"
            v-model="time"
            v-on:keyup.enter="this.$refs.date.focus()"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputDate" class="col-sm-3 col-form-label"
          >Start date</label
        >
        <div class="col-sm-5">
          <input
            type="date"
            ref="date"
            class="form-control"
            id="inputDate"
            v-model="date"
            v-on:keyup.enter="this.$refs.duration.focus()"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputDuration" class="col-sm-3 col-form-label"
          >Duration
        </label>
        <div class="col-sm-5">
          <input
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
      </div>
			<div class="row mt-2 pb-1">
				<button
					ref="submit"
					type="submit"
					class="btn btn-primary mx-auto col-sm-3"
					@click="addMeeting"
				>
					Submit
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
import Nav from "../../components/Nav.vue";

//import DataServices from "../services/DataServices";

export default {
  name: "createRoom",
  data() {
    return {
      meeting: "",
      meetings: [],
    };
  },
  create: function () {
    this.addMeeting();
  },
  methods: {
    addMeeting() {
      this.meetings.push({
        meetingId: this.meetingId,
        password: this.password,
        time: this.time,
        date: this.date,
        duration: this.duration,
        show_toast: 1,
      });
      this.meeting = "";
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
    newRoom() {
      this.submitted = false;
      this.rooms = {};
    },
  },
  components: {
    Nav,
  },
};
</script>

<style>
.form {
  background-color: var(--bg-color);
}
.form-group {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
}
.col-form-label{
		font-family: "Lucida Console", "Courier New", monospace;
		font-weight: bold;
}
</style>
