<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark"
    v-if="
      this.$route.path === '/signin' || this.$route.path === '/signup'
        ? false
        : true
    "
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo.png" style="height: 2rem" />
      </a>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div class="navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-lg-1">
          <li class="nav-item">
            <a href="/" class="nav-link"> Trang chủ </a>
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
          <!-- <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Room detail
            </a>
            <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item text-white" href="/FindRoom"
                  >Find a conference room</a
                >
              </li>
              <li>
                <a class="dropdown-item text-white" href="/createRoom"
                  >Create a conference room</a
                >
              </li>
              <li>
                <a class="dropdown-item text-white" href="/manageRoom"
                  >Manage your rooms</a
                >
              </li>
              <li>
                <a class="dropdown-item text-white" href="#"
                  >Something else here</a
                >
              </li>
            </ul>
          </li> -->
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Danh sách cuộc họp
            </a>
            <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item text-white" href="/admin">Chủ trì</a>
              </li>
              <li>
                <a class="dropdown-item text-white" href="/participant"
                  >Tham gia</a
                >
              </li>
            </ul>
          </li>
          <!-- <li class="nav-item">
            <a href="/UserList" class="nav-link">Show list of users</a>
          </li> -->
          <li class="nav-item">
            <a href="/Feedback" class="nav-link">Gửi phản hồi cho quản lý</a>
          </li>
          <li class="nav-item">
            <a href="/Room" class="nav-link">Danh sách phòng họp</a>
          </li>
          <li class="nav-item">
            <a href="/manageRoom" class="nav-link">Quản lý phòng họp(chỉ dành cho quản lý)</a>
          </li>
          <li class="nav-item">
            <a href="/statistics" class="nav-link">Thống kê</a>
          </li>
        </ul>
        <ul class="navbar-nav" margin-left="20px" v-if="islogged == 0">
          <li class="nav-item">
            <a href="/signin" class="nav-link">Đăng nhập</a>
          </li>
          <li class="nav-item">
            <a href="/signup" class="nav-link">Đăng ký</a>
          </li>
        </ul>
        <ul class="navbar-nav" margin-left="20px" v-if="islogged == 1">
          <div
            v-on:mouseover="mouseOverNotify"
            v-on:mouseleave="mouseLeaveNotify"
          >
            <li class="nav-item">
              <a
                href="#"
                class="nav-link notification"
                style="font-size: 1.2rem"
              >
                <span>&#128276; </span>
                <span class="badge">0</span>
              </a>
            </li>
            <div v-if="this.showNotify">
              <Notify> </Notify>
            </div>
          </div>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hello {{ user.username }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="/user">Trang cá nhân</a>
              </li>
              <li>
                <a class="dropdown-item" href="/user/changePassword"
                  >Đổi mật khẩu</a
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <a class="dropdown-item" href="/signin" @click="handleClick"
                  >Đăng xuất</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Notify from "@/components/Notify.vue";
//import Dropdown from "@/components/Dropdown.vue";
import { getUserInfoAPI } from "@/services/user.apiServices.js";
//import { getUserInfoAPI } from "@/services/user.apiServices.js";

export default {
  name: "Header",
  data() {
    return {
      islogged: "0",
      user: "",
      showNotify: false,
      dropdownItems: [
        {
          title: "Web",
          link: "#",
        },
        {
          title: "Design",
          link: "#",
        },
        {
          title: "Videos",
          link: "#",
        },
      ],
    };
  },
  components: {
    //Dropdown,
    Notify,
  },
  methods: {
    handleClick() {
      localStorage.removeItem("accesstoken");
      localStorage.removeItem("userinfo");
      this.user = null;
      this.$router.push("/signin");
    },
    mouseOverNotify() {
      this.showNotify = true;
    },
    mouseLeaveNotify() {
      this.showNotify = false;
    },
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
