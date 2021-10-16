<template>
  <Nav :user="user" />
  <div>
    <router-view :user="user" />
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
//import Signin from "@/views/Signin.vue";
export default {
  name: "App",
  props: ["user"],
  data() {
    return {
      // username: "123",
      // password: "456",
    };
  },
  methods: {
    registered() {
      alert(this.username + " " + this.password);
    },
  },
  components: {
    Nav,
    //Signin,
    //Home,
    //signup,
    // Header,
    // Footer,
  },
};
</script>


