<template>
  <div class="container h-100">
    <div class="row h-100">
      <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
        <div class="d-table-cell align-middle">
          <div class="text-center mt-4">
            <h1 class="h2">Create a meeting</h1>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="m-sm-4">
                <form>
                  <div class="form-group">
                    <label>Password</label>
                    <input
                      class="form-control form-control-lg"
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div class="form-group">
                    <label>Date</label>
                    <input
                      class="form-control form-control-lg"
                      type="date"
                      name="company"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div class="form-group">
                    <label>Start time</label>
                    <input
                      class="form-control form-control-lg"
                      type="time"
                      name="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div class="form-group">
                    <label>End time</label>
                    <input
                      class="form-control form-control-lg"
                      type="time"
                      name="password"
                      placeholder="Enter password"
                    />
                  </div>

                  <div class="text-center mt-3">
                    <button @click="createMeeting()">Create</button>
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
//import axios from "axios";

export default {
  name: "Meeting",
  components: {},
  methods: {
    async createMeeting() {
      //onst meetingInfo = {};
      //axios
      // axios
      //   .post("/api/meetings/create", meetingInfo)
      //   .then((res) => {
      //     console.log(res);
      //     //this.rooms = res.data;
      //     //this.userInfo = res.data;
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  },
};
</script>

<style>
</style>