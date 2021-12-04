<template>
<div class="row">
	<img class="banner" src="https://live.staticflickr.com/7569/15283414143_3e252b9523_b.jpg">
</div>
<div class="row text-light mb-2" style="background-color:#00004d; padding-top:2rem;padding-left:4rem;">
	<h5 style="font-size:1.25rem; color:#ffff4d;padding-bottom:0;">ĐÂY LÀ GÌ</h5>
	<span style="font-size:0.25rem; color:#ffff4d;margin-top:0;">
		_________________________________________________________________________________________________
	</span>
	<p class="banner-text" style="font-size:2.2rem;">
		Ứng dụng web tốt nhất cho việc quản trị phòng và cuộc họp của bạn, luôn ưu tiên trải nghiệm người dùng
	</p>
	
</div>
<div class="row mt-5 text-section-left row" data-aos="fade-up">
	<div class="col-sm-1"></div>
	<div class="col-sm-9">
		<h5> NHÓM CHÚNG TÔI </h5>
		<p style="font-size:1.5rem;">
			Nhóm 2, gồm 5 thành viên
		</p>
	</div>
</div>
<div class="row mt-5 text-section-right row" data-aos="fade-up">
	<div class="col-sm-6"></div>
	<div class="col-sm-6">
		<h5> TẦM NHÌN </h5>
		<p style="font-size:1.5rem;">
			Ưu tiên sự đơn giản trong việc giải quyết những vấn đề liên quan tới quản lý cuộc họp, chúng tôi
			tạo ra một ứng dụng web có thể phục vụ những nhu cầu cơ bản nhất của bạn trong việc họp hành trong
			môi trường công ty hoặc trường học. Hi vọng rằng nó có thể có được ứng dụng trong thực tế
		</p>
	</div>
</div>
<div class="row mt-5 row text-section-end" data-aos="fade-up">
	<div class="col-sm-1"></div>
	<div class="col-sm-8">
		<h5> Dự án này </h5>
		<p style="font-size:1.5rem;">
			Khung dự án
		</p>
		<p style="font-size:1.5rem;">
			- Phát triển:
		</p>
		<p>
				Bootstrap + VueJS + Axios + ExpressJS + NodeJS + Sequelize + MySQL
		</p>
		<p style="font-size:1.5rem;">
			- Triển khai:
		</p>
		<p>
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