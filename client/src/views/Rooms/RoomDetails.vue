<template>
  <div v-show="this.showInfo">
    <!--h1>Room details page</h1-->
    <div
      class="card col-sm-7 mx-auto mt-5 rounded"
			style="background-color: var(--bg-color)"
    >
      <div class="card-body mb-2">
				<h3 class="title-text mt-1 mx-auto">ID : {{ this.id }}</h3>
				<p class="card-text note small">Room details, you can create a meeting in this room if it's status is empty</p>
			</div>
      
      <div class="row mt-2">
        <div class="col-sm-6 mx-0 info-list">
          <p class="head-text">Room name: <span	class="info-text">{{ this.roomname }}</span></p>
          <p class="head-text">Host name: <span	class="info-text"> {{ this.startingTime }}</span></p>
					<p class="head-text">Facilities : <span	class="info-text"> {{ this.facilities }}</span></p>
          <p class="head-text">Description : <span	class="info-text"> {{ this.during }}</span></p>
					
        </div>
        <div class="col-sm-6 mx-0 info-list-right">
					<p class="head-text">Capacity: <span	class="info-text"> {{ this.capacity }}</span></p>
          <p class="head-text">Group:</p>
          <p class="head-text">Status: <span	class="info-text"> {{ this.status }}</span></p>
        </div>
      </div>
      <div class="row mt-2 mb-2">
        <button class="btn btn-primary col-sm-3 mx-auto" @click="openCreateMeeting">
          Book now !
        </button>
      </div>
    </div>
  </div>
	<div v-show="!this.showInfo">
		<div class="row mt-4">
			<h1 class = "text-center"> Book a meeting at room {{this.$route.params.roomname}} </h1>
		</div>
		<div class="container card border border-3 mt-4" style="width: 600px; background-color:#E3E5E7;" onsubmit="return false">
      <div class="form-group row d-flex mt-3">
        <label for="inputRoomId" class="col-sm-3 col-form-label">Meeting ID</label>
        <div class="col-sm-8">
          <UiInput
            type="number"
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
        <label for="inputStartTime" class="col-sm-3 col-form-label"
          >Start time</label
        >
        <div class="col-sm-5">
          <UiInput
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
          <UiInput
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
      </div>
      <div class="row mt-2 pb-1">
        <button
          ref="submit"
          type="submit"
          class="btn btn-primary mx-auto col-sm-3"
          @click="addMeeting"
        >
          Create
        </button>
				<button
          ref="submit"
          type="submit"
          class="btn btn-secondary mx-auto col-sm-3"
          @click="this.showInfo = true;"
        >
          Cancel
        </button>
      </div>
    </div>
	</div>
	<div
        id="liveToast"
        class="toast show"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
				style="position: absolute; top :36%; left: 36%;"
				v-show="this.showInactive"
      >
		<div class="toast-header bg-danger">
			<strong class="me-auto text-light">Err</strong>
			<button
				type="button"
				class="btn-close"
				aria-label="Close"
				@click="this.showInactive = false"
			></button>
		</div>
		<div class="toast-body">
			This room is not available this time, come back later
		</div>
	</div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import DataServices from "@/services/DataServices.js";
import UiInput from "@/components/UiInput";

export default {
  data() {
    return {
			showInfo: true,
			showInactive: false,
      id: this.$route.params.id,
      roomname: this.$route.params.roomname,
      capacity: this.$route.params.capacity,
      facilities: this.$route.params.facilities,
      status: this.$route.params.status,
      info: {
        meetingID: 123456789,
        adminID: 2345,
        startingTime: "23:45 CH",
        reseverDate: "01/01/1234",
        during: 3,
        status: "active",
      },
    };
  },
  methods: {
    openCreateMeeting() {
      if (this.status === "active")
				this.showInfo = false;
			else this.showInactive = 1;
    },
  },
  components: {
    DataServices,
		UiInput,
  },
  /* 
  created() {
    DataServices.getRoomInfo(this.id)
    .then(res => {
      this.info = res.data;
    })
    .catch(err => {
      console.log(err);
    })
  }*/
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&family=Open+Sans:wght@300;400&display=swap');
.head-text {
  font-size: 1.15em;
	font-family: 'Nanum Gothic', sans-serif;
  font-weight: bold;
}
.title-text {
  font-size: 1.5em;
	font-family: 'Nanum Gothic', sans-serif;
  font-weight: normal;
}
.info-text {
  font-size: 1em;
	font-family: 'Nanum Gothic', sans-serif;
  font-weight: normal;
}
.card-body{
	border-bottom: 2px gray solid;
}
.note{
	color : gray;
}
div.info-list>p:nth-of-type(odd) {
  background: #e0e0e0	;
}
div.info-list-right>p:nth-of-type(even) {
  background: #e0e0e0	;
}
</style>
