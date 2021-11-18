<template>
<div class="container h-100">
  <div class="row h-100">
				<div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
					<div class="d-table-cell align-middle">

						<div class="text-center mt-4">
							<h1 class="h2">Tạo cuộc họp</h1>
						
						</div>

						<div class="card">
							<div class="card-body">
								<div class="m-sm-4">
									<form>
										<div class="form-group">
											<label>Tên phòng</label>
											<label  class="form-control form-control-lg">{{id}}</label>
										</div>
										<div class="form-group">
											<label>Mật khẩu phòng</label>
											<input class="form-control form-control-lg" type="password" name="password">
										</div>
										<div class="form-group">
											<label>Ngày họp</label>
											<input class="form-control form-control-lg" type="date" name="date" placeholder="Nhập ngày đặt phòng">
										</div>
										<div class="form-group">
											<label>Thời gian bắt đầu</label>
											<input class="form-control form-control-lg" type="time" name="startTime" placeholder="Nhập thời gian bắt đầu">
										</div>
										<div class="form-group">
											<label>Thời gian họp</label>
											<input class="form-control form-control-lg" type="number" name="during" placeholder="Nhập thời gian họp">
										</div>
                                        <div class="form-group">
											<label>Tên cuộc họp</label>
											<input class="form-control form-control-lg" type="text" name="title" placeholder="Nhập tên cuộc họp">
										</div>
										<div class="form-group">
											<label>Nội dung cuộc họp</label>
											<textarea class="form-control form-control-lg" type="textarea" name="content" placeholder="Nhập nội dung họp" rows="5"></textarea>
										</div>
										<div class="text-center mt-3">
											<button>Tạo</button>
											<!-- <button type="submit" class="btn btn-lg btn-primary">Sign up</button> -->
										</div>
									</form>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
	</div>
</template>
<script>
export default {
  name: "createMeeting",
  components: {},
  data() {
    return {
      id: this.$route.params.id
    };
  }
}
</script>

<style>

</style>