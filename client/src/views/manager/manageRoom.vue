<template>
  <div class="container">
    <div class="row">
      <!-- BEGIN SEARCH RESULT -->
      <div class="col-md-12">
        <div class="grid search">
          <div class="grid-body">
            <div class="row">
              <!-- BEGIN RESULT -->
              <div class="col-md-9">
                <h2><i class="fa fa-file-o"></i> Danh sách phòng</h2>
                <hr />
                <!-- BEGIN SEARCH INPUT -->

                <!-- <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Danh sách phòng"
                    v-model="searchValues.roomName"
                  />
                  <span class="input-group-append">
                    <button
                      class="
                        btn btn-outline-secondary
                        bg-white
                        border-start-0 border
                        rounded-pill
                        ms-n3
                      "
                      type="button"
                    >
                      <i class="fa fa-search"></i>
                    </button>
                  </span>
                </div> -->
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nhập tên phòng"
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
                        <td class="image">
                          <img src="../../assets/logo.png" alt="" />
                        </td>
                        <td class="product">
                          <strong>{{ room.roomname }}</strong>
                          <br />Sức chứa: {{ room.capacity }} người <br />Trang
                          thiết bị:{{ room.facilities }} <br />Trạng thái:{{
                            room.status
                          }}
                        </td>
                        <!-- chỉnh sửa -->
                        <span class="input-group-btn">
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                            @click="editRoomInfo(room)"
                          >
                            <h5 class="card-title text-center text-dark">
                              Chỉnh sửa
                            </h5>
                          </button>
                        </span>
                        <roomEditModal
                          :roomid="this.getroomid"
                          :roomname="this.getroomname"
                          :roomcapacity="this.getroomcapacity"
                          :roomfacilities="this.getroomfacilities"
                          :roomstatus="this.getroomstatus"
                        />
                        <span class="input-group-btn">
                          <button type="button" class="btn btn-danger">
                            <h5
                              class="card-title text-center text-dark"
                              @click="deleteRoom(room.id)"
                            >
                              Xóa
                            </h5>
                          </button>
                        </span>
                        <span class="input-group-btn">
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal1"
                            @click="roomReview(room)"
                          >
                            <h5 class="card-title text-center text-dark">
                              Xem đánh giá của người dùng
                            </h5>
                          </button>
                        </span>
                        <roomReviewModal
                          :commentList="this.getComments"
                          :roomname="this.getroomname"
                        />
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- END TABLE RESULT -->
              </div>
              <!-- thêm phòng -->
              <span class="input-group-btn">
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop1"
                >
                  <h5 class="card-title text-center text-dark">Thêm phòng</h5>
                </button>
              </span>
              <!-- Modal -->
              <!-- Modal thêm phòng -->
              <roomCreateModal :commentList="this.getComments" />
              <!-- End Modal -->
              <!-- end thêm phòng -->
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
import {
  getRoomListAPI,
  deleteRoomAPI,
  getRoomReviewAPI,
} from "@/services/room.apiServices.js";
import roomCreateModal from "@/components/ManagerComponents/roomCreateModal.vue";
import roomEditModal from "@/components/ManagerComponents/roomEditModal.vue";
import roomReviewModal from "@/components/roomReviewModal.vue";

export default {
  name: "manageRoom",
  components: {
    roomCreateModal,
    roomEditModal,
    roomReviewModal,
  },
  data() {
    return {
      getComments: "",
      getroomid: "",
      getroomname: "",
      getroomcapacity: "",
      getroomfacilities: "",
      getroomstatus: "",
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
    editRoomInfo(room) {
      this.getroomid = room.id;
      this.getroomname = room.roomname;
      this.getroomcapacity = room.capacity;
      this.getroomfacilities = room.facilities;
      this.getroomstatus = room.status;
    },
    deleteRoom(id) {
      this.$swal
        .fire({
          title: "Bạn có chắc muốn xóa phòng này chứ?",
          showDenyButton: true,
          confirmButtonText: "Có",
          denyButtonText: `Không`,
        })
        .then((result) => {
          if (result.isConfirmed) {
            deleteRoomAPI(id)
              .then((res) => {
                console.log(res);
                this.$swal.fire("Xóa phòng thành công", "", "success");
                window.setTimeout(function () {
                  location.reload();
                }, 2000);
              })
              .catch((err) => {
                this.$swal.fire("Xóa phòng không thành công", "", "failed");
                console.log(err);
              });
          }
        });
    },
    roomReview(room) {
      this.getroomname = room.roomname;
      getRoomReviewAPI(room.id)
        .then((res) => {
          console.log(res);
          this.getComments = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {
    searchRooms() {
      return this.rooms.filter(
        (rooms) =>
          rooms.roomname
            .toLowerCase()
            .search(this.searchValues.roomName.toLowerCase()) != -1
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

<style scoped>
body {
  margin-top: 20px;
  background: #eee;
}

.btn {
  margin-bottom: 5px;
}

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
</style>