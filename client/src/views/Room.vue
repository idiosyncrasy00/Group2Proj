<template>
  <div class="container" style="padding:0;">
    <div class="row">
      <!-- BEGIN SEARCH RESULT -->
      <div class="col-sm-12">
        <div class="grid search">
          <div class="grid-body">
            <div class="row">
              <!-- BEGIN RESULT -->
              <div class="col-md-11 mx-auto">
								<div class="row text-center mb-3 mt-1">
									<h2><i class="fa fa-file-o"></i> Danh sách phòng</h2>
								</div>
                <!-- BEGIN SEARCH INPUT -->
                <div class="input-group row mb-5">
									<p class="mb-0" style="color: gray; font-size: 90%">Please enter room info</p>
                  <input
                    type="text"
                    class="form-control col-sm-9"
                    placeholder="Danh sách phòng"
                    v-model="searchValues.roomName"
                  />
                  <button class="btn button btn-primary col-sm-2">Tìm kiếm</button>
                </div>

                <!-- END SEARCH INPUT -->

                <br />

                <!-- BEGIN TABLE RESULT -->
                <div class="table-responsive">
                  <table class="table table-hover">
                    <tbody>
                      <tr v-for="room in rooms" :key="room.roomname">
												<div class="product row">
													<div class="image col-sm-1">
														<img 
														src="../assets/logo.png" 
														alt="" 
														style="height: 3rem;width: 3rem;"
														/>
													</div>
													<div class="row col-sm-11">
														<div class="col-sm-7">
															<p>{{ room.roomname }}</p>
															Trang thiết bị: {{ room.facilities }}
														</div>
														<div class="col-sm-4">
															<p>
																<img src="https://icon-library.com/images/person-icon-png-transparent/person-icon-png-transparent-15.jpg"
																style="height: 1.9rem;width: 1.9rem;"
																/> {{ room.capacity }}
															</p>
															Trạng thái: {{room.status}}
														</div>
														<div class="col-sm-1">
															<button
															class="btn btn-primary"
															type="button"
															v-if="room.status != 'Bảo trì'"
															@click="roomBooking(room)"
														>
																<h6 class="text-center text-dark">
																	Đặt phòng
																</h6>
															</button>
														</div>
													</div>
												</div>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- END TABLE RESULT -->
              </div>
              <!-- END RESULT -->
            </div>
          </div>
        </div>
      </div>
      <!-- END SEARCH RESULT -->
    </div>
  </div>
</template>

<script>
//import axios from "axios";
//import store from "@/store/index.js";
import { getRoomListAPI } from "@/services/room.apiServices.js";

export default {
  name: "room",
  components: {},
  data() {
    return {
      searchValues: {
        roomName: "",
      },
      rooms: [
        // { id: 1, roomName:"Phong A",capacity: 11,facilities:"Có đồ A,B,C", status: "Bảo trì" },
        // { id: 2, roomName:"Nha bep",capacity: 13,facilities:"Có đồ A,B,C", status: "Bình thường" },
        // { id: 4, roomName:"Phong V",capacity: 12,facilities:"Có đồ A,B,C", status: "Bình thường" },
      ],
    };
  },
  methods: {
    roomBooking(room) {
      this.$router.push({
        name: "createMeeting",
        params: {
          roomid: room.id,
          roomname: room.roomname,
        },
      });
      localStorage.setItem("roominfo", JSON.stringify(room));
    },
    searchResult() {
      return this.searchRooms;
    },
  },
  computed: {
    searchRooms() {
      return this.rooms.filter(
        (rooms) =>
          rooms.roomName.toLowerCase().search(this.searchValues.roomName) != -1
        /*return this.rooms.filter((rooms) =>
        rooms.roomName.startsWith(this.searchValues.roomName)*/
      );
    },
  },

  async created() {
    // get room list
    getRoomListAPI()
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("roomlist", JSON.stringify(res.data));
        this.rooms = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    //this.rooms = JSON.parse(localStorage.getItem("roomlist"));
    //this.room =
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
.input-group{
	border-radius: 1rem;
}
.table-responsive{
	overflow: hidden;
	width: 100%;
	padding: 0;
	margin:0;
}
.product{
	border-bottom: thin gray solid;
	font-family: 'Comfortaa', cursive;
}
</style>