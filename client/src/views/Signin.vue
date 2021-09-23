<template>
  <h1>This is the signin page</h1>
  username:
  <input type="text" placeholder="Username" v-model="username" />
  password:
  <input type="password" v-model="password" />
  <button @click="signin" type="submit">Sign in</button>
</template>

<script>
export default {
  name: "signin",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    signin() {
      alert(this.username + " " + this.password);
    },
  },
};
</script>