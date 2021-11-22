<template>
  <!-- <Container v-if="user">
    {{ user.username }}
  </Container> -->

  <div>
    <div id="container">
      <div
        class="d-flex flex-row justify-content-center mt-1 mx-auto"
        id="slider"
      >
        <div
          class="btn btn-prev col-sm-1"
          aria-label="Previous slide"
          @click="slide(-1)"
        >
          &#10094;
        </div>
        <div class="col-sm-10">
          <transition-group
            tag="div"
            :name="transitionName"
            class="slides-group"
          >
            <img
              v-if="show"
              :key="current"
              class="slide"
              :src="slides[current].name"
            />
          </transition-group>
        </div>
        <div
          class="btn btn-next col-sm-1"
          aria-label="Next slide"
          @click="slide(1)"
        >
          &#10095;
        </div>
        <div class="bg-text">
          <h1>Meeting Manage Assistance</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            ullamcorper, felis et pulvinar volutpat, neque nulla viverra neque,
            id pellentesque nisl nulla ac quam. Vivamus eleifend tortor ac leo
            varius lobortis. Aliquam vitae dictum massa. Pellentesque habitant
            morbi tristique senectus et netus et malesuada fames ac turpis
            egestas. Etiam fermentum pharetra dictum. Nam tristique, tortor non
            sollicitudin euismod, neque velit luctus felis, at venenatis neque
            tellus at lorem
          </p>
        </div>
        <div class="intro-button">
          <a href="/about">About us &#10230;</a>
        </div>
      </div>
      <div class="row mt-4 justify-content-between">
        <div class="card col-sm-7" data-aos="fade-right">
          <h3>Card title</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="card col-sm-4 bg-secondary" data-aos="fade-left"></div>
      </div>
      <div class="d-flex flex-row-reverse mt-5 justify-content-between">
        <div class="card col-sm-7 end-0" data-aos="fade-left">
          <h3>Card title</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="card col-sm-4 bg-primary" data-aos="fade-right"></div>
      </div>
      <div class="row mt-5 justify-content-between">
        <div class="card col-sm-7" data-aos="fade-right">
          <h3>Card title</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div class="card col-sm-4 bg-danger" data-aos="fade-left"></div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
import axios from "axios";

export default {
  name: "home",
  //props: ["user"],
  data() {
    return {
      currentUser: null,
      //slider variable
      current: 0,
      direction: 1,
      transitionName: "fade",
      show: false,
      slides: [
        {
          name: "https://dbijapkm3o6fj.cloudfront.net/resources/23954,1004,1,6,4,0,600,450/-4601-/20191018171420/meeting-rooms.jpeg",
        },
        {
          name: "https://thehive.com.vn/wp-content/uploads/2019/07/DSC_9987-1-1.jpg",
        },
        {
          name: "https://image.freepik.com/free-photo/office-chair-meeting-room-asian_1262-2280.jpg",
        },
        {
          name: "https://st.focusedcollection.com/3839757/i/650/focused_178412772-stock-photo-asian-business-people-talking-meeting.jpg",
        },
        {
          name: "http://halioshotelhalong.com/images/upload/nha-hang/phonghop-1.jpg",
        },
      ],
    };
  },
  components: {
    Footer,
    axios,
  },
  methods: {
    slide(dir) {
      this.direction = dir;
      dir === 1
        ? (this.transitionName = "slide-next")
        : (this.transitionName = "slide-prev");
      var len = this.slides.length;
      this.current = (this.current + (dir % len) + len) % len;
    },
  },
  mounted() {
    this.show = true;
    setInterval(() => {
      this.current = (this.current + 1) % this.slides.length;
    }, 3000);
  },
  // async created() {
  //   //console.log(localStorage.getItem("accesstoken")); //null
  //   axios
  //     .get("api/users/auth", {
  //       headers: {
  //         accesstoken: localStorage.getItem("accesstoken"),
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
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap" rel="stylesheet">
.container {
  overflow: hidden;
}

/* SLIDER STYLES */
#slider {
  width: 100%;
  height: 95vh;
  position: relative;
}
slides-group {
}
.slide {
  width: 83.5%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  filter: blur(6px);
  -webkit-filter: blur(6px);
}

.btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  user-select: none;
}

.btn:hover {
  background: #e6f3ff;
}
.bg-text {
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4); /* see-through */
  color: white;
  font-weight: bold;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 40%;
  height: 90%;
  padding: 20px;
  text-align: left;
}
.bg-text h1 {
  font-size: 5rem;
  font-weight: 900;
  font-family: "Roboto", sans-serif;
}
.intro-button {
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  position: absolute;
  top: 89%;
  left: 50%;
  width: 8em;
  height: 1.5em;
  text-align: center;
  background-color: #3261ab;
}
.intro-button a {
  text-decoration: none;
  color: white;
}
</style>
