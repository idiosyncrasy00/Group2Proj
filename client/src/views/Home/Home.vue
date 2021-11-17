<template>
  <!-- <Container v-if="user">
    {{ user.username }}
  </Container> -->

  <div>
    <div id="container">
			<div class = "d-flex flex-row justify-content-center mt-5 mx-auto" id="slider">
				<div class="btn btn-prev col-sm-1" aria-label="Previous slide" @click="slide(-1)">
						&#10094;
				</div>
				<div class= "col-sm-10">	
					<transition-group tag="div" :name="transitionName" class="slides-group">
						<img v-if="show" :key="current" class="slide" :src="slides[current].name">
					</transition-group>
				</div>
				<div class="btn btn-next col-sm-1" aria-label="Next slide" @click="slide(1)">
						&#10095; 
					</div>
			</div>
			<div class = "row mt-4">
				<div class = "card col-sm-7" >
					<h3> Card title </h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type 
					specimen book. It has survived not only five centuries, but also the leap into 
					electronic typesetting, remaining essentially unchanged. It was popularised in 
					the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
					and more recently with desktop publishing software like Aldus PageMaker including 
					versions of Lorem Ipsum.
					</p>
				</div>
			</div>
			<div class = "d-flex flex-row-reverse mt-3">
				<div class = "card col-sm-7 end-0" >
					<h3> Card title </h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type 
					specimen book. It has survived not only five centuries, but also the leap into 
					electronic typesetting, remaining essentially unchanged. It was popularised in 
					the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
					and more recently with desktop publishing software like Aldus PageMaker including 
					versions of Lorem Ipsum.
					</p>
				</div>
			</div>
			<div class = "row mt-4">
				<div class = "card col-sm-7" >
					<h3> Card title </h3>
					<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
					when an unknown printer took a galley of type and scrambled it to make a type 
					specimen book. It has survived not only five centuries, but also the leap into 
					electronic typesetting, remaining essentially unchanged. It was popularised in 
					the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
					and more recently with desktop publishing software like Aldus PageMaker including 
					versions of Lorem Ipsum.
					</p>
				</div>
			</div>
    </div>
  </div>
  <h3 v-if="currentUser">Hi {{ currentUser.id }}</h3>
  <h3 v-else>Not logged in!</h3>
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
				{name: 'https://dbijapkm3o6fj.cloudfront.net/resources/23954,1004,1,6,4,0,600,450/-4601-/20191018171420/meeting-rooms.jpeg'},
				{name: 'https://thehive.com.vn/wp-content/uploads/2019/07/DSC_9987-1-1.jpg'},
				{name: 'https://image.freepik.com/free-photo/office-chair-meeting-room-asian_1262-2280.jpg'},
				{name: 'https://st.focusedcollection.com/3839757/i/650/focused_178412772-stock-photo-asian-business-people-talking-meeting.jpg'},
				{name: 'http://halioshotelhalong.com/images/upload/nha-hang/phonghop-1.jpg'}, 
			]
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
      this.current = (this.current + dir % len + len) % len;
    }
  },
	mounted() {
    this.show = true;

		setInterval(() => {
				this.current = (this.current + 1) % this.slides.length;
		}, 3000);
  },
  async created() {
    console.log(localStorage.getItem("accesstoken")); //null
    axios
      .get("api/users/auth", {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      })
      .then((res) => {
        console.log(res);
        this.currentUser = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style>
.container{
	overflow: hidden;
}



/* SLIDER STYLES */
#slider {
	width: 80%;
  height: 70vh;
	position: relative;
}
slides-group{
}
.slide {
  width: 83.5%;
  height: 100%;
  position: absolute;
  align-items: center;
  justify-content: center;
	overflow: hidden;
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

.btn:hover{
	background: #e6f3ff
}

</style>
