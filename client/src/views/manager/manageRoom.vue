<template>
  <div class="container">
    <!-- thêm phòng -->
    <div class="d-flex flex-row justify-content-end mt-2 mb-0">
      <span class="input-group-btn">
        <button
          type="button"
          class="btn btn-success text-dark"
          data-bs-toggle="modal"
          data-bs-target="#staticBackdrop1"
        >
          <img
            src="../../assets/create-icon.png"
            style="width: 3rem; height: 3rem"
          />
          Thêm phòng họp
        </button>
      </span>
    </div>
    <div class="row">
      <!-- BEGIN SEARCH RESULT -->
      <div class="col-md-12">
        <div class="grid search">
          <div class="grid-body">
            <div class="row">
              <!-- BEGIN RESULT -->
              <div class="col-md-11 mx-auto">
                <div class="text-center mb-3">
                  <h2>Quản lý phòng</h2>
                </div>
                <!-- BEGIN SEARCH INPUT -->

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
                              <b>{{ room.roomname }} </b> - Đánh giá trung bình:
                              {{ room.rating }}/10
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
                          <!-- chỉnh sửa -->
                          <div class="col-sm-1 row">
                            <button
                              type="button"
                              class="btn btn-primary"
                              data-bs-toggle="modal"
                              data-bs-target="#staticBackdrop"
                              style="padding: 0; background-color: #6666cc"
                              @click="openModalEditRoom(room)"
                            >
                              <img
                                src="../../assets/edit-icon.png"
                                style="height: 2rem; width: 2rem"
                              />
                            </button>
                            <button
                              class="btn btn-danger row-btn"
                              @click="deleteRoom(room.id)"
                              style="padding: 0"
                            >
                              <img
                                src="../../assets/junk-icon.png"
                                style="height: 2rem; width: 2rem"
                              />
                            </button>
                            <button
                              type="button"
                              class="btn btn-primary"
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
                          </div>
                          <div
                            class="modal fade"
                            id="staticBackdrop"
                            data-bs-backdrop="static"
                            data-bs-keyboard="false"
                            tabindex="-1"
                            aria-labelledby="staticBackdropLabel"
                            aria-hidden="true"
                          >
                            <!--edit modal-->
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h5
                                    class="modal-title"
                                    id="staticBackdropLabel"
                                  >
                                    Thông tin phòng họp
                                  </h5>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  <!-- modal body -->
                                  <div class="form-group">
                                    <label>Tên phòng</label>
                                    <label
                                      class="form-control form-control-lg"
                                      readonly
                                    >
                                      <!-- {{ this.roominfo.name }} -->
                                      {{ this.getroomname }}
                                    </label>
                                  </div>
                                  <div class="form-group">
                                    <label>Sức chứa </label>
                                    <input
                                      class="form-control form-control-lg"
                                      type="number"
                                      min="1"
                                      v-model="this.getroomcapacity"
                                    />
                                    <!-- {{ this.getroomcapacity }} -->
                                  </div>
                                  <div class="form-group">
                                    <label>Trang thiết bị</label>
                                    <textarea
                                      class="form-control form-control-lg"
                                      type="textarea"
                                      v-model="this.getroomfacilities"
                                    />
                                  </div>
                                  <div class="form-group">
                                    <label>Trạng thái</label>
                                    <input
                                      class="form-control form-control-lg"
                                      type="text"
                                      v-model="this.getroomstatus"
                                    />
                                  </div>
                                  <!-- end modal body -->
                                </div>
                                <div class="modal-footer">
                                  <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                  >
                                    Hủy bỏ
                                  </button>
                                  <button
                                    type="button"
                                    class="btn btn-primary"
                                    @click="editRoomInfo()"
                                  >
                                    Xác nhận
                                  </button>
                                  <!--end -->
                                </div>
                              </div>
                            </div>
                          </div>
                          <!--end edit modal-->
                          <roomReviewModal
                            :commentList="this.getComments"
                            :roomname="this.getroomname"
                          />
                        </div>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <!-- END TABLE RESULT -->
              </div>
              <roomCreateModal />
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
  editRoomAPI,
} from "@/services/room.apiServices.js";
import roomCreateModal from "@/components/ManagerComponents/roomCreateModal.vue";
import roomEditModal from "@/components/ManagerComponents/roomEditModal.vue";
import roomReviewModal from "@/components/UserServices/roomReviewModal.vue";

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
    openModalEditRoom(room) {
      console.log(room)
      this.getroomid = room.id;
      this.getroomname = room.roomname;
      this.getroomcapacity = room.capacity;
      this.getroomfacilities = room.facilities;
      this.getroomstatus = room.status;
    },
    editRoomInfo() {
      const data = {
        id: this.getroomid,
        roomname: this.getroomname,
        capacity: this.getroomcapacity,
        facilities: this.getroomfacilities,
        status: this.getroomstatus,
      };
      editRoomAPI(data)
        .then((res) => {
          console.log(res);
          this.$swal.fire(
            "Thành công!",
            "Cập nhật thông tin phòng thành công",
            "success"
          );
          window.setTimeout(function () {
            location.reload();
          }, 3000);
        })
        .catch((err) => {
          this.$swal.fire(
            "Cập nhật thông tin phòng thất bại!",
            "Các mục không được để trống",
            "failed"
          );
          console.log(err);
        });
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
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap");
.grid {
  position: relative;
  width: 100%;
  background: #fff;
  color: #666666;
  border-radius: 2px;
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
.row-btn {
  border-radius: 0;
}
.product {
  font-family: "Raleway", sans-serif;
  font-size: 1.1rem;
  border-bottom: thin gray solid;
}
</style>