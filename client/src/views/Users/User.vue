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
                <!-- {{ userInfo.userName }} -->
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
                <h6 class="mb-2 text-primary">Personal Details</h6>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="firstName">First Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="firstName"
                    v-model="updateFirstName"
                    placeholder="Enter First Name"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="lastName">Last Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="lastName"
                    v-model="updateLastName"
                    placeholder="Enter Last Name"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="dob">Date of birth</label>
                  <input
                    type="date"
                    class="form-control"
                    id="dob"
                    v-model="updateDob"
                    placeholder="Enter Date Of Birth"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="address">Address</label>
                  <input
                    type="url"
                    class="form-control"
                    id="address"
                    v-model="updateAddress"
                    placeholder="Enter Address"
                  />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="userName">Username</label>
                  <input
                    type="text"
                    class="form-control"
                    id="userName"
                    v-model="updateUsername"
                    placeholder="Enter User name"
                  />
                </div>
              </div>
            </div>
            <div class="row gutters">
              <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <h6 class="mt-3 mb-2 text-primary">Contacts</h6>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                <div class="form-group">
                  <label for="phoneNumber">Phone number</label>
                  <input
                    type="name"
                    class="form-control"
                    id="phoneNumber"
                    v-model="updatePhoneNumber"
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
                    v-model="updateEmail"
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
                    Cancel
                  </button>
                  <button
                    type="button"
                    id="submit"
                    name="submit"
                    class="btn btn-primary"
                    @click="submitUpdateInfo"
                  >
                    Update
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
          <p class="fieldTitle">Full name</p>
          <p style="padding-left: 2rem">
            <!-- {{ userInfo.firstName }} {{ userInfo.lastName }} -->
            {{ userInfo.firstname }} {{ userInfo.lastname }}
          </p>
        </div>
        <div class="row mb-1">
          <p class="fieldTitle">Date of birth:</p>
          <!-- <p style="padding-left: 2rem">{{ userInfo.dateOfBirth }}</p> -->
          <p style="padding-left: 2rem">{{ userInfo.dob }}</p>
        </div>
        <div class="row mb-1">
          <p class="fieldTitle">Address</p>
          <!-- <p style="padding-left: 2rem">{{ userInfo.address }}</p> -->
          <p style="padding-left: 2rem">{{ userInfo.address }}</p>
        </div>
        <div class="row mb-1">
          <p class="fieldTitle">Email</p>
          <!-- <p style="padding-left: 2rem">{{ userInfo.email }}</p> -->
          <p style="padding-left: 2rem">{{ userInfo.email }}</p>
        </div>
        <div class="row mb-1">
          <p class="fieldTitle">Phone number:</p>
          <!-- <p style="padding-left: 2rem">{{ userInfo.phoneNumber }}</p> -->
          <p style="padding-left: 2rem">{{ userInfo.phone }}</p>
          <button class="btn btn-primary w-50 mx-auto" @click="switchToUpdate">
            Update your info
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "user",
  data() {
    return {
      showInfo: true,
      // userInfo: {
      //   firstName: "Nguyen Thi Hoa",
      //   lastName: "Hue",
      //   dateOfBirth: "01/01/2000",
      //   address: "so 05,ngo 05,duong Pham Ngu Lao,tp Nam Dinh",
      //   email: "qwerty@yahoo.com",
      //   phoneNumber: "0983983983",
      //   userName: "nthhvjpro123",
      // },
      userInfo: null,
      updateInfo: {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        address: "",
        email: "",
        phoneNumber: "",
        userName: "",
      },
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
      if (this.updateFirstName != null && this.updateFirstName != "")
        this.updateInfo.firstName = this.updateFirstName;

      if (this.updateLastName != null && this.updateLastName != "")
        this.updateInfo.lastName = this.lastName;

      if (this.updateDob != null && this.updateDob != "")
        this.updateInfo.dateOfBirth = this.dateOfBirth;

      if (this.updateAddress != null && this.updateAddress != "")
        this.updateInfo.address = this.address;

      if (this.updateEmail != null && this.updateEmail != "")
        this.updateInfo.email = this.email;

      if (this.updatePhoneNumber != null && this.updatePhoneNumber != "")
        this.updateInfo.phoneNumber = this.phoneNumber;

      if (this.updateUsername != null && this.updateUsername != "")
        this.updateInfo.userName = this.userName;
      //POST
    },
  },
  component: {},
  async created() {
    axios
      .get("api/users/me", {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      })
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