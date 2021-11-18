<template>
  <!--https://bootstrapmade.com/demo/Arsha/-->
  <nav
    class="
      navbar navbar-expand-lg navbar-dark
      bg-dark
      d-flex
      justify-content-between
    "
  >
    <a class="navbar-brand" href="/">
      <img src="../assets/logo.png" style="height: 2rem" />
    </a>
    <ul class="navbar-nav" display:auto>
      <li class="nav-item">
        <a href="/" class="nav-link"> Home </a>
      </li>
      <li class="nav-item">
        <a href="/about" class="nav-link">About</a>
      </li>
      <li class="dropdown nav-item">
        <button class="dropbtn nav-link">Room detail</button>
        <div class="dropdown-content">
          <a href="/FindRoom" class="nav-link">Find a conference room</a>
          <a href="/createRoom" class="nav-link">Create a conference room</a>
          <a href="/manageRoom" class="nav-link"
            >Manage your conference rooms</a
          >
        </div>
      </li>
      <li class="nav-item">
        <a href="/UserList" class="nav-link">Show list of users</a>
      </li>
      <li class="nav-item">
        <a href="/Feedback" class="nav-link">Send feedback to manager</a>
      </li>
      <li class="nav-item">
        <a href="/Room" class="nav-link">Manage Room(v2 Test)</a>
      </li>
    </ul>
    <ul class="navbar-nav" margin-left="20px" v-if="!user">
      <li class="nav-item">
        <a href="/signin" class="nav-link">Sign in</a>
      </li>
      <li class="nav-item">
        <a href="/signup" class="nav-link">Sign up</a>
      </li>
    </ul>
    <ul class="navbar-nav" margin-left="20px" v-if="user">
      <li class="nav-item">
        <!-- <a href="/signup" class="nav-link">Sign up</a> -->
        <a href="/User" class="nav-link">Hello {{ user.username }}</a>
        <!-- <router-link
          :to="{
            name: 'user',
            params: {
              getUser: user,
            },
          }"
          class="nav-link"
        >
          Hello {{ user.username }}</router-link
        > -->
      </li>
      <!-- <li class="nav-item">
        <a href="/User" class="nav-link">My Account</a>
      </li> -->
      <li class="nav-item">
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
      //islogged: "0",
      user: "",
    };
  },
  components: {
    //signin,
    axios,
  },
  methods: {
    handleClick() {
      localStorage.removeItem("accesstoken");
      this.user = null;
      this.$router.push("/signin");
    },
  },
  async created() {
    axios
      .get("api/users/me", {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      })
      .then((res) => {
        console.log(res);
        this.user = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.navbar-brand {
  padding-left: 50px;
  position: relative;
}

.navbar-nav {
  padding-left: 50px;
  margin-left: 50px;
  position: relative;
}

.nav-item {
  padding-left: 30px;
}

/* Dropdown Button */
.dropbtn {
  background-color: transparent;
  color: white;
  padding-top: 8px;
  margin-left: 10px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #282733;
  min-width: 160px;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #2f4f4f;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #778899;
}
nav {
  z-index: 1;
}
</style>
