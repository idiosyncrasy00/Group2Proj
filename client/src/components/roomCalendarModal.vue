<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Lịch các cuộc họp của {{ roomname }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- Modal body 1-->
          <input type="date" v-model="getDate" />
          <button type="button" class="btn btn-sm" @click="showTime()">
            Chọn
          </button>
          <hr />
          <div class="table-responsive">
            <table class="table table-bordered text-center center">
              <thead>
                <tr class="bg-light-gray">
                  <th class="text-uppercase">Thời gian</th>
                  <th class="text-uppercase">Cuộc họp</th>
                </tr>
              </thead>
              <tbody v-for="meeting in meetingList" :key="meeting.id">
                <tr>
                  <td class="align-middle">
                    Từ <b>{{ meeting.startingtime }} giờ</b> đến
                    <b>{{ meeting.startingtime + meeting.during }} giờ</b>
                  </td>
                  <td class="align-middle">
                    Không có cuộc họp nào đang diễn ra!
                  </td>
                  <td>
                    <div class="margin-10px-top font-size14">
                      {{ meeting.admin.adminname }}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- end modal body 1 -->
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            @click="closeModal()"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Button trigger modal -->
</template>
<script>
import {
  // getRoomListAPI,
  // getRoomReviewAPI,
  getMeetingsInARoomAPI,
  //postReviewAPI,
} from "@/services/room.apiServices.js";

export default {
  inheritAttrs: false,
  props: ["roomname"],
  data() {
    return {
      isAppeared: false,
      getDate: "",
      meetingList: "",
      timeList: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    };
  },
  methods: {
    showTime() {
      console.log(this.getDate);
      //API query
      getMeetingsInARoomAPI(this.roomname, this.getDate)
        .then((res) => {
          console.log(res);
          this.meetingList = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    closeModal() {
      this.getDate = "";
      this.meetingList = "";
    },
  },
};
</script>
