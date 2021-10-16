<template>
  <!--https://bootstrapmade.com/demo/Arsha/-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="/">Main site</a>

    <ul class="navbar-nav">
      <li class="nav-item">
        <a href="/" class="nav-link">Home</a>
      </li>
      <li class="nav-item">
        <a href="/about" class="nav-link">About</a>
      </li>
      <li class="nav-item">
        <a href="/createRoom" class="nav-link">Create a conference room</a>
      </li>
      <li class="nav-item">
        <a href="/findRoom" class="nav-link">Find a conference room</a>
      </li>
    </ul>
    <ul class="navbar-nav" v-if="!user">
      <li class="nav-item">
        <a href="/signin" class="nav-link">Sign in</a>
      </li>
      <li class="nav-item">
        <a href="/signup" class="nav-link">Sign up</a>
      </li>
    </ul>
    <ul class="navbar-nav" v-if="user">
      <li class="nav-item">
        <!-- <a href="/signin" class="nav-link">Sign in</a> -->
        <p>Hello lol</p>
      </li>
      <li class="nav-item">
        <!-- <a href="/signup" class="nav-link">Sign up</a> -->
        <a href="/signin" class="nav-link" @click="handleClick">Log out</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import axios from "axios";
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
  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
  async created() {
    const response = await axios.get("user", {
      header: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    console.log(response);
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

