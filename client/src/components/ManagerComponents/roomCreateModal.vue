<template>
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
          <h5 class="modal-title" id="staticBackdropLabel">Thêm phòng họp</h5>
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
              v-model="roominfo.roomname"
            />
          </div>
          <div class="form-group">
            <label>Sức chứa</label>
            <input
              class="form-control form-control-lg"
              type="number"
              min="1"
              v-model="roominfo.capacity"
            />
          </div>
          <div class="form-group">
            <label>Trang thiết bị</label>
            <textarea
              class="form-control form-control-lg"
              type="textarea"
              v-model="roominfo.facilities"
            />
          </div>
          <div class="form-group">
            <label>Trạng thái</label>
            <input
              class="form-control form-control-lg"
              type="text"
              v-model="roominfo.status"
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
          <button type="button" class="btn btn-primary" @click="createARoom()">
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createRoomAPI } from "@/services/room.apiServices.js";
export default {
  inheritAttrs: false,
  data() {
    return {
      roominfo: {
        roomname: "",
        capacity: "",
        facilities: "",
        status: "",
      },
    };
  },
  methods: {
    createARoom() {
      createRoomAPI(this.roominfo)
        .then((res) => {
          console.log(res);
          this.$swal.fire("Thành công!", "Tạo phòng thành công", "success");
          window.setTimeout(function () {
            location.reload();
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 403) {
            this.$swal.fire(
              "Thất bại!",
              "Các mục không được để trống",
              "failed"
            );
          }
        });
    },
  },
};
</script>
