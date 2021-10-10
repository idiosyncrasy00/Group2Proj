<template>
  <!-- <slot :getUsername="signinValues.username" /> -->
  <div id="signin">
    <!-- <Nav /> -->
    <h1>This is the signin page</h1>
    <main class="form-signin">
      <!-- <form action="/"> -->
        <img
          class="mb-4"
          src="../assets/logo.png"
          alt=""
          width="72"
          height="57"
        />
        <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

        <div class="form-floating">
          <input
            type="username"
            class="form-control"
            id="floatingInput"
            v-model="signinValues.username"
          />
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating">
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
          class="w-100 btn btn-lg btn-primary"
          type="submit"
          @submit="getSignIndata"
        >
          Sign in
        </button>
        <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      <!-- </form> -->
    </main>
  </div>
</template>

<script>
//import Nav from "../components/Nav.vue";

export default {
  name: "signin",
  data() {
    return {
      signinValues: {
        username: "",
        password: "",
      },
      SigninData: "",
    };
  },
  methods: {
    getSignIndata() {
      // this.SigninData = JSON.stringify(this.signinValues);
      // alert(this.SigninData);
      //alert(this.SigninData);
      alert(this.username + " " + this.password);
    },
  },
  components: {
    //Nav,
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
</style>