<template>
  <!-- <signin v-slot="{getUsername}"> 
    Hello {{ getUsername }} 
  </signin> -->
  <Nav />
  <Container />
  <Footer />
</template>

<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import Container from "@/views/Home/Container.vue";

export default {
  name: "home",
  data() {
    return {
      //content: getusername,
    };
  },
  components: {
    Nav,
    Footer,
    Container,
    //HelloWorld,
  },
  method: {},
};
</script>

<style>
#bgimg {
  background-image: url("../../assets/phonghop.jpg");
}
</style>
