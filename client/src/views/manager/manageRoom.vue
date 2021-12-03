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
                          >
                            <h5 class="card-title text-center text-dark">
                              Chỉnh sửa
                            </h5>
                          </button>
                        </span>
                        <!-- Modal -->
                        <div
                          class="modal fade"
                          id="staticBackdrop"
                          data-bs-backdrop="static"
                          data-bs-keyboard="false"
                          tabindex="-1"
                          aria-labelledby="staticBackdropLabel"
                          aria-hidden="true"
                        >
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
                                    {{ room.roomname }}
                                  </label>
                                </div>
                                <div class="form-group">
                                  <label>Sức chứa</label>
                                  <input
                                    class="form-control form-control-lg"
                                    type="number"
                                    min="1"
                                    v-model="room.capacity"
                                  />
                                </div>
                                <div class="form-group">
                                  <label>Trang thiết bị</label>
                                  <textarea
                                    class="form-control form-control-lg"
                                    type="textarea"
                                    v-model="room.facilities"
                                  />
                                </div>
                                <div class="form-group">
                                  <label>Trạng thái</label>
                                  <input
                                    class="form-control form-control-lg"
                                    type="text"
                                    v-model="room.status"
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
                                <button type="button" class="btn btn-primary">
                                  Xác nhận
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- End Modal -->
                        <!-- end chỉnh sửa -->
                        <span class="input-group-btn">
                          <button type="button" class="btn btn-danger">
                            <h5 class="card-title text-center text-dark">
                              Xóa
                            </h5>
                          </button>
                        </span>
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
              <div
                class="modal fade"
                id="staticBackdrop1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">
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
                        <input
                          class="form-control form-control-lg"
                          type="text"
                        />
                      </div>
                      <div class="form-group">
                        <label>Sức chứa</label>
                        <input
                          class="form-control form-control-lg"
                          type="number"
                          min="1"
                        />
                      </div>
                      <div class="form-group">
                        <label>Trang thiết bị</label>
                        <textarea
                          class="form-control form-control-lg"
                          type="textarea"
                        />
                      </div>
                      <div class="form-group">
                        <label>Trạng thái</label>
                        <input
                          class="form-control form-control-lg"
                          type="text"
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
                      <button type="button" class="btn btn-primary">
                        Xác nhận
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
import { getRoomListAPI } from "@/services/room.apiServices.js";

export default {
  name: "manageRoom",
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