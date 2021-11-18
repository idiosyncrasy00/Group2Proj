<template>
  <Nav :user="user" />
  <body>
    <router-view :user="user" />
  </body>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "App",
  props: ["user"],
  data() {
    return {
      // username: "123",
      // password: "456",
      //navKey: 0,
    };
  },
  methods: {
    registered() {
      alert(this.username + " " + this.password);
    },
  },
  components: {
    Nav,
  },
};
</script>

<style>
@import "./assets/variables.css";
</style>
