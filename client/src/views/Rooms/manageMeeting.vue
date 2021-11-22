<template>
  <div v-show="this.showModifyForm===-1">
    <div id="tabs" class="container">
			<div class="text-center">
				<h1>Manage Meeting</h1>
			</div>
			<div class="tabs">
					<a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]">Past</a>
					<a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]">Comming</a>
					<a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]">Administrator</a>
			</div>
			<div class="content">
					<div class="tabcontent">
							<div class="row">
								<div
									class="col-sm-6"
									v-for="room in this.rooms[activetab - 1]"
									:key="room.ID"
								>
									<div class="card mb-2 mt-2" style="width:85%; height:95%">
										<div style="padding-left:1rem;">
											<router-link :to="{ name: 'roomdetails', params: { id: room.id } }">
															<h5 class="card-title text-center text-dark">
																{{ room.id }}
															</h5>
											</router-link>
											<div class="row">
												<div class="card-text col-sm-7">
													<h6>Date: {{ room.reservedDate }}</h6>
													<h6> Start time: {{ room.startingTime }}</h6>
													<h6>Room name: {{ room.name }}</h6>
												</div>
												<div class="card-text col-sm-3">
													<h6>Status: {{ room.status }}</h6>
													<h6>Duration: {{ room.during }}</h6>
												</div>
												<div class="card-text col-sm-2 mx-auto" v-show="activetab===3">
													<button class="btn btn-danger mb-1" @click="deleteRoom(room.id)">Delete</button>
													<button 
													class="btn btn-secondary" 
													@click="modifyRoom(room.id)" 
													>Modify</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
					</div>
			</div>
			<!--div class="container"
					<props: ['meetingid','roomid','reserveddate','startingtime','during','title','content', 'status'],>
					<ModifyMeeting 
					:meetingid="123456789" 
					:startingtime="'04:08'	" 
					:during="5" 
					:title="'ald asdk'">
					</ModifyMeeting>
			</div-->
		</div>
  </div>
	<div class="modify-form row">
		<button 
			type="button" 
			class="close btn btn-secondary w-25 mx-auto mt-5" 
			@click="showTab"
			v-show="this.showModifyForm !== -1"
			>
				&#8592; Go Back
		</button>
		<div
			v-for="room in this.rooms[activetab - 1]"
			:key="room.ID"
		>
			<ModifyMeeting
			:meetingid=room.id 
			:startingtime=room.startingTime
			:during=room.during
			:reserveddate=room.reservedDate
			:status=room.status
			:title=room.name
			v-show="room.id === this.showModifyForm"
			>
			</ModifyMeeting>
		</div>
	</div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import ModifyMeeting from "@/components/ModifyMeeting.vue";
//import DataServices from "@/services/DataServices.js";

export default {
  name: "FindRoom",
  data() {
    return {
			showModifyForm : -1,
			activetab: 1,
      searchValues: {
		roomname: "",
        city: "",
        district: "",
        roomid: "",
        status: "",
      },
      rooms: [[
        { id: 123456789, reservedDate: "01/01/1999", startingTime: "15:45", during: "5", status: "active" },
				{ id: 123456780, reservedDate: "01/01/1999", startingTime: "15:45", during: "5", status: "active" },
        { id: 453452123, reservedDate: "01/01/2000", startingTime: "15:45", during: "5", status: "active" },
      ],[
				{ id: 25252525, reservedDate: "01/01/2001", startingTime: "15:45", during: "5", status: "comming" },
				{ id: 25252525, reservedDate: "01/01/2002", startingTime: "15:45", during: "24", status: "active" },
				{ id: 25252525, reservedDate: "01/01/2003", startingTime: "15:45", during: "5", status: "ended" },
			], [
				{ id: 98654565, reservedDate: "01/01/2001", startingTime: "15:45", during: "5", status: "comming" },

			]]
    };
  },
  created() {
    // DataServices.getRoom()
    //   .then((res) => {
    //     this.event = res.data;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
  components: {
    Nav,
		ModifyMeeting,
    //DataServices,
  },
  methods: {
    searchResult() {
      //Get data for rooms_past, rooms_comming, rooms_personal
    },
		deleteRoom(id){
			//detete data
			return id;
		},
		modifyRoom(id){
			this.showModifyForm = id;
			return id;
		},
		showTab(){
			this.showModifyForm = -1;

		},
  },
};
</script>

<style scoped>

a { text-decoration: none; }
 
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {  
    max-width: 80%; 
    min-width: 80%;
    margin: 40px auto;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.9em;
}

.tabs {
	overflow: hidden;
  margin-left: 20px;
	margin-bottom: -2px;
}

.tabs ul {
	list-style-type: none;
	margin-left: 20px;
}

.tabs a{
    float: left;
    cursor: pointer;
    padding: 12px 24px;
    transition: background-color 0.2s;
    border: 1px solid #ccc;
    border-right: none;
    background-color: #f1f1f1;
    border-radius: 10px 10px 0 0;
    font-weight: bold;
}
.tabs a:last-child { 
    border-right: 1px solid #ccc;
}

.tabs a:hover {
    background-color: #aaa;
    color: #fff;
}

.tabs a.active {
    background-color: var(--bg-color);
    color: #484848;
    border-bottom: 2px solid #fff;
    cursor: default;
}

.tabcontent {
	padding: 30px;
	border: 1px solid #ccc;
	border-radius: 10px;
  box-shadow: 3px 3px 6px #e1e1e1;
}

.card {
	background-color: var(--bg-color)
}
.meeting-modify{
	margin-top : 5%;
	margin-left : 35%;
}
.close{

}
</style>
