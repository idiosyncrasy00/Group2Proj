<template>
  <!--https://bootstrapmade.com/demo/Arsha/-->
  <div class="row">
    <div class="col col-md-1 themed-grid-col">
    <h1 class="logo me-auto">
      <a href="#">1234</a>
    </h1>
    </div>
    <div class="col col-md-1 themed-grid-col">
      <router-link to="/">Home</router-link>
    </div>
    <div class="col col-md-1 themed-grid-col">
      <router-link to="/about">About</router-link>
    </div>
    <div class="col col-md-1 themed-grid-col">
      <router-link to="/signin">Sign in</router-link>
    </div>
    <div class="col col-md-1 themed-grid-col">
      <router-link to="/signup">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
//import signin from "../views/Signin.vue";
export default {
  name: "Header",

  // components: {
  //   signin,
  // },
};
</script>

