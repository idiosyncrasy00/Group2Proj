<template>
  <div class="container">
    <!-- <div class="row"> -->
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title text-uppercase mb-0">Danh sách cuộc họp</h5>
        </div>
        <div class="table-responsive">
          <table class="table no-wrap user-table mb-0">
            <thead>
              <tr>
                <th scope="col" class="border-0 text-uppercase font-medium">
                  Mã phòng
                </th>
                <th scope="col" class="border-0 text-uppercase font-medium">
                  Mã cuộc họp
                </th>
                <th scope="col" class="border-0 text-uppercase font-medium">
                  Ngày tổ chức
                </th>
                <th scope="col" class="border-0 text-uppercase font-medium">
                  Thời gian bắt đầu
                </th>
                <th scope="col" class="border-0 text-uppercase font-medium">
                  Thời gian họp
                </th>
                <th scope="col" class="border-0 text-uppercase font-medium">
                  Tên cuộc họp
                </th>
                <th scope="col" class="border-0 text-uppercase font-medium">
                  Chỉnh sửa
                </th>
                <th scope="col" class="border-0 text-uppercase font-medium">
                  Xóa
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="meeting in meetings" :key="meeting.id">
                <td class="pl-4">{{ meeting.roomid }}</td>
                <td>
                  <span class="text-muted">{{ meeting.id }}</span>
                </td>
                <td>
                  <span class="text-muted">{{ meeting.reserveddate }}</span>
                </td>
                <td>
                  <span class="text-muted">{{ meeting.startingtime }} giờ</span
                  ><br />
                </td>
                <td>
                  <span class="text-muted">{{ meeting.during }} giờ</span>
                </td>
                <td>
                  <span class="text-muted">{{ meeting.title }}</span>
                </td>
                <td>
                  <button class="btn btn-danger" type="button">
                    <router-link
                      :to="{
                        name: 'editMeeting',
                        params: {
                          roomid: meeting.roomid,
                          meetingid: meeting.id,
                        },
                      }"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        class="bi bi-pen"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"
                        />
                      </svg>
                    </router-link>
                  </button>
                </td>
                <td>
                  <button
                    class="btn btn-danger"
                    type="button"
                    @click="deleteMeeting()"
                    v-bind:id="`${meeting.id}`"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script>
//import store from "@/store/index.js";
//import axios from "axios";
//deleteMeetingAPI
import { getMeetingListAPI, } from "@/services/meeting.apiServices.js";
export default {
  name: "admin",
  data() {
    return {
      getMeetingID: "",
      meetings: [
        // {
        //   roomid: 1,
        //   id: 1,
        //   reserveddate: "2021-01-01",
        //   startingtime: 7,
        //   during: 2,
        //   title: "Họp cuối năm",
        // },
        // {
        //   roomid: 3,
        //   id: 4,
        //   reserveddate: "2021-02-01",
        //   startingtime: 6,
        //   during: 2,
        //   title: "Họp tổ dân phố",
        // },
      ],
    };
  },
  methods: {
    deleteMeeting() {
      this.$swal.fire("Good job!", "Huy cuoc hop thanh cong", "success");
      //deleteMeetingAPI()
      //this.$refs.`${meeting.id}`.innerText = 12'
      //alert(this.$refs.`${meeting.id}`.innerText);
    },
  },
  async created() {
    //this.meeting = store.getMeetingsAsHost();
    getMeetingListAPI()
      .then((res) => {
        console.log(res);
        this.meetings = res.data;
        //localStorage.setItem("meetingsInfoAsHost", res.data);
        //this.rooms = res.data;
        //this.userInfo = res.data;
      })
      .catch((err) => {
        console.log(err);
        //alert("Tạo cuộc họp thất bại");
      });
  },
};
</script>

<style>
body {
  background: #edf1f5;
  margin-top: 20px;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent;
  border-radius: 0;
}
.btn-circle.btn-lg,
.btn-group-lg > .btn-circle.btn {
  width: 50px;
  height: 50px;
  padding: 14px 15px;
  font-size: 18px;
  line-height: 23px;
}
.text-muted {
  color: #8898aa !important;
}
[type="button"]:not(:disabled),
[type="reset"]:not(:disabled),
[type="submit"]:not(:disabled),
button:not(:disabled) {
  cursor: pointer;
}
.btn-circle {
  border-radius: 100%;
  width: 40px;
  height: 40px;
  padding: 10px;
}
.user-table tbody tr .category-select {
  max-width: 150px;
  border-radius: 20px;
}
</style>