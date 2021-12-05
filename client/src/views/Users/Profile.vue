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
      <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12 border border-5">
        <div class="row mb-1">
          <p class="fieldTitle">Tên đầy đủ</p>
          <p style="padding-left: 2rem">
            <!-- {{ userInfo.firstName }} {{ userInfo.lastName }} -->
            {{ userInfo.firstname }} {{ userInfo.lastname }}
          </p>
        </div>
        <div class="row mb-1">
          <p class="fieldTitle">Ngày sinh:</p>
          <!-- <p style="padding-left: 2rem">{{ userInfo.dateOfBirth }}</p> -->
          <p style="padding-left: 2rem">{{ userInfo.dob }}</p>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAnotherUserInfoAPI } from "@/services/user.apiServices.js";

export default {
  name: "profile",
  data() {
    return {
      userInfo: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        address: "",
        email: "",
        phoneNumber: "",
      },
    };
  },
  methods: {},
  async created() {
    const userId = 11;
    getAnotherUserInfoAPI(userId)
      .then((res) => {
        console.log(res);
        this.userInfo = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.fieldTitle {
  font-weight: bold;
  color: gray;
}
</style>

