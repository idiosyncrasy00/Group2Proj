<template>
  <div>
    <!--h1>Room details page</h1-->
		<div class="card col-sm-5 mx-auto mt-5 border-top border-5 rounded" 
		style="background-color:var(--bg-color);">
			<h3 class="mt-1 mx-auto "> {{info.meetingID}} </h3>
			<div class="row mt-2">
					<div class="col-sm-5 mx-auto">
						<p class="info-text">Host name:</p>
						<p class="info-text">Start time: {{info.startingTime}}</p>
						<p class="info-text">Duration : {{info.during}}</p>
					</div>
					<div class="col-sm-5 mx-auto">
						<p class="info-text">Group: </p>
						<p class="info-text">Date : {{info.reseverDate}}</p>
						<p class="info-text">Status: {{info.status}}</p>
					</div>
			</div>
			<div class="row mt-2 mb-2">
				<button class="btn btn-primary col-sm-3 mx-auto" 
				@click="joinMeeting"
				> 
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
			info: { meetingID: 123456789,
			adminID: 2345,
			startingTime: "23:45 CH",
			reseverDate: "01/01/1234",
			during:3,
			status: "active",
			},
    };
  },
	method:{
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
.info-text{
	font-size:1.15em;
	font-family: "Lucida Console", "Courier New", monospace;
	font-weight: bold;
}
</style>
