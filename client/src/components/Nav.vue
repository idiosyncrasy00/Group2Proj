<template>
  <!--https://bootstrapmade.com/demo/Arsha/-->
  <nav
    class="
      navbar navbar-expand-lg navbar-dark
      bg-dark
      d-flex
      justify-content-between
    "
    v-if="
      this.$route.path === '/signin' || this.$route.path === '/signup'
        ? false
        : true
    "
  >
    <a class="navbar-brand" href="/">
      <img src="../assets/logo.png" style="height: 2rem" />
    </a>
    <ul class="navbar-nav" display:auto>
      <li class="nav-item">
        <a href="/" class="nav-link"> Home </a>
        <!-- <router-link
          :to="{
            name: 'home',
          }"
          class="nav-link"
        >
          Home
        </router-link> -->
      </li>
      <li class="nav-item">
        <a href="/about" class="nav-link">About</a>
        <!-- <router-link
          :to="{
            name: 'about',
          }"
          class="nav-link"
        >
          About
        </router-link> -->
      </li>
      <li class="dropdown nav-item">
        <button class="dropbtn nav-link">Room detail</button>
        <div class="dropdown-content">
          <a href="/FindRoom" class="nav-link">Find a conference room</a>
          <a href="/createRoom" class="nav-link">Create a conference room</a>
          <a href="/manageRoom" class="nav-link">Manage your rooms</a>
          <a href="/manageMeeting" class="nav-link">Manage your meetings</a>
        </div>
      </li>
      <li class="dropdown nav-item">
        <button class="dropbtn nav-link">Meetings</button>
        <div class="dropdown-content">
          <a href="/admin" class="nav-link">Chủ phòng</a>
          <!-- <router-link
            :to="{
              name: 'admin',
            }"
            class="nav-link"
          >
            Chủ phòng
          </router-link> -->
          <a href="/participant" class="nav-link">Thành viên</a>
          <!-- <router-link
            :to="{
              name: 'participant',
            }"
            class="nav-link"
          >
            Thành viên
          </router-link> -->
        </div>
      </li>
      <li class="nav-item">
        <a href="/UserList" class="nav-link">User list</a>
      </li>
      <li class="nav-item">
        <a href="/Feedback" class="nav-link">Feedback</a>
      </li>
      <li class="nav-item">
        <a href="/Room" class="nav-link">Manage Room2</a>
      </li>
    </ul>
    <ul class="navbar-nav" margin-left="20px" v-if="islogged == 0">
      <li class="nav-item">
        <a href="/signin" class="nav-link">Sign in</a>
      </li>
      <li class="nav-item">
        <a href="/signup" class="nav-link">Sign up</a>
      </li>
    </ul>
    <ul class="navbar-nav" margin-left="20px" v-if="islogged == 1">
			<div 
			v-on:mouseover="mouseOverNotify"
			v-on:mouseleave="mouseLeaveNotify">
				<li class="nav-item">
					<a href="#" class="nav-link notification" style="font-size: 1.2rem">
						<span>&#128276;	</span>
						<span class="badge">N</span>
					</a>
				</li>
				<div v-if="this.showNotify">
					<Notify>
					</Notify>
				</div>
			</div>
      <li class="nav-item">
        <!-- <a href="/signup" class="nav-link">Sign up</a> -->
        <a href="/user" class="nav-link">Hello {{ user.username }}</a>
      </li>
      <li class="nav-item">
        <a href="/signin" class="nav-link" @click="handleClick">Log out</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Notify from "@/components/Notify.vue"
//import axios from "axios";
//import store from "@/store/index.js";
import { getUserInfoAPI } from "@/services/user.apiServices.js";
//import { getUserInfoAPI } from "@/services/user.apiServices.js";

export default {
  name: "Header",
  data() {
    return {
      islogged: "0",
      user: "",
			showNotify: false,
    };
  },
  components: {
    //signin,
    //axios,
		Notify,
  },
  methods: {
    handleClick() {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("userinfo");
      this.user = null;
      this.$router.push("/signin");
    },
		mouseOverNotify(){
			this.showNotify = true;
		},
		mouseLeaveNotify(){
			this.showNotify = false;
		}
  },
  async created() {
    //user info
    getUserInfoAPI()
      .then((res) => {
        console.log(res);
        localStorage.setItem("userinfo", JSON.stringify(res.data));
        this.islogged = 1;
        this.user = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    // this.user = store.getUserInfo();
    // if (this.user != null) {
    //   this.islogged = 1;
    // } else {
    //   this.islogged = 0;
    // }
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
  z-index: 10;
}
.notification:hover {
  background: transparent;
}

.notification .badge {
  position: relative;
  top: -45px;
  right: -7px;
  padding: 2px 5px;
  border-radius: 75%;
  background: red;
  color: white;
}
</style>
