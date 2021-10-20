<template>
  <!-- <slot :getUsername="signinValues.username" /> -->
	<div id="signin">
    <form @submit.prevent="handleSubmit" class="mask">
      <main class="form-signin" >
				<img
          class="mb-4 img-fluid rounded mx-auto d-block"
          src="../assets/logo.png"
          alt=""
          width="100"
          height="100"
        />
        <h4 class="mb-3 fw-normal" style="padding-bottom:10px;">Sign in to Meeting Manage</h4>
				<div class="card" style="background-color:var(--bg-color)">
					<div class="form-floating" style="padding-top:8px;padding-left:8px;padding-right:8px;padding-bottom:5px;">
						<input
							type="username"
							class="form-control"
							id="floatingInput"
							placeholder="Username"
							v-model="signinValues.username"
						/>
						<label for="floatingInput">Username</label>
					</div>
					<div class="form-floating" style="padding-left:8px;padding-right:8px;padding-bottom:5px;">
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
					<button class="w-75 btn btn-primary mx-auto" style="background-color:#38C75C;margin-bottom:5px;">Sign in</button>
				</div>
        <p class="mt-5 mb-2 text-muted">&copy; 2021–</p>
        <!-- </form> -->
      </main>
    </form>
  </div>
</template>

<script>
//import Nav from "../components/Nav.vue";
import axios from "axios";
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
    async handleSubmit(e) {
      e.preventDefault();
      const data = {
        username: this.signinValues.username,
        password: this.signinValues.password,
      };
      //const res = await axios.post("login", data);
      axios
        .post("api/users/login", data)
        .then((res) => {
          console.log(res);
          localStorage.setItem("accessToken", res.data.token);
          console.log(res.data.token);
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
      //console.log(res);
    },
  },
  components: {
    //Nav,
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
</style>