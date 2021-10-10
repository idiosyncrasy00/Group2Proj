<template>
  <!--https://bootstrapmade.com/demo/Arsha/-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Main site</a>

    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/createRoom">Create a conference room</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/findRoom">Find a conference room</a>
      </li>
    </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/signin">Sign in</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/signup">Sign up</a>
        </li>
      </ul>
  </nav>
</template>

<script>
//import signin from "@/views/Signin.vue";
// import Footer from "@/components/Footer.vue";
// import Container from "@/components/Container.vue";
export default {
  name: "Header",
  data() {
    return {
      //signin.islogged
      islogged: "0",
    };
  },
  components: {
    //signin,
  },
};
</script>

<style scoped>

.navbar-brand {
  padding-left: 50px;
  position: relative;
}

.navbar-nav {
  padding-left: 300px;
  margin-left: 50px;
  position: relative;
}

/* .navbar-nav {
  margin-left: 100px;
} */
</style>

