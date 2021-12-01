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
                            @click="roomBooking(room)"
                          >
                            <h5 class="card-title text-center text-dark">
                              Đặt phòng
                            </h5>
                          </button>
                        </span>
                        <!-- Button trigger modal -->
<span class="input-group-btn">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <h5 class="card-title text-center text-dark"> Lịch đặt phòng </h5>
</button>
</span>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Lịch đặt phòng</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- Modal body 1-->
        <input type="date" v-model="time1" v-on:click="showTime()">
        <hr>
        <div class="table-responsive">
                    <table class="table table-bordered text-center center">
                        <thead>
                            <tr class="bg-light-gray">
                                <th class="text-uppercase">Thời gian
                                </th>
                                <th class="text-uppercase">Cuộc họp</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                                <td class="align-middle">08:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">09:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">10:00</td>
                                <td>
                                    <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Trống</span>
                                    
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">11:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">12:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">13:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">14:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">15:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">16:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">17:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">18:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">19:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">20:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">21:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
      </div>
      <!-- end modal body 1 -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
<!-- Button trigger modal -->

<span class="input-group-btn">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal1">
  <h5 class="card-title text-center text-dark"> Đánh giá </h5>
</button>
</span>
<!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Đánh giá</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- modal body 2-->
        <div class="container">
<div class="row bootstrap">
    <div class="col-md-12 col-sm-12">
        <div class="comment-wrapper">
            <div class="panel panel-info">
                <div class="panel-body">
                    
                    <ul class="media-list">
                        <li class="media">
                            
                            <div class="media-body">
                                <span class="text-muted pull-right">
                                  <strong class="text-success">User A</strong> -
                                    <small class="text-muted">01/12/2021</small>
                                </span>
                                
                                <p>
                                    Tốt
                                </p>
                            </div>
                        </li>
                        
                        <li class="media">
                            
                            <div class="media-body">
                                <span class="text-muted pull-right">
                                  <strong class="text-success">User A</strong> -
                                    <small class="text-muted">01/12/2021</small>
                                </span>
                                
                                <p>
                                    Rộng
                                </p>
                            </div>
                        </li>
                        <li class="media">
                            
                            <div class="media-body">
                                <span class="text-muted pull-right">
                                  <strong class="text-success">User A</strong> -
                                    <small class="text-muted">01/12/2021</small>
                                </span>
                                
                                <p>
                                    Tốt
                                </p>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>

    </div>
</div>
</div>

        <!--end modal body -->
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
      
      
      <!--End modal 2-->
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
<span class="input-group-btn">
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
  <h5 class="card-title text-center text-dark"> Xem lịch tất cả các phòng </h5>
</button>
</span>
<!-- modal 3 -->
<div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Lịch đặt phòng</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <!-- modal body 3-->
        <input type="date" v-model="time1" v-on:click="showTime()">
        <hr>
        <div class="table-responsive">
                    <table class="table table-bordered text-center center">
                        <thead>
                            <tr class="bg-light-gray">
                                <th class="text-uppercase">Thời gian
                                </th>
                                <th class="text-uppercase">Phòng 1</th>
                                <th class="text-uppercase">Phòng 2</th>
                                <th class="text-uppercase">Phòng 3</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                          <tr>
                                <td class="align-middle">08:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">09:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                            </tr>
                            <tr>
                                <td class="align-middle">10:00</td>
                                <td>
                                    <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Trống</span>
                                    
                                    
                                </td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                            </tr>
                            <tr>
                                <td class="align-middle">11:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                <td>
                                    <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Trống</span>
                                    
                                    
                                </td>
                                <td>
                                    <span class="bg-sky padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Trống</span>
                                    
                                    
                                </td>
                                
                            </tr>
                            <tr>
                                <td class="align-middle">12:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">13:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">14:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">15:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">16:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">17:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">18:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">19:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">20:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                            <tr>
                                <td class="align-middle">21:00</td>
                                <td>
                                    <span class="bg-gray padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13">Meeting 2</span>
                                    <div class="margin-10px-top font-size14">Nguyen Van A</div>
                                    
                                </td>
                                
                                
                            </tr>
                        </tbody>
                    </table>
                </div>
      </div>
      <!-- end modal body 3 -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
    <!-- end modal 3 -->
  </div>
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
          rooms.roomname.toLowerCase().search(this.searchValues.roomName.toLowerCase()) != -1
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

.center {
  margin-left: auto;
  margin-right: auto;
}
body{
    margin-top:20px;
}
.bg-light-gray {
    background-color: #f7f7f7;
}
.table-bordered thead td, .table-bordered thead th {
    border-bottom-width: 2px;
}
.table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
}
.table-bordered td, .table-bordered th {
    border: 1px solid #dee2e6;
}
.bg-sky {
    background-color: deepskyblue
}
.bg-gray {
    background-color: gray
}
.bg-orange {
    background-color: #e95601
}

.bg-green {
    background-color: #5bbd2a
}

.bg-yellow {
    background-color: #f0d001
}

.bg-pink {
    background-color: #ff48a4
}

.bg-purple {
    background-color: #9d60ff
}

.bg-lightred {
    background-color: #ff5722
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


</style>