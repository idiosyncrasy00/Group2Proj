<template>
  <div>
    <Nav />
    <router-view />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
import axios from "axios";
//import { mapGetters } from "vuex";

export default {
  name: "App",
  //props: ["user"],
  data() {
    return {
      // username: "123",
      // password: "456",
      //navKey: 0,
    };
  },
  methods: {},
  components: {
    Nav,
  },
  async created() {
    axios
      .get("api/users/auth", {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      })
      .then((res) => {
        console.log(res);
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
