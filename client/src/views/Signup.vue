<template>
  <div>
    <form class="mt-5" @submit="handleSubmit" action="/signup">
      <!--<h1>This is the signup page</h1>-->
      <main class="form-signup card" style="background-color: var(--bg-color)">
        <!-- <form action="/"> -->
        <img
          class="mb-4 img-fluid rounded mx-auto d-block"
          src="../assets/logo.png"
          alt=""
          width="70"
          height="70"
        />
        <h1 class="h3 fw-normal mx-auto">Please sign up here</h1>
				<a class = "mx-auto mb-5" href="/signin" style="text-decoration:none;">Already have an account? Sign in now</a>
        <div class="row">
          <div class="col-sm-6">
            <p class="form-header">First name</p>
            <input
              type="firstname"
              class="form-control"
              placeholder="Your first name"
              v-model="signupValues.firstname"
            />
          </div>

          <div class="col-sm-6">
            <p class="form-header">Last name</p>
            <input
              type="lastname"
              class="form-control"
              placeholder="Your last name"
              v-model="signupValues.lastname"
            />
          </div>
        </div>
        <div class="">
          <p class="form-header">Username</p>
          <input
            type="username"
            class="form-control"
            placeholder="Your Username"
            v-model="signupValues.username"
          />
        </div>

        <div class="">
          <p class="form-header">Password</p>
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="signupValues.password"
          />

          <div class="">
            <p class="form-header">Date of birth</p>
            <div class="col-sm-5">
              <input
                type="date"
                ref="date"
                class="form-control"
                id="inputDate"
                v-model="signupValues.dob"
                v-on:keyup.enter="this.$refs.duration.focus()"
              />
            </div>
          </div>

          <div class="">
            <p class="form-header">Email</p>
            <input
              type="email"
              class="form-control"
              placeholder="Your email"
              v-model="signupValues.email"
            />
          </div>
          <p class="form-header">Phone number</p>
          <div class="">
            <input
              type="phonenumber"
              class="form-control"
              placeholder="Your Phone number"
              v-model="signupValues.phone"
            />
          </div>

          <div class="">
            <p class="form-header">Address</p>
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
            Sign up
          </button>
        </div>
        <!-- </form> -->
      </main>
    </form>
    <p>{{ errMsg }}</p>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import axios from "axios";
//import apiService from "@/services/apiServices";

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
      axios
        .post("api/users/register", data)
        .then((res) => {
          console.log(res);
          if (res.status < 400) {
            localStorage.setItem("accesstoken", res.headers.accesstoken);
            //alert(res.headers.accesstoken);
            //this.$router.push("/");
            window.location.href = "/";
          }
        })
        .catch((err) => {
          this.errMsg = err.response.data;
          console.log(err);
        });
      // try {
      //   apiService.register(data);
      //   this.$router.push("/");
      // } catch (e) {
      //   console.log(e);
      // }
      //this.$router.push("/");
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
  width: 50%;
  padding: 20px;
  margin: auto;
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
  margin-bottom: 0.5rem;
}
</style>