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

                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Danh sách phòng"
                    v-model="searchValues.roomName"
                  />
                  <span class="input-group-btn"> </span>
                </div>

                <!-- END SEARCH INPUT -->

                <br />

                <!-- BEGIN TABLE RESULT -->
                <div class="table-responsive">
                  <table class="table table-hover">
                    <tbody>
                      <tr v-for="room in rooms" :key="room.roomname">
                        <td class="image">
                          <img src="../assets/logo.png" alt="" />
                        </td>
                        <td class="product">
                          <strong>{{ room.roomname }}</strong>
                          <br />Sức chứa: {{ room.capacity }} người <br />Trang
                          thiết bị:{{ room.facilities }} <br />Trạng thái:{{
                            room.status
                          }}
                        </td>
                        <span class="input-group-btn">
                          <button
                            class="btn btn-primary"
                            type="button"
                            v-if="room.status != 'Bảo trì'"
                          >
                            <router-link
                              :to="{
                                name: 'createMeeting',
                                params: {
                                  //roomname: room.roomname,
                                  id: room.id,
                                  //roominfo: JSON.parse(JSON.stringify(rooms)),
                                },
                              }"
                            >
                              <h5 class="card-title text-center text-dark">
                                Đặt phòng
                              </h5>
                            </router-link>
                          </button>
                        </span>
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
  method: {
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
        //localStorage.setItem("roomlist", JSON.stringify(res.data));
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