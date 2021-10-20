<template>
  <div>
    <form @submit="handleSubmit" action="/signup">
      <!--<h1>This is the signup page</h1>-->
      <main class="form-signup card" style="background-color:var(--bg-color)">
        <!-- <form action="/"> -->
        <img
          class="mb-4 img-fluid rounded mx-auto d-block"
          src="../assets/logo.png"
          alt=""
          width="120"
          height="120"
        />
        <h1 class="h3 mb-3 fw-normal mx-auto">Please sign up here</h1>
				
				<div class="row">
        <div class="form-floating col-sm-6">
          <input
            type="firstname"
            class="form-control"
						placeholder="Your first name"
            v-model="signupValues.firstname"
          />
          <label for="floatingInput">First name</label>
        </div>
				
        <div class="form-floating col-sm-6">
          <input
            type="lastname"
            class="form-control"
						placeholder="Your last name"
            v-model="signupValues.lastname"
          />
          <label for="floatingInput">Last name</label>
        </div>
				</div>
        <div class="form-floating">
          <input
            type="email"
            class="form-control"
						placeholder="Your email"
            v-model="signupValues.email"
          />
          <label for="floatingInput">Email</label>
        </div>

        <div class="form-floating">
          <input
            type="username"
            class="form-control"
						placeholder="Your Username"
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
      axios
        .post("api/users/register", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      //const res = await axios.post("api/users/register", data);
      //console.log(res);
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
  padding: 70px;
  margin: auto;
}

.form-signup .checkbox {
  font-weight: 400;
}

.form-signup .form-floating:focus-within {
  z-index: 2;
}

.form-signup input[type="firstname"] {
  width: 80%;
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signup input[type="lastname"] {
  width: 80%;
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
.form-floating{
	margin-bottom: 10px;
}
</style>