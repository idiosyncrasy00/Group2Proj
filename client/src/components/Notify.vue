<template>
<div class="container noti-card">
	<div class="noti-item text-dark row" v-for="msg in msgs" :key="msg">
		<div class="noti-content" v-if="msg.type==='Invite'">
			{{ msg.subject }} has invited you to the meeting 
		<router-link
		:to="{
			name: 'roomdetails',
			params: {
				id: msg.room_id,
			},
		}"
		style="text-decoration: none"
		>
			{{msg.room_name}}
		</router-link>

		</div >
		<div class="noti-content" v-if="msg.type==='Join'">
			{{ msg.subject }} has joined to your meeting {{msg.room_name}}
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'Notify',
  props: [],
	data() {
		return {
			msgs: [{type: "Invite", room_name: "Hop cuoi nam", room_id:"123467898", subject: "Giam doc"}, 
						{type: "Join", room_name: "Hop giua nam", room_id:"456789123", subject: "Thu ky"},
						{type: "Join", room_name: "Hop giua nam", room_id:"456789123", subject: "Thu ky"},
						{type: "Invite", room_name: "Hop cuoi nam", room_id:"123467898", subject: "Giam doc"}, 
						{type: "Invite", room_name: "Hop cuoi nam", room_id:"123467898", subject: "Giam doc"}, 
						{type: "Invite", room_name: "Hop cuoi nam", room_id:"123467898", subject: "Giam doc"},
						{type: "Join", room_name: "Hop giua nam", room_id:"456789123", subject: "Thu ky"},],
		}
	},
	methods: {
		sendData(){
			console.log("ok\n");
		},
	},
	components: {
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');
.noti-card{
	background-color: Indigo;
	position: absolute;
	top: 5vh;
	left: -20vh;
	height: 60vh;	
	width: 5vh;
	border: 0px green solid;
	border-radius: 5%;
	padding: 0;
	margin: 0;
	overflow-y: scroll;
	overflow-x: hidden;
}
.noti-item{
	height: 4.5rem;
	border-bottom: 1px gray solid;
	background-color: lightgray;
	font-family: 'Lato', sans-serif;
	font-weight: bold;
}
</style>