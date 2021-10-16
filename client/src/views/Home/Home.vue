<template>
  <!-- <Container v-if="user">
    {{ user.username }}
  </Container> -->
  <div>
    <img src="../../assets/phonghop.jpg" class="bg-img" alt="" />
    <div id="container">
      <div
        class="col-lg-6 order-1 order-lg-2 hero-img aos-init aos-animate"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div id="text-area">
          <img src="../../assets/logo.png" class="img-fluid animated" alt="" />
          <h1>Better Solutions For Your Meeting Rooms</h1>
          <h2>We are team of talented team meeting rooms management</h2>
          <div class="d-flex justify-content-center justify-content-lg-start">
            <!-- <a href="#about" class="btn-get-started scrollto">Get Started</a> -->
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body" style="width: 18rem">
              <div class="card-title">
                <h1>Title</h1>
              </div>
              <div class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Morbi dui turpis Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi dui turpis Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Morbi dui turpis Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Morbi dui turpis
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body" style="width: 18rem">
              <div class="card-title">
                <h1>Title</h1>
              </div>
              <div class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Morbi dui turpis Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi dui turpis Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Morbi dui turpis Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Morbi dui turpis
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body" style="width: 18rem">
              <div class="card-title">
                <h1>Title</h1>
              </div>
              <div class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Morbi dui turpis Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi dui turpis Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Morbi dui turpis Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Morbi dui turpis
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body" style="width: 18rem">
              <div class="card-title">
                <h1>Title</h1>
              </div>
              <div class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                dui turpis Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Morbi dui turpis Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Morbi dui turpis Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Morbi dui turpis Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Morbi dui turpis
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
//import axios from "axios";

export default {
  name: "home",
  //props: ["user"],
  data() {
    return {
      user: null,
    };
  },
  components: {
    Footer,
    //HelloWorld,
  },
  method: {},
};
</script>

<style>
#bgimg {
  background-image: url("../../assets/phonghop.jpg");
}
#container {
  margin-left: 500px;
}

img.bg-img {
  width: 100%;
}
</style>
