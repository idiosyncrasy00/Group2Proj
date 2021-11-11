<template>
  <div>
    <div id="search-sec mx-auto">
      <div class="container">
        <form action="#" method="post" novalidate="novalidate" @submit.enter.prevent=""	>
					<div class = "row mb-5 mt-5">
						<div class="col-sm-6 mx-auto">
							<h3 class = "text-center"> Find your conference room </h3>
						</div>
					</div>

					<div class="row">
						<div class="col-sm-6 mx-auto">
							<p style="color:gray; font-size:80%;">Please enter meeting ID</p>
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
							v-on:click="isHidden = false">
								Search
							</button>
						</div>
					</div>
				</form>
      </div>
    </div>
    <section id="search-res" v-if="!isHidden">
      <div class="row">
        <div
          class="col-sm-6"
          v-for="room in searchRooms.slice(0, 10)"
          :key="room.ID"
        >
					<div class="card mb-2 mt-1 border border-2" style="width:85%; height:95%">
						<div style="">
							<router-link :to="{ name: 'roomdetails', params: { id: room.id } }" style="text-decoration: none;">
											<h5 class="card-header text-center bg-success text-dark" >
												{{ room.id }}
											</h5>
							</router-link>
							<div class="row">
								<div class="card-text col-sm-7 text-center">
									<h6>Date: {{ room.reservedDate }}      </h6>
									<h6> Start time: {{ room.startingTime }}	  </h6>
								</div>
								<div class="card-text col-sm-5 text-center">
									<h6>Status: {{ room.status }}</h6>
									<h6>Duration: {{ room.during }}</h6>
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
import DataServices from "@/services/DataServices.js";

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
      rooms: [
        { id: 123456789, reservedDate: "01/01/1999", startingTime: "15:45 CH", during: "5", status: "active" },
				{ id: 123456789, reservedDate: "01/01/1999", startingTime: "15:45 CH", during: "5", status: "active" },
        { id: 453452123, reservedDate: "01/01/2000", startingTime: "15:45 CH", during: "5", status: "active" },
				{ id: 787878123, reservedDate: "01/01/2001", startingTime: "15:45 CH", during: "5", status: "comming" },
				{ id: 123123123, reservedDate: "01/01/2002", startingTime: "15:45 CH", during: "24", status: "active" },
				{ id: 78452512, reservedDate: "01/01/2003", startingTime: "15:45 CH", during: "5", status: "ended" },
        
      ],
    };
  },
  created() {
    DataServices.getRoom()
      .then((res) => {
        this.event = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    Nav,
    DataServices,
  },
  method: {
    searchResult() {
      return this.searchRooms;
    },
  },
  computed: {
    searchRooms() {
			if (this.searchValues.roomid.length < 5)
				return this.rooms.filter(
        (rooms) =>
			rooms.id.toString().startsWith("#")
      );
      return this.rooms.filter(
        (rooms) =>
			rooms.id.toString().startsWith(this.searchValues.roomid)
      );
    },
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
.tab { margin-right: 5px; }
.card {
	margin-top:5%;
  -webkit-transition: all .2s ease-out;
	-moz-transition: all .2s ease-out;
	-ms-transition: all .2s ease-out;
	-o-transition: all .2s ease-out;
	transition: all .2s ease-out;
	border-radius:15px;
	border:none;	
}
.card:hover .btn
{
opacity:1;
top: 100%;
 box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
}

.card:hover
{
	box-shadow: 0 4px 18px 0 rgba(0,0,0,0.7);
}
</style>
