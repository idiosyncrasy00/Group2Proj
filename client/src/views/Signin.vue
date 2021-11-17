<template>
  <!-- <slot :getUsername="signinValues.username" /> -->
  <div id="signin" style="background-color: #ccccff">
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
            Sign in to Meeting Manage
          </h4>
        </div>
        <div class="card login-card" style="border">
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
            <label for="floatingInput">Username</label>
          </div>
          <div
            class="form-floating"
            style="padding-left: 8px; padding-right: 8px; padding-bottom: 5px"
          >
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
              v-model="signinValues.password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
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
            "
            style="background-color: #38c75c; margin-bottom: 5px"
          >
            Sign in
          </button>
        </div>
        <!--Do some css with err msg-->
        <p style="color: red">{{ errorMsg }}</p>
        <p class="mt-5 mb-2 text-muted">&copy; 2021–</p>
        <!-- </form> -->
      </main>
    </form>
  </div>
</template>

<script>
import axios from "axios";
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
      //const res = await axios.post("login", data);
      //AXIOS
      axios
        .post("api/users/login", data)
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
    },
  },
  components: {
    axios,
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
  padding: 10px;
  width: 100%;
  background-color: #f7f7f7;
  margin: 0 auto 10px;
  border-radius: 2px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
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
</style>