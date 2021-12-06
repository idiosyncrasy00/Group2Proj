<template>
  <nav
    class="navbar navbar-expand-lg navbar-dark bg-dark"
    v-if="
      this.$route.path === '/signin' || this.$route.path === '/signup'
        ? false
        : true
    "
  >
    <div class="container-fluid d-flex justify-content-between">
      <a class="navbar-brand" href="/">
        <img src="../assets/logo.png" style="height: 2rem" />
      </a>
      <div class="navbar-collapse">
        <ul class="navbar-nav me-auto mb-2 mb-l mx-auto">
          <li class="nav-item">
            <a href="/" class="nav-link"> Trang chủ </a>
          </li>
          <li class="nav-item">
            <a href="/about" class="nav-link">Giới thiệu</a>
          </li>
          <li
            class="nav-item dropdown"
            v-if="isAdmin == false && islogged == 1"
          >
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Cuộc họp của tôi
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
          <li class="nav-item" v-if="isAdmin == false">
            <a href="/Room" class="nav-link">Danh sách phòng họp</a>
          </li>          
          <li class="nav-item" v-if="isAdmin == false && islogged == 1">
            <a href="/Feedback" class="nav-link">Phản hồi phòng họp</a>
          </li>
          <li class="nav-item" v-if="isAdmin == false && islogged == 1">
            <a href="/FeedbackManager" class="nav-link">Phản hồi cho quản lý</a>
          </li>
          <li class="nav-item">
            <a
              href="/manageRoom"
              class="nav-link"
              v-if="isAdmin == true && islogged == 1"
              >Quản lý phòng họp</a
            >
          </li>
          <li class="nav-item" v-if="isAdmin == true && islogged == 1">
            <a href="/statistics" class="nav-link">Thống kê</a>
          </li>
          
        </ul>

        <ul class="navbar-nav" v-if="islogged == 0">
          <li class="nav-item">
            <a href="/signin" class="nav-link">Đăng nhập</a>
          </li>
          <li class="nav-item">
            <a href="/signup" class="nav-link">Đăng ký</a>
          </li>
        </ul>
        <ul class="navbar-nav" margin-left="1rem" v-if="islogged == 1">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Chào {{ user.username }}
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
      isAdmin: false,
      showNotify: false,
    };
  },
  components: {
    //Dropdown,
    Notify,
  },
  methods: {
    handleClick() {
      localStorage.clear();
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
        this.isAdmin = res.data.isadmin;
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
  padding-left: 0.7rem;
  position: relative;
}

.navbar-nav {
  margin-left: 1rem;
  position: relative;
}

.nav-item {
  padding-left: 1.5rem;
}

/* Dropdown Button */
.dropbtn {
  background-color: transparent;
  color: white;
  padding-top: 8px;
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
.dropdown-item:hover {
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
