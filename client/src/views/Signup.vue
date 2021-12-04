<template>
  <div
    class="container mx-auto my-auto mt-2"
    style="heigt: 70%; width: 80%; box-shadow: 0 30px 40px rgba(0, 0, 0, 0.4)"
  >
    <div class="row" style="padding: 0">
      <div
        class="col-sm-4 text-center"
        style="background-color: #e0e0e0; padding: 0; margin: 0"
      >
        <img
          class="mb-4 img-fluid rounded mx-auto d-block"
          src="../assets/logo.png"
          alt=""
          style="width=7rem;"
        />
        <h1 class="h3 mt-5 fw-normal mb-5 mx-auto">Hãy đăng ký ở đây</h1>
        <a class="mx-auto" href="/signin" style="text-decoration: none"
          >Đã có tải khoản? Đăng nhập ngay</a
        >
        <br />
        <a class="mx-auto" href="/" style="text-decoration: none"
          >Quay về trang chủ</a
        >
      </div>
      <div
        class="col-sm-8"
        style="background-color: #b3ccff; padding: 0; margin: 0"
      >
        <form style="height: 100%" @submit="handleSubmit" action="/signup">
          <main
            class="form-signup card"
            style="background-color: var(--bg-color)"
          >
            <div class="row">
              <div class="col-sm-6">
                <p class="form-header">Họ</p>
                <input
                  type="firstname"
                  class="form-control"
                  placeholder="Your first name"
                  v-model="signupValues.firstname"
                />
              </div>

              <div class="col-sm-6">
                <p class="form-header">Tên</p>
                <input
                  type="lastname"
                  class="form-control"
                  placeholder="Your last name"
                  v-model="signupValues.lastname"
                />
              </div>
            </div>
            <div class="">
              <p class="form-header">Tên đăng nhập</p>
              <input
                type="username"
                class="form-control"
                placeholder="Your Username"
                v-model="signupValues.username"
              />
            </div>

            <div class="">
              <p class="form-header">Mật khẩu</p>
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                v-model="signupValues.password"
              />

              <div class="row">
                <div class="col-sm-4">
                  <p class="form-header">Ngày sinh</p>
                  <input
                    type="date"
                    ref="date"
                    class="form-control"
                    id="inputDate"
                    v-model="signupValues.dob"
                    v-on:keyup.enter="this.$refs.duration.focus()"
                  />
                </div>
                <div class="col-sm-8">
                  <p class="form-header">Email</p>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Your email"
                    v-model="signupValues.email"
                  />
                </div>
              </div>

              <div class=""></div>
              <p class="form-header">Số điện thoại</p>
              <div class="">
                <input
                  type="phonenumber"
                  class="form-control"
                  placeholder="Your Phone number"
                  v-model="signupValues.phone"
                />
              </div>

              <div class="">
                <p class="form-header">Địa chỉ</p>
                <input
                  type="address"
                  class="form-control"
                  placeholder="Your address"
                  v-model="signupValues.address"
                />
              </div>
            </div>
            <div class="row">
              <button class="w-25 btn btn-lg btn-primary mt-3 mx-auto">
                Đăng ký
              </button>
            </div>
            <!-- </form> -->
          </main>
        </form>
        <p>{{ errMsg }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import { registerAPI } from "@/services/user.apiServices.js";

export default {
  name: "signup",
  data() {
    return {
      signupValues: {
        firstname: "",
        lastname: "",
        email: "",
        dob: "",
        phone: "",
        address: "",
        username: "",
        password: "",
      },
      errMsg: "",
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const data = {
        firstname: this.signupValues.firstname,
        lastname: this.signupValues.lastname,
        email: this.signupValues.email,
        dob: this.signupValues.dob,
        phone: this.signupValues.phone,
        address: this.signupValues.address,
        username: this.signupValues.username,
        password: this.signupValues.password,
      };
      //console.log(data);
      //AXIOS
      registerAPI(data)
        .then((res) => {
          console.log(res);
          if (res.status < 400) {
            localStorage.setItem("accesstoken", res.headers.accesstoken);
            window.location.href = "/";
          }
        })
        .catch((err) => {
          this.errMsg = err.response.data;
          console.log(err);
        });
    },
  },
  components: {
    Nav,
  },
};
</script>

<style>
body {
  display: center;
  align-items: center;
}

.signup {
  background-color: red;
}

.form-signup {
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin: 0;
}

.form-signup .form-floating:focus-within {
  z-index: 2;
}

.form-header {
  font-weight: bold;
  font-family: $font-family-sans-serif;
}
input {
  height: 2.5rem;
  margin-bottom: 0.4rem;
}
</style>