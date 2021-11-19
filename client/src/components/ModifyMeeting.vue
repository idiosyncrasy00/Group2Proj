<template>
	<transition name="shake" mode="out-in">
		<div class="meeting-modify">
			<div class = "card w-50">
				<div class="container card border border-3 w-100 h-100" style="width: 600px; background-color:#E3E5E7;" onsubmit="return false">
					<div class="form-group row d-flex mt-3">
						<label for="inputRoomId" class="col-sm-3 col-form-label">Meeting ID</label>
						<div class="col-sm-8">
							<input
								class="modify-input"
								id="meetingIdInput"
								aria-describedby="meetidHelp"
								placeholder="Enter Meeting room ID"
								v-model="new_meetingid"
								v-on:keyup.enter="this.$refs.pass.focus()"
								autofocus
							/>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputStartTime" class="col-sm-3 col-form-label"
							>Start time</label
						>
						<div class="col-sm-5">
							<input
								class="modify-input"
								ref="time"
								type="time"
								id="inputStartTime"
								v-model="new_start_time"
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
								class="modify-input"
								type="date"
								ref="date"
								id="inputDate"
								v-model="new_reserve_date"
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
								class="modify-input"
								ref="duration"
								type="text"
								min="0"
								max="12"
								id="inputDuration"
								placeholder="1"
								v-model="new_duration"
								v-on:keyup.enter="this.$refs.submit.focus()"
							/>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputDuration" class="col-sm-3 col-form-label"
							>Title
						</label>
						<div class="col-sm-5">
							<input
								class="modify-input"
								type="text"
								id="inputTitle"
								placeholder="Title"
								v-model="new_title"
							/>
						</div>
					</div>
					<div class="form-group row">
						<label for="inputDuration" class="col-sm-3 col-form-label"
							>Status
						</label>
						<div class="col-sm-5">
							<input
								class="modify-input"
								type="text"
								id="inputStatus"
								placeholder="Active"
								v-model="new_status"
							/>
						</div>
						
					</div>
					<div class="row mt-2 pb-1">
						<button
							ref="submit"
							type="submit"
							class="btn btn-primary mx-auto col-sm-3"
							@click="sendData"
						>
							Update
						</button>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>


export default {
  name: 'ModifyMeeting',
  props: ['meetingid','roomid','reserveddate','startingtime','during','title','content', 'status'],
	data() {
		return {
			new_meetingid: this.meetingid,
			new_roomid: this.roomid,
			new_reserve_date: this.reserveddate,
			new_start_time: this.startingtime,
			new_duration: this.during,
			new_title: this.title,
			new_content: this.content,
			new_status: this.status,
		}
	},
	methods: {
		sendData(){
			console.log(this.new_start_time);
		},
	},
	components: {
  },
}
</script>

<style>
input{
	background-color: transparent;
	border: 0;
	border-bottom: 1px black solid
}
</style>