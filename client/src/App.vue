<template>
  <Nav />
  <body>
    <router-view />
  </body>
</template>

<script>
import Nav from "@/components/Nav.vue";
import { getUserAuthAPI } from "@/services/user.apiServices.js";

export default {
  name: "App",
  //props: ["user"],
  data() {
    return {
      //user: "",
      //roomlist1: '1423412',
    };
  },
  methods: {
    setShowDate(d) {
      this.showDate = d;
    },
  },
  components: {
    Nav,
  },
  async created() {
    //this.$swal("Hello Vue world!!!");
    //user auth
    getUserAuthAPI()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // //user info
    // getUserInfoAPI()
    //   .then((res) => {
    //     console.log(res);
    //     localStorage.setItem("userinfo", JSON.stringify(res.data));
    //     //this.user = res.data;
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};
</script>

<style>
@import "./assets/variables.css";
</style>
