<template>
  <h1>This is the signup page</h1>
  <!--This action submits to the database (add the record)-->
  Username:
  <input type="text" placeholder="Username" v-model="username" />
  Email:
  <input type="text" placeholder="Email" v-model="email" />
  Password:
  <input type="password" id="password" />
  <button @click="registered" type="submit">Sign up</button>
</template>

<script>
export default {
  name: "signup",
  data() {
    return {
      username: "",
      email: "",
    };
  },
  methods: {
    registered() {
      alert(this.username + " " + this.email);
    },
  },
  component: {
    //test,
  },
};
</script>