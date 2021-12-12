<template>
  <div class="container" style="padding: 0">
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
                <div class="input-group">
                  <div class="input-group row mb-5">
                    <input
                      type="text"
                      class="form-control col-sm-9"
                      placeholder="Danh sách phòng"
                      v-model="searchValues.roomName"
                    />
                  </div>

                  <!-- END SEARCH INPUT -->
                  <br />
                  <!-- BEGIN TABLE RESULT -->
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <tbody>
                        <tr v-for="room in searchRooms" :key="room.roomname">
                          <div class="product row">
                            <div class="image col-sm-1">
                              <img
                                src="../../assets/logo.png"
                                alt=""
                                style="height: 3rem; width: 3rem"
                              />
                            </div>
                            <div class="col-sm-6">
                              <p>
                                <b> {{ room.roomname }} </b> - Đánh giá trung
                                bình: {{ room.rating }}/10
                              </p>
                              Trang thiết bị: {{ room.facilities }}
                            </div>
                            <div class="col-sm-4">
                              <p>
                                <img
                                  src="../../assets/people.png"
                                  style="height: 1.9rem; width: 1.9rem"
                                />
                                {{ room.capacity }}
                              </p>
                              Trạng thái: {{ room.status }}
                            </div>
                            <div class="col-sm-1 hide">
                              <span class="input-group-btn">
                                <button
                                  type="button"
                                  class="btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal3"
                                  v-if="room.status != 'Bảo trì'"
                                  @click="roomBooking2(room)"
                                  style="padding: 0; background-color: #8cff66"
                                >
                                  <img
                                    src="../../assets/booking.png"
                                    style="height: 2rem; width: 2rem"
                                  />
                                </button>
                              </span>
                              <!-- Button trigger calendar -->
                              <span class="input-group-btn">
                                <button
                                  type="button"
                                  class="btn btn-light"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal"
                                  @click="getMeetingsInARoom(room)"
                                  style="padding: 0"
                                >
                                  <img
                                    src="../../assets/calendar.jpg"
                                    style="height: 2rem; width: 2rem"
                                  />
                                </button>
                              </span>
                              <!-- Button trigger feedback -->
                              <span class="input-group-btn">
                                <button
                                  type="button"
                                  class="btn"
                                  data-bs-toggle="modal"
                                  data-bs-target="#exampleModal1"
                                  @click="roomReview(room)"
                                  style="padding: 0; background-color: #ff704d"
                                >
                                  <img
                                    src="../../assets/like.png"
                                    style="height: 2rem; width: 2rem"
                                  />
                                </button>
                              </span>
                            </div>
                          </div>
                          <!--modal đặt phòng-->
                          <createMeetingModal
                            id="exampleModal3"
                            :roomid="this.getRoomID"
                            :roomname="this.getRoomName"
                          />
                          <!--modal lịch đặt phòng-->
                          <roomCalendarModal
                            id="exampleModal"
                            :roomname="this.getRoomName"
                          />
                          <!--modal đánh giá-->
                          <roomReviewModal
                            id="#exampleModal1"
                            :roomid="this.getRoomID"
                            :roomname="this.getRoomName"
                            :commentList="this.getComments"
                          />
                        </tr>
                        <!--end of for loop-->
                      </tbody>
                    </table>
                  </div>
                  <!-- END RESULT -->
                </div>
              </div>
            </div>
          </div>
          <!-- END SEARCH RESULT -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getRoomListAPI,
  getRoomReviewAPI,
  //getMeetingsInARoomAPI,
  //postReviewAPI,
} from "@/services/room.apiServices.js";
import roomCalendarModal from "@/components/UserServices/roomCalendarModal.vue";
import roomReviewModal from "@/components/UserServices/roomReviewModal.vue";
import createMeetingModal from "@/components/UserServices/createMeetingModal.vue";

export default {
  name: "room",
  components: {
    roomCalendarModal,
    roomReviewModal,
    createMeetingModal,
  },
  data() {
    return {
      getRoomID: "",
      getRoomName: "",
      getComments: "",
      getMeetingsList: "",
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
    // roomBooking(room) {
    //   this.$router.push({
    //     name: "createMeeting",
    //     params: {
    //       roomid: room.id,
    //       roomname: room.roomname,
    //     },
    //   });
    //   localStorage.setItem("roominfo", JSON.stringify(room));
    // },
    getMeetingsInARoom(room) {
      this.getRoomName = room.roomname;
      console.log(room.roomname);
      // getMeetingsInARoomAPI(room.roomname, "")
      //   .then((res) => {
      //     console.log(res);
      //     this.getMeetingsList = res.data;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
    roomReview(room) {
      this.getRoomID = room.id;
      this.getRoomName = room.roomname;
      getRoomReviewAPI(room.id)
        .then((res) => {
          console.log(res);
          this.getComments = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    roomBooking2(room) {
      this.getRoomID = room.id;
      this.getRoomName = room.roomname;
    },
    searchResult() {
      return this.searchRooms;
    },
  },
  computed: {
    searchRooms() {
      return this.rooms.filter(
        (rooms) =>
          rooms.roomname
            .toLowerCase()
            .search(this.searchValues.roomName.toLowerCase()) != -1
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
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&display=swap");
.input-group {
  border-radius: 1rem;
}
.table-responsive {
  overflow: hidden;
  width: 100%;
  padding: 0;
  margin: 0;
}
.product {
  border-bottom: thin gray solid;
  font-family: "Comfortaa", cursive;
}

.center {
  margin-left: auto;
  margin-right: auto;
}
body {
  margin-top: 0px;
}
.bg-light-gray {
  background-color: #f7f7f7;
}
.table-bordered thead td,
.table-bordered thead th {
  border-bottom-width: 2px;
}
.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}
.table-bordered td,
.table-bordered th {
  border: 1px solid #dee2e6;
}
.bg-sky {
  background-color: deepskyblue;
}
.bg-gray {
  background-color: gray;
}
.bg-orange {
  background-color: #e95601;
}

.bg-green {
  background-color: #5bbd2a;
}

.bg-yellow {
  background-color: #f0d001;
}

.bg-pink {
  background-color: #ff48a4;
}

.bg-purple {
  background-color: #9d60ff;
}

.bg-lightred {
  background-color: #ff5722;
}

.padding-15px-lr {
  padding-left: 15px;
  padding-right: 15px;
}
.padding-5px-tb {
  padding-top: 5px;
  padding-bottom: 5px;
}
.margin-10px-bottom {
  margin-bottom: 10px;
}
.border-radius-5 {
  border-radius: 5px;
}

.margin-10px-top {
  margin-top: 10px;
}
.font-size14 {
  font-size: 14px;
}

.text-light-gray {
  color: #d6d5d5;
}
.font-size13 {
  font-size: 13px;
}
.input-group {
  border-radius: 1rem;
}
</style>