<template>
  <Header />
  <h1>This is the signup page</h1>
  <main class="form-signup">
    <form action="/">
      <img
        class="mb-4"
        src="../assets/logo.png"
        alt=""
        width="80"
        height="90"
      />
      <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

      <div class="form-floating">
        <input type="firstname" class="form-control" v-model="firstname" />
        <label for="floatingInput">First name</label>
      </div>

      <div class="form-floating">
        <input type="lastname" class="form-control" v-model="lastname" />
        <label for="floatingInput">Last name</label>
      </div>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          v-model="email"
        />
        <label for="floatingInput">email</label>
      </div>

      <div class="form-floating">
        <input
          type="username"
          class="form-control"
          id="floatingInput"
          v-model="username"
        />
        <label for="floatingInput">Username</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button
        class="w-100 btn btn-lg btn-primary"
        type="submit"
        @click="signup"
      >
        Sign up
      </button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
    </form>
  </main>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "signup",
  data() {
    return {
      email: "",
      username: "",
      password: "",
    };
  },
  methods: {
    getusername() {
      return this.username;
    },
    signup() {
      console.log(this.username + " " + this.password + " " + this.email);
    },
  },
  components: {
    Header,
  }
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

body {
  display: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
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