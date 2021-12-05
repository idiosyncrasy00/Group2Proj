<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-body text-center">
            <h5 class="card-title text-uppercase mb-2 mt-1">
              Danh sách cuộc họp
            </h5>
          </div>
          <div class="table-responsive">
            <table class="table no-wrap user-table mb-0">
              <thead>
                <tr>
                  <th scope="col" class="border-0 text-uppercase font-medium">
                    Tên phòng
                  </th>
                  <th scope="col" class="border-0 text-uppercase font-medium">
                    Tên cuộc họp
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
                    Rời cuộc họp
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="meeting in meetings" :key="meeting.id">
                  <td class="pl-4">{{ meeting.room.roomname }}</td>
                  <td>
                  <span>{{ meeting.title }}</span>
                  </td>
                  <td>
                    <span>{{ meeting.id }}</span>
                  </td>
                  <td>
                    <span>{{ meeting.reserveddate }}</span>
                  </td>
                  <td>
                    <span>{{ meeting.startingtime }} giờ</span
                    ><br />
                  </td>
                  <td>
                    <span>{{ meeting.during }} giờ</span>
                  </td>
                  <td>
                    <button
                      class="btn btn-danger"
                      type="button"
                      @click="leaveMeeting(meeting.id)"
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
    </div>
  </div>
</template>

<script>
import {
  getInvitedMeetingsListAPI,
  participantLeavesMeetingAPI,
} from "@/services/meeting.apiServices.js";
import { formatDate } from "@/store/index.js";

export default {
  name: "participant",
  data() {
    return {
      meetings: [],
    };
  },
  methods: {
    leaveMeeting(id) {
      this.$swal
        .fire({
          title: "Bạn muốn rời cuộc họp này chứ?",
          showDenyButton: true,
          confirmButtonText: "Có",
          denyButtonText: `Không`,
        })
        .then((result) => {
          if (result.isConfirmed) {
            participantLeavesMeetingAPI(id)
              .then((res) => {
                console.log(res);
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
              });
            this.$swal.fire("Rời cuộc họp thành công", "", "success");
            window.setTimeout(function () {
              location.reload();
            }, 2000);
          }
        });
    },
  },
  async created() {
    getInvitedMeetingsListAPI()
      .then((res) => {
        this.meetings = res.data;
        for (var i = 0; i < this.meetings.length; i++) {
          this.meetings[i].reserveddate = formatDate(
            this.meetings[i].reserveddate
          );
        }
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss" scoped>
$table-bg-color:#505050	;
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

.table-responsive {
  border-radius: 1rem;
  border-collapse: collapse;
  font-size: 0.9em;
  font-family: sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.table-responsive thead tr {
  background-color: $table-bg-color;
  color: #ffffff;
  text-align: left;
}
.table-responsive tbody tr {
  border-bottom: thin solid #dddddd;
}

.table-responsive tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.table-responsive tbody tr:last-of-type {
  border-bottom: 2px solid $table-bg-color;
}
</style>