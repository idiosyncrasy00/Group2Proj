<template>
  <div class="row">
    <img
      class="banner"
      src="https://live.staticflickr.com/7569/15283414143_3e252b9523_b.jpg"
    />
  </div>
  <div
    class="row text-light mb-2"
    style="background-color: #00004d; padding-top: 2rem; padding-left: 4rem"
  >
    <h5 style="font-size: 1.25rem; color: #ffff4d; padding-bottom: 0">
      WHAT IS THIS
    </h5>
    <span style="font-size: 0.25rem; color: #ffff4d; margin-top: 0">
      _________________________________________________________________________________________________
    </span>
    <p class="banner-text" style="font-size: 2.2rem">
      The best web application for managing your rooms and meetings, focus on
      your experience
    </p>
  </div>
  <div class="row mt-5 text-section-left text-left" data-aos="fade-up">
    <h5>OUR TEAM</h5>
    <li class="nav-item dropdown">
      <a
        class="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
    <p style="font-size: 1.5rem">
      The best web application for managing your rooms and meetings, focus on
      your experience The best web application for managing your rooms and
      meetings, focus on your experience The best web application for managing
      your rooms and meetings, focus on your experience The best web application
      for managing your rooms and meetings, focus on your experiencev The best
      web application for managing your rooms and meetings, focus on your
      experience
    </p>
  </div>
  <div class="row mt-5 text-section-right text-right" data-aos="fade-up">
    <h5>OUR VISION</h5>
    <p style="font-size: 1.5rem">
      The best web application for managing your rooms and meetings, focus on
      your experience The best web application for managing your rooms and
      meetings, focus on your experience The best web application for managing
      your rooms and meetings, focus on your experience The best web application
      for managing your rooms and meetings, focus on your experiencev The best
      web application for managing your rooms and meetings, focus on your
      experience
    </p>
  </div>
  <div class="row mt-5" data-aos="fade-up">
    <h5>THE PROJECT</h5>
    <p style="font-size: 1.5rem">
      The best web application for managing your rooms and meetings, focus on
      your experience The best web application for managing your rooms and
      meetings, focus on your experience The best web application for managing
      your rooms and meetings, focus on your experience The best web application
      for managing your rooms and meetings, focus on your experiencev The best
      web application for managing your rooms and meetings, focus on your
      experience
    </p>
  </div>
  <div class="row mt-5" data-aos="fade-up" style="height: 25vh"></div>
</template>
<script>
import Footer from "@/components/Footer.vue";
export default {
  name: "about",
  components: {
    Footer,
  },
};
</script>


<style>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap");
.banner {
  height: 50vh;
  -webkit-filter: blur(15px);
}
.banner-text {
  font-family: "Raleway", sans-serif;
}
.text-section-left {
  border-bottom: 2px solid;
  border-image: linear-gradient(to left, purple 70%, #fff 30%) 100% 1;
}
.text-section-right {
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, red 70%, #fff 30%) 100% 1;
}
</style>