<template>
  <!-- <slot :getUsername="signinValues.username" /> -->
  <div
    class="container mx-auto my-auto mt-4"
    style="height: 70%; width: 80%; box-shadow: 0 30px 40px rgba(0, 0, 0, 0.4)"
  >
    <div class="row" style="padding: 0">
      <div
        class="col-sm-6"
        style="background-color: #b3ccff; padding: 0; margin: 0"
      >
        <img
          src="../assets/meeting-signin.jpg"
          style="height: 100%; width: 100%"
        />
      </div>
      <div
        class="col-sm-6"
        style="background-color: #b3ccff; padding: 0; margin: 0"
      >
        <div
          id="signin"
          style="background-color: #ccccff; padding: 0; margin: 0"
        >
          <form @submit.prevent="handleSubmit" class="mask">
            <main class="form-signin">
              <img
                class="mb-4 pt-5 img-fluid rounded mx-auto d-block"
                src="../assets/logo.png"
                alt=""
                width="80"
                height="80"
              />
              <div class="row">
                <h4
                  class="col-sm-12 mb-3 fw-normal mx-auto text-center"
                  style="padding-bottom: 10px"
                >
                  Chào mừng bạn đến với website quản lý phòng họp
                </h4>
              </div>
              <div class="card login-card">
                <div
                  class="form-floating"
                  style="
                    padding-top: 8px;
                    padding-left: 8px;
                    padding-right: 8px;
                    padding-bottom: 5px;
                  "
                >
                  <input
                    type="username"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Username"
                    v-model="signinValues.username"
                  />
                  <label for="floatingInput">Tên đăng nhập</label>
                </div>
                <div
                  class="form-floating"
                  style="
                    padding-left: 8px;
                    padding-right: 8px;
                    padding-bottom: 5px;
                  "
                >
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    v-model="signinValues.password"
                  />
                  <label for="floatingPassword">Mật khẩu</label>
                </div>

                <div class="checkbox mb-3">
                  <label>
                    <input type="checkbox" value="remember-me" /> Ghi nhớ
                  </label>
                </div>
                <button
                  class="
                    group
                    relative
                    w-full
                    flex
                    justify-center
                    py-2
                    px-4
                    border border-transparent
                    text-sm
                    font-medium
                    rounded-md
                    text-white
                    signin-button
                  "
                  style="background-color: #38c75c; margin-bottom: 5px"
                >
                  Đăng nhập
                </button>
                <div class="row text-center mt-2">
                  <a href="/signup" style="text-decoration: none"
                    >Chưa có tài khoản? Tạo một cái ngay</a
                  >
                  <a href="/" style="text-decoration: none"
                    >Quay trở về trang chủ</a
                  >
                </div>
              </div>
              <!--Do some css with err msg-->
              <p style="color: red">{{ errorMsg }}</p>
              <p class="mt-5 mb-2 text-muted">&copy; 2021–</p>
              <!-- </form> -->
            </main>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios from "axios";
import { loginAPI } from "@/services/user.apiServices.js";
//import apiService from "@/services/apiServices";

export default {
  name: "signin",
  data() {
    return {
      signinValues: {
        username: "",
        password: "",
      },
      errorMsg: "",
    };
  },
  methods: {
    async handleSubmit() {
      const data = {
        username: this.signinValues.username,
        password: this.signinValues.password,
      };
      //AXIOS
      loginAPI(data)
        .then((res) => {
          console.log(res);
          if (res.status != 400) {
            localStorage.setItem("accesstoken", res.headers.accesstoken);
            console.log(res.headers.accesstoken);
            window.location.href = "/";
            //this.$router.push("/");
          }
        })
        .catch((err) => {
          this.errorMsg = "Invalid username or password";
          console.log(err);
        });
      // axios
      //   .post("api/users/login", data)
      //   .then((res) => {
      //     console.log(res);
      //     if (res.status != 400) {
      //       localStorage.setItem("accesstoken", res.headers.accesstoken);
      //       console.log(res.headers.accesstoken);
      //       window.location.href = "/";
      //       //this.$router.push("/");
      //     }
      //   })
      //   .catch((err) => {
      //     this.errorMsg = "Invalid username or password";
      //     console.log(err);
      //   });
    },
  },
  components: {
    //axios,
  },
};
</script>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

html,
body {
  height: 100%;
}

body {
  display: center;
  align-items: center;
  padding-bottom: 40px;
}
#signin {
  height: 100%;
  width: 100%;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: -5px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.login-card {
  width: 100%;
  background-color: transparent;
  border: none;
  overflow: hidden;
}
.form-signin h4 {
  font-weight: 100;
  text-align: center;
  font-size: 1.7em;
}
.login-card input[type="username"]:hover,
input[type="password"]:hover {
  border: 2px solid #b9b9b9;
  border-top: 1px solid #a0a0a0;
  -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
}
.signin-button {
  border-radius: 4rem;
}
</style>