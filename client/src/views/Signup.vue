<template>
  <div>
    <form @submit="handleSubmit" action="/signup">
      <h1>This is the signup page</h1>
      <main class="form-signup">
        <!-- <form action="/"> -->
        <img
          class="mb-4"
          src="../assets/logo.png"
          alt=""
          width="80"
          height="90"
        />
        <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

        <div class="form-floating">
          <input
            type="firstname"
            class="form-control"
            v-model="signupValues.firstname"
          />
          <label for="floatingInput">First name</label>
        </div>

        <div class="form-floating">
          <input
            type="lastname"
            class="form-control"
            v-model="signupValues.lastname"
          />
          <label for="floatingInput">Last name</label>
        </div>

        <div class="form-floating">
          <input
            type="email"
            class="form-control"
            v-model="signupValues.email"
          />
          <label for="floatingInput">email</label>
        </div>

        <div class="form-floating">
          <input
            type="username"
            class="form-control"
            v-model="signupValues.username"
          />
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            v-model="signupValues.password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button class="w-100 btn btn-lg btn-primary">Sign up</button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        <!-- </form> -->
      </main>
    </form>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import axios from "axios";
export default {
  name: "signup",
  data() {
    return {
      signupValues: {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: "",
      },
      SignUpData: "",
    };
  },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();
      const data = {
        firstname: this.signupValues.firstname,
        lastname: this.signupValues.lastname,
        email: this.signupValues.email,
        username: this.signupValues.username,
        password: this.signupValues.password,
      };
      //console.log(data);
      // axios
      //   .post("http://localhost:8000/signup", data)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
      const res = await axios.post("api/users/register", data);
      console.log(res);
      this.$router.push("/signin");
    },
  },
  components: {
    Nav,
    axios,
  },
};
</script>

<style>
/* Styles */
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

body {
  display: center;
  align-items: center;
}

.signup {
  background-color: red;
}

.form-signup {
  width: 100%;
  max-width: 1000px;
  padding: 100px;
  margin: auto;
}

.form-signup .checkbox {
  font-weight: 400;
}

.form-signup .form-floating:focus-within {
  z-index: 2;
}

.form-signup input[type="firstname"] {
  width: 50%;
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signup input[type="lastname"] {
  width: 50%;
  margin-bottom: 1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signup input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signup input[type="username"] {
  margin-bottom: 5px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signup input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>