<template>
  <!-- <Nav /> -->
  <div>
    <img
      id="font-image"
      src="../../assets/phonghop.jpg"
      class="bg-img"
      alt=""
    />
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
              <div class="card-text">Info</div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body" style="width: 18rem">
              <div class="card-title">
                <h1>Title</h1>
              </div>
              <div class="card-text">Info</div>
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
              <div class="card-text">Info</div>
            </div>
          </div>
        </div>
        <div class="col-sm-3">
          <div class="card">
            <div class="card-body" style="width: 18rem">
              <div class="card-title">
                <h1>Title</h1>
              </div>
              <div class="card-text">Info</div>
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
import axios from "axios";
import Nav from "@/components/Nav.vue";
//import dataService from "@/services/DataServices";

export default {
  name: "home",
  //props: ["user"],
  data() {
    return {
      currentUser: null,
      //navKey: 0,
    };
  },
  components: {
    Footer,
    axios,
    Nav,
  },
  method: {},
  // async created() {
  //   axios
  //     .get("api/users/auth", {
  //       headers: {
  //         accesstoken: dataService.getToken,
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // },
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
#font-image {
  height: 600px;
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
.logo {
}
</style>
