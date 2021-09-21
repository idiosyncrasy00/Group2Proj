<template>
  <div id="signup">
    <h1>This is the signup page</h1>
    <!--This action submits to the database (add the record)-->
    username:
    <input type="text" placeholder="Username" v-model="username" />
    Email:
    <input type="text" placeholder="Email" v-model="email" />
    password:
    <input type="password" />
    <button type="submit" @click="registered">Sign up</button>
  </div>
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
  method: {
    registered() {
      alert(1234);
      //console.log(this.$emit(this.username + " " + this.email));
      //alert(this.username + " " + this.email);
      //console.log(this.username + " " + this.email);
      //console.log(this.username + " " + this.email);
      //alert("1234567");
    },
  },
};
</script>