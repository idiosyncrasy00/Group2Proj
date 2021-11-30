<template>
  <div class="col-md-6 offset-md-3">
    <span class="anchor" id="formChangePassword"></span>
    <hr class="mb-5" />

    <!-- form card change password -->
    <div class="card card-outline-secondary">
      <div class="card-header">
        <h3 class="mb-0">Doi mat khau</h3>
      </div>
      <div class="card-body">
        <div class="form-group">
          <label for="inputPasswordOld">Mat khau hien tai</label>
          <input
            type="password"
            class="form-control"
            id="inputPasswordOld"
            required=""
            v-model="oldpassword"
          />
        </div>
        <div class="form-group">
          <label for="inputPasswordNew">Mat khau moi</label>
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
          <label for="inputPasswordNewVerify">Xac nhan mat khau moi</label>
          <input
            type="password"
            class="form-control"
            id="inputPasswordNewVerify"
            required=""
            v-model="confirmedpassword"
          />
          <span class="form-text small text-muted">
            Nhap mat khau moi de xac nhan lai
          </span>
        </div>
        <div class="form-group">
          <button
            type="submit"
            class="btn btn-success btn-lg float-right"
            @click="updatePassword"
          >
            Luu thong tin
          </button>
        </div>
        {{ errMsg }}
      </div>
    </div>
    <!-- /form card change password -->
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

<style scoped>
</style>
