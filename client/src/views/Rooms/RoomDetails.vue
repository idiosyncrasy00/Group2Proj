<template>
  <div>
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
          <p class="head-text">Start time: <span	class="info-text"> {{ this.startingTime }}</span></p>
          <p class="head-text">Duration : <span	class="info-text"> {{ this.during }}</span></p>
					<p class="head-text">Facilities : <span	class="info-text"> {{ this.facilities }}</span></p>
        </div>
        <div class="col-sm-6 mx-0 info-list">
					<p class="head-text">Capacity: <span	class="info-text"> {{ this.capacity }}</span></p>
          <p class="head-text">Group:</p>
          <p class="head-text">Date : <span	class="info-text"> {{ this.reseverDate }}</span></p>
          <p class="head-text">Status: <span	class="info-text"> {{ this.status }}</span></p>
        </div>
      </div>
      <div class="row mt-2 mb-2">
        <button class="btn btn-primary col-sm-3 mx-auto" @click="joinMeeting">
          Join now !
        </button>
      </div>
    </div>
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import DataServices from "@/services/DataServices.js";
export default {
  data() {
    return {
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
  method: {
    joinMeeting() {
      //TODO
    },
  },
  components: {
    DataServices,
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
</style>
