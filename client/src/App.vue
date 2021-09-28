<template>
  <router-view />
  <!-- <button @click="registered">Click me</button>
  <button type="button" class="btn btn-warning">Warning</button> -->
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "123",
      password: "456",
    };
  },
  methods: {
    registered() {
      alert(this.username + " " + this.password);
    },
  },
  components: {
    //Home,
    //signup,
    // Header,
    // Footer,
  },
};
</script>


