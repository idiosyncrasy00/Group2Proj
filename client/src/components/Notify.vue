<template>
<div class="container noti-card">
	<div class="noti-item" v-for="msg in msgs" :key="msg">
		<div v-if="msg.type==='Invite'">
    {{ msg.subject }} has invited you to the room 
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

		</div>
		<div v-if="msg.type==='Join'">
    {{ msg.subject }} has join to your room {{msg.room_name}}
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
						{type: "Join", room_name: "Hop giua nam", room_id:"456789123", subject: "Thu ky"}],
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
.noti-card{
	background-color: #FFF;
	position: absolute;
	top: 5vh;
	left: -20vh;
	height: 60vh;	
	width: 5vh;
	border: 5px green solid;
}
.noti-item{
	border-bottom: 1px black solid;
	height: 5rem;
}
</style>