<template>
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
            <label class="form-control form-control-lg" readonly>
              <!-- {{ this.roominfo.name }} -->
              {{ this.roomname }}
            </label>
          </div>
          <div class="form-group">
            <label>Sức chứa </label>
            <input
              class="form-control form-control-lg"
              type="number"
              min="1"
            />
            {{this.roomcapacity}}
          </div>
          <div class="form-group">
            <label>Trang thiết bị</label>
            <textarea
              class="form-control form-control-lg"
              type="textarea"
              v-model="facilities"
            />
          </div>
          <div class="form-group">
            <label>Trạng thái</label>
            <input
              class="form-control form-control-lg"
              type="text"
              v-model="status"
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
          <button type="button" class="btn btn-primary" @click="editRoomInfo()">
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- End Modal -->
  <!-- end chỉnh sửa -->
</template>

<script>
import { editRoomAPI } from "@/services/room.apiServices.js";
export default {
  inheritAttrs: false,
  //props: ["roomid", "roomname", "roomcapacity", "roomfacilities", "roomstatus"],
  props: ["roomid", "roomname", "roomcapacity", "roomfacilities", "roomstatus"],
  data() {
    return {
      // roominfo: {
      //   capacity: this.roomcapacity,
      //   facilities: this.roomfacilities,
      //   status: this.roomstatus,
      // },
      capacity: "",
      facilities: "",
      status: "",
    };
  },
  methods: {
    editRoomInfo() {
      const data = {
        id: this.roomid,
        roomname: this.roomname,
        capacity: this.roominfo.capacity,
        facilities: this.roominfo.facilities,
        status: this.roominfo.status,
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
            "Thất bại!",
            "Cập nhật thông tin phòng thất bại",
            "failed"
          );
          console.log(err);
        });
    },
    // exitModal() {
    //   localStorage.removeItem("roominfo");
    // },
  },
  // mounted() {
  //   this.roominfo.capacity = this.roomcapacity;
  //   this.roominfo.facilities = this.roomfacilities;
  // },
  // watch: {
  //   capacity: () => this.$emit('update:capacity', value),
  //   //this.roominfo.capacity: value => this.$emit('update:number1', value)
  // },
  // computed: {
  //   computedCapacity: {
  //     get() {
  //       return this.roomcapacity;
  //     },
  //     set(value) {
  //       this.$emit("update:roomcapacity", value);
  //     },
  //   },
  // },
};
</script>
