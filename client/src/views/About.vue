<template>
<div class="row">
	<img class="banner" src="https://live.staticflickr.com/7569/15283414143_3e252b9523_b.jpg">
</div>
<div class="row text-light mb-2" style="background-color:#00004d; padding-top:2rem;padding-left:4rem;">
	<h5 style="font-size:1.25rem; color:#ffff4d;padding-bottom:0;">WHAT IS THIS</h5>
	<span style="font-size:0.25rem; color:#ffff4d;margin-top:0;">
		_________________________________________________________________________________________________
	</span>
	<p class="banner-text" style="font-size:2.2rem;">
		The best web application for managing your rooms and meetings, focus on your experience
	</p>
	
</div>
<div class="row mt-5 text-section-left row" data-aos="fade-up">
	<div class="col-sm-1"></div>
	<div class="col-sm-9">
		<h5> OUR TEAM </h5>
		<p style="font-size:1.5rem;">
			Group 2, four members: ....
		</p>
	</div>
</div>
<div class="row mt-5 text-section-right row" data-aos="fade-up">
	<div class="col-sm-6"></div>
	<div class="col-sm-6">
		<h5> OUR VISION </h5>
		<p style="font-size:1.5rem;">
			Prioritizing simplicity in solving meeting room’s problems, 
			we work on a web application that can serve your basical needs in managing meeting
			in company/school's enviroment. It hopefully can have some uses in real world's situation.
		</p>
	</div>
</div>
<div class="row mt-5 row text-section-end" data-aos="fade-up">
	<div class="col-sm-1"></div>
	<div class="col-sm-8">
		<h5> THE PROJECT </h5>
		<p style="font-size:1.5rem;">
			Project framework
		</p>
		<p style="font-size:1.5rem;">
			- Building:
			Bootstrap + VueJS + Axios + ExpressJS + NodeJS + Sequelize + MySQL
		</p>
		<p style="font-size:1.5rem;">
			- Deployment:
			Nginx + Docker	
		</p>
	</div>
</div>
<div class="row mt-5" data-aos="fade-up" style="height: 25vh;">

</div>
<Footer>
</Footer>
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
  border-image: linear-gradient(to right, purple 60%, #fff 30%) 80% 1;
}
.text-section-right {
  border-bottom: 2px solid;
  border-image: linear-gradient(to left, red 60%, #fff 30%) 80% 1;
}
.text-section-end {
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, yellow 80%, #fff 30%) 80% 1;
}
</style>