<template>
  <div class="col-md-4 mx-auto">
    <span class="anchor" id="formChangePassword"></span>
    <div class="mb-5" />

    <!-- form card change password -->
    <div class="card card-outline-secondary">
      <div class="card-header text-center">
        <h3 class="mb-0">Đổi mật khẩu &#9919;</h3>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label for="inputPasswordOld">Mật khẩu hiện tại</label>
          <input
            type="password"
            class="form-control"
            id="inputPasswordOld"
            required=""
            v-model="oldpassword"
          />
        </div>
        <div class="form-group">
          <label for="inputPasswordNew">Mật khẩu mới</label>
          <input
            type="password"
            class="form-control"
            id="inputPasswordNew"
            required=""
            v-model="newpassword"
          />
          <!-- <span class="form-text small text-muted">
              The password must be 8-20 characters, and must
              <em>not</em> contain spaces.
            </span> -->
        </div>
        <div class="form-group">
          <label for="inputPasswordNewVerify">Xác nhận mật khẩu mới</label>
					<div class="form-text small text-muted">
            Nhập lại mật khẩu mới để xác nhận
          </div>
          <input
            type="password"
            class="form-control"
            id="inputPasswordNewVerify"
            required=""
            v-model="confirmedpassword"
          />
          
        </div>
        <div class="form-group text-center">
          <button
            type="submit"
            class="btn btn-primary float-right"
            @click="updatePassword"
          >
            Lưu thông tin
          </button>
        </div>
        {{ errMsg }}
      </div>
    </div>
  </div>
</template>

<script>
import { updatePasswordAPI } from "@/services/user.apiServices.js";
export default {
  name: "changePassword",
  data() {
    return {
      errMsg: "",
      oldpassword: "",
      newpassword: "",
      confirmedpassword: "",
    };
  },
  methods: {
    updatePassword() {
      const data = {
        oldpassword: this.oldpassword,
        password: this.newpassword,
      };
      updatePasswordAPI(data)
        .then((res) => {
          this.$swal.fire(
            "Good job!",
            "Cap nhat mat khau thanh cong",
            "success"
          );
          window.setTimeout(function () {
            location.href = "/";
          }, 3000);
          console.log(res);
        })
        .catch((err) => {
          this.$swal.fire("Failed!", "Cap nhat mat khau that bai", "error");
          console.log(err);
        });
      if (this.newpassword != this.confirmedpassword) {
        this.$swal.fire(
          "Failed!",
          "Mat khau xac nhan khong duoc trung voi mat khau moi",
          "error"
        );
      }
    },
  },
};
</script>

<style>
input{
	margin-bottom: 1rem;
}
label{
	font-size: 1em;
  font-family: sans-serif;
  font-weight: bold;
}
</style>
