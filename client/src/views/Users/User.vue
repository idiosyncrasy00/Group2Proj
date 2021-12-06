<template>
  <div class="container">
    <div class="row mt-5">
      <div
        class="card card-inverse"
        style="background-color: var(--bg-color)"
      ></div>
    </div>
    <div class="row">
      <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12 border border-5">
        <div class="card-body">
          <div class="account-settings">
            <div class="user-profile">
              <div class="user-avatar">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  alt="Maxwell Admin"
                  class="w-100 h-50;"
                />
              </div>
              <h5 class="user-name text-center mt-3">
                {{ userInfo.username }}
              </h5>
              <h6 class="user-email text-center mt-3">{{ userInfo.email }}</h6>
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 border border-5"
        v-show="!this.showInfo"
        id="editInfo"
      >
        <div class="h-100">
          <div class="card-body">
            <div class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 class="mb-2 text-primary">Thông tin cá nhân</h6>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="firstName">Họ</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    v-model="this.userInfo.lastname"
                    placeholder="Enter First Name"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="lastName">Tên</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    v-model="this.userInfo.firstname"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="dob">Ngày sinh</label>
                  <input
                    type="date"
                    class="form-control"
                    id="dob"
                    v-model="this.userInfo.dob"
                    placeholder="Enter Date Of Birth"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="address">Địa chỉ</label>
                  <input
                    type="url"
                    class="form-control"
                    id="address"
                    v-model="this.userInfo.address"
                    placeholder="Enter Address"
                  />
                </div>
              </div>
            </div>
            <div class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 class="mt-3 mb-2 text-primary">Liên hệ</h6>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="phoneNumber">Số điện thoại</label>
                  <input
                    type="name"
                    class="form-control"
                    id="phoneNumber"
                    v-model="this.userInfo.phone"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="email">Email</label>
                  <input
                    type="name"
                    class="form-control"
                    id="email"
                    v-model="this.userInfo.email"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
            </div>
            <div class="row gutters" style="padding-top: 5%">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div class="text-right">
                  <button
                    type="button"
                    id="submit"
                    name="submit"
                    class="btn btn-secondary"
                    style="margin-right: 2%"
                    @click="switchToInfo"
                  >
                    Thoát
                  </button>
                  <button
                    type="button"
                    id="submit"
                    name="submit"
                    class="btn btn-primary"
                    @click="submitUpdateInfo"
                  >
                    Cập nhật
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 border border-5"
        v-show="this.showInfo"
        id="showInfo"
      >
        <div class="row mb-1">
          <p class="fieldTitle">Tên đầy đủ</p>
          <p style="padding-left: 2rem">
            <!-- {{ userInfo.firstName }} {{ userInfo.lastName }} -->
            {{ userInfo.lastname }} {{ userInfo.firstname }}
          </p>
        </div>
        <div class="row mb-1">
          <p class="fieldTitle">Ngày sinh:</p>
          <!-- <p style="padding-left: 2rem">{{ userInfo.dateOfBirth }}</p> -->
          <p style="padding-left: 2rem">{{ this.dob }}</p>
        </div>
        <div class="row mb-1">
          <p class="fieldTitle">Địa chỉ</p>
          <!-- <p style="padding-left: 2rem">{{ userInfo.address }}</p> -->
          <p style="padding-left: 2rem">{{ userInfo.address }}</p>
        </div>
        <div class="row mb-1">
          <p class="fieldTitle">Email</p>
          <!-- <p style="padding-left: 2rem">{{ userInfo.email }}</p> -->
          <p style="padding-left: 2rem">{{ userInfo.email }}</p>
        </div>
        <div class="row mb-1">
          <p class="fieldTitle">Số điện thoại:</p>
          <!-- <p style="padding-left: 2rem">{{ userInfo.phoneNumber }}</p> -->
          <p style="padding-left: 2rem">{{ userInfo.phone }}</p>
          <button class="btn btn-primary w-50 mx-auto" @click="switchToUpdate">
            Cập nhật
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  getUserInfo,
  formatDate
} from "@/store/index.js";
//import formatDate from "@/store/dateFormat.js";
import {
  updateUserInfoAPI,
  //getUserInfoAPI,
} from "@/services/user.apiServices.js";

export default {
  name: "user",
  data() {
    return {
      // getUser: this.$route.params.getUser,
      dob: "",
      showInfo: true,
      userInfo: "",
    };
  },
  methods: {
    getUsetInfo() {
      //GET
      this.updateInfo = this.userInfo;
    },
    switchToInfo() {
      this.showInfo = true;
    },
    switchToUpdate() {
      this.showInfo = false;
    },
    submitUpdateInfo() {
      //PUT
      var updatedData = {
        firstname: this.userInfo.firstname,
        lastname: this.userInfo.lastname,
        email: this.userInfo.email,
        dob: this.userInfo.dob,
        phone: this.userInfo.phone, // not required
        address: this.userInfo.address, // not required
      };
      updateUserInfoAPI(updatedData)
        .then((res) => {
          console.log(res);
          //this.$swal.fire("Good job!", "Cập nhật thông tin cá nhân thành công", "success");
          this.$swal.fire({
            icon: "success",
            title: "Thành công",
            text: "Cập nhật thông tin cá nhân thành công",
            // footer: '<a href="">Why do I have this issue?</a>',
          });
          window.setTimeout(function () {
            location.reload();
          }, 3000);
        })
        .catch((err) => {
          console.log(err);
          this.$swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Cập nhật thông tin cá nhân thất bại",
            // footer: '<a href="">Why do I have this issue?</a>',
          });
        });
    },
  },
  component: {},
  async created() {
    this.userInfo = getUserInfo();
    this.dob = formatDate(getUserInfo().dob);
  },
};
</script>

<style>
.fieldTitle {
  font-weight: bold;
  color: gray;
}
</style>