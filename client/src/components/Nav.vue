<template>
  <!--https://bootstrapmade.com/demo/Arsha/-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between" >
    <a class="navbar-brand" href="/">Main site</a>

    <ul class="navbar-nav" display:auto>
		<li class="nav-item">
			<a href="/" class="nav-link">Home</a>
		</li>
		<li class="nav-item">
			<a href="/about" class="nav-link">About</a>
		</li>
		<li class="dropdown">
		<button class="dropbtn nav-link">Room detail</button>
			<div class="dropdown-content">
				<a href="/FindRoom" class="nav-link">Find a conference room</a>
				<a href="/createRoom" class="nav-link" >Create a conference room</a>
				<a href="/createRoom" class="nav-link" v-if="!user">Manage your conference rooms</a>
			</div>
		</li>
    </ul>
    <ul class="navbar-nav" margin-left=20px v-if="user">
      <li class="nav-item">
        <a href="/signin" class="nav-link">Sign in</a>
      </li>
      <li class="nav-item">
        <a href="/signup" class="nav-link">Sign up</a>
      </li>
    </ul>
    <ul class="navbar-nav" margin-left=20px v-if="!user">
		<li class="nav-item">
        <!-- <a href="/signup" class="nav-link">Sign up</a> -->
        <a href="/User" class="nav-link" @click="handleClick">My Account</a>
		</li>
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
  margin-top:10px;
  padding-left: 150px;
  margin-left: 50px;
  position: relative;
}

.nav-item {
  margin-left: 10px;
  width: 10;
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
.dropdown-content a:hover {background-color: #2F4F4F;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #778899;}
nav{
	z-index: 1;
}
</style>
