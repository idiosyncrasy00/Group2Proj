<template>
  <Nav />
  <body>
    <router-view />
  </body>
</template>

<script>
import Nav from "@/components/Nav.vue";
import axios from "axios";

export default {
  name: "App",
  //props: ["user"],
  data() {
    return {
      user: "",
      //roomlist1: '1423412',
    };
  },
  methods: {
    registered() {
      //alert(this.username + " " + this.password);
      console.log(this.roomlist1);
    },
  },
  components: {
    Nav,
  },
  async created() {
    // get room list
    axios
      .get("/api/rooms/list", {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("roomlist", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
@import "./assets/variables.css";
</style>
