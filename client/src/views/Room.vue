<template>
  <div class="container">
    <div class="row">
      <!-- BEGIN SEARCH RESULT -->
      <div class="col-md-12">
        <div class="grid search">
          <div class="grid-body">
            <div class="row">
              <!-- BEGIN RESULT -->
              <div class="col-md-9 mx-auto">
                <div class="row text-center mb-3 mt-1">
                  <h2><i class="fa fa-file-o"></i> Danh sách phòng</h2>
                </div>
                <!-- BEGIN SEARCH INPUT -->
                <div class="input-group">
                  <!-- <input
                    type="text"
                    class="form-control"
                    placeholder="Nhập tên phòng"
                    v-model="searchValues.roomName"
                  /> -->
                  <div class="input-group row mb-5">
                    <!-- <p class="mb-0" style="color: gray; font-size: 90%">
                      Please enter room info
                    </p> -->
                    <input
                      type="text"
                      class="form-control col-sm-9"
                      placeholder="Danh sách phòng"
                      v-model="searchValues.roomName"
                    />
                    <!-- <button class="btn button btn-primary col-sm-3">
                      Tìm kiếm
                    </button> -->
                  </div>

                  <!-- END SEARCH INPUT -->

                  <br />

                  <!-- BEGIN TABLE RESULT -->
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <tbody>
                        <tr v-for="room in searchRooms" :key="room.roomname">
                          <td class="image">
                            <img src="../assets/logo.png" alt="" />
                          </td>
                          <td class="product">
                            <strong>{{ room.roomname }}</strong>
                            <br />Sức chứa: {{ room.capacity }} người
                            <br />Trang thiết bị:{{ room.facilities }}
                            <br />Trạng thái:{{ room.status }}
                          </td>
                          <!-- <span class="input-group-btn">
                          <button
                            class="btn btn-primary"
                            type="button"
                            v-if="room.status != 'Bảo trì'"
                            @click="roomBooking(room)"
                          >
                            <h5 class="card-title text-center text-dark">
                              Đặt phòng
                            </h5>
                          </button>
                        </span> -->
                          <span class="input-group-btn">
                            <button
                              type="button"
                              class="btn btn-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal3"
                              v-if="room.status != 'Bảo trì'"
                              @click="roomBooking2(room)"
                            >
                              <h5 class="card-title text-center text-dark">
                                Đặt phòng
                              </h5>
                            </button>
                          </span>
                          <!--modal đặt phòng-->
                          <createMeetingModal
                            id="exampleModal3"
                            :roomid="this.getRoomID"
                            :roomname="this.getRoomName"
                          />
                          <span class="input-group-btn">
                            <button
                              type="button"
                              class="btn btn-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                              @click="getMeetingsInARoom(room)"
                            >
                              <h5 class="card-title text-center text-dark">
                                Xem lịch
                              </h5>
                            </button>
                          </span>
                          <!--modal lịch đặt phòng-->
                          <roomCalendarModal
                            id="exampleModal"
                            :roomname="this.getRoomName"
                          />
                          <span class="input-group-btn">
                            <button
                              type="button"
                              class="btn btn-primary btn-sm"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal1"
                              @click="roomReview(room)"
                            >
                              <h5 class="card-title text-center text-dark">
                                Đánh giá
                              </h5>
                            </button>
                          </span>
                          <!--modal đánh giá-->
                          <roomReviewModal
                            id="#exampleModal1"
                            :roomid="this.getRoomID"
                            :commentList="this.getComments"
                          />
                        </tr>
                        <!--end of for loop-->
                      </tbody>
                    </table>
                  </div>
                </div>
                <!-- END RESULT -->
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
import roomCalendarModal from "@/components/roomCalendarModal.vue";
import roomReviewModal from "@/components/roomReviewModal.vue";
import createMeetingModal from "@/components/createMeetingModal.vue";

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

<style scoped>
.grid {
  position: relative;
  width: 100%;
  background: #fff;
  color: #666666;
  border-radius: 2px;
  margin-bottom: 25px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
}

.grid .grid-body {
  padding: 15px 20px 15px 20px;
  font-size: 0.9em;
  line-height: 1.9em;
}

.search table tr td.rate {
  color: #f39c12;
  line-height: 50px;
}

.search table tr:hover {
  cursor: pointer;
}

.search table tr td.image {
  width: 50px;
}

.search table tr td img {
  width: 50px;
  height: 50px;
}

.search table tr td.rate {
  color: #f39c12;
  line-height: 50px;
}

.search table tr td.price {
  font-size: 1.5em;
  line-height: 50px;
}

.search #price1,
.search #price2 {
  display: inline;
  font-weight: 600;
}

.center {
  margin-left: auto;
  margin-right: auto;
}
body {
  margin-top: 20px;
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