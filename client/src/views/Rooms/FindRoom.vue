<template>
  <div>
    <div id="search-sec mx-auto">
      <div class="container">
        <form
          action="#"
          method="post"
          novalidate="novalidate"
          @submit.enter.prevent=""
        >
          <div class="row mb-5 mt-5">
            <div class="col-sm-6 mx-auto">
              <h3 class="text-center">Find your conference room</h3>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 mx-auto">
              <p style="color: gray; font-size: 80%">Please enter meeting ID</p>
              <input
                type="text"
                class="form-control search-slt border-2 bg-light"
                placeholder="Meeting's ID"
                v-model="searchValues.roomid"
              />
            </div>
            <!--div class="col-lg-3 col-md-3 col-sm-12 p-0">
										<input
							type="text"
							class="form-control search-slt border-2 bg-light"
							placeholder="Enter Host Name"
							v-model="searchValues.roomname"
										/>
						</div-->
          </div>
          <div class="row mt-5">
            <div class="col-sm-2 mx-auto">
              <!--router-link :to="{ 
								name: 'roomdetails', 
								params: { id: 123456789 } 
							}">
								<h5 class="card-title text-center">
									{{ room.id }}
								</h5>
							</router-link-->
              <button
                type="button"
                class="btn btn-primary"
                v-on:click="isHidden = false"
              >
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <section id="search-res" v-if="!isHidden">
      <div class="row">
        <div class="col-sm-6" v-for="room in rooms" :key="room.id">
          <div class="card mb-2 mt-1" style="width: 85%; height: 95%">
            <div style="padding-left: 1rem">
              <router-link
                :to="{
                  name: 'roomdetails',
                  params: {
                    id: room.id,
                    roomname: room.roomname,
                    capacity: room.capacity,
                    facilities: room.facilities,
                    status: room.status,
                  },
                }"
								style="text-decoration: none;"
              >
                <h5 class="card-title text-center text-dark">
                  ID : {{ room.id }}
                </h5>
              </router-link>
              <div class="row">
                <div class="card-text col-sm-7">
                  <h6>Date: {{ room.roomname }}</h6>
                  <h6>Capacity: {{ room.capacity }}</h6>
                </div>
                <div class="card-text col-sm-5">
                  <h6>Facility: {{ room.facilities }}</h6>
                  <h6>Status: {{ room.status }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
//import DataServices from "@/services/DataServices.js";
import axios from "axios";

export default {
  name: "FindRoom",
  data() {
    return {
      isHidden: true,
      searchValues: {
        roomname: "",
        city: "",
        district: "",
        roomid: "",
        status: "",
      },
      //roomlist: "",
      rooms: [
					{
           id: this.roomlist.id,
           roomname: this.roomlist.roomname,
           capacity: this.roomlist.capacity,
           facilities: this.roomlist.facilities,
           status: this.roomlist.status,
					},
				/*
         {
           id: 45454545,
           roomname: "hop thuong niens",
           capacity: "15 p",
           facilities: "1 ban 2 ghr",
           status: "active",
         },*/
        // {
        //   id: 453452123,
        //   roomname: "",
        //   capacity: "",
        //   facilities: "",
        //   status: "active",
        // },
        // {
        //   id: 787878123,
        //   roomname: "",
        //   capacity: "",
        //   facilities: "",
        //   status: "active",
        // },
        // {
        //   id: 123123123,
        //   roomname: "",
        //   capacity: "",
        //   facilities: "",
        //   status: "active",
        // },
        // {
        //   id: 78452512,
        //   roomname: "",
        //   capacity: "",
        //   facilities: "",
        //   status: "active",
        // },
      ],
    };
  },
  components: {
    Nav,
    //DataServices,
  },
  method: {
    searchResult() {
      return this.searchRooms;
    },
  },
  computed: {
    searchRooms() {
      if (this.searchValues.rooms.length < 5)
        return this.rooms.filter((rooms) =>
          rooms.id.toString().startsWith(this.searchValues.roomid)
        );
      return this.rooms.filter((rooms) =>
        rooms.id.toString().startsWith(this.searchValues.roomid)
      );
    },
  },
  async created() {
    axios
      .get("/api/rooms/list", {
        headers: {
          accesstoken: localStorage.getItem("accesstoken"),
        },
      })
      .then((res) => {
        console.log(res);
        this.rooms = res.data;
        //this.userInfo = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
#search-sec {
  padding: 50px 30px 0px 200px;
}
#search-res {
  padding: 50px 100px 100px 200px;
}
.tab {
  margin-right: 5px;
}
.card {
  margin-top: 5%;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  border-radius: 15px;
  border: none;
  background-color: var(--bg-color);
}
.card:hover .btn {
  opacity: 1;
  top: 100%;
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover {
  box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.7);
}
</style>
