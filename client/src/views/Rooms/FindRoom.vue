<template>
  <div>
    <div id="search-sec">
      <div class="container">
        <form action="#" method="post" novalidate="novalidate"></form>
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
				<div class="col-lg-3 col-md-3 col-sm-12 p-0">
                <input
					type="text"
					class="form-control search-slt border-2 bg-light"
					placeholder="Enter Room ID"
					v-model="searchValues.roomid"
                />
				</div>
				<div class="col-lg-3 col-md-3 col-sm-12 p-0">
                <input
					type="text"
					class="form-control search-slt border-2 bg-light"
					placeholder="Enter Host Name"
					v-model="searchValues.roomname"
                />
				</div>
              <div class="col-lg-2 col-md-2 col-sm-8 p-0">
                <input
                  type="text"
                  class="form-control search-slt border-2 bg-light"
                  placeholder="Enter City"
                  v-model="searchValues.city"
                />
              </div>
              <div class="col-lg-2 col-md-2 col-sm-8 p-0">
                <input
                  type="text"
                  class="form-control search-slt border-2 bg-light"
                  placeholder="Enter District"
                  v-model="searchValues.district"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="search-res">
      <div class="row">
        <h3>Search Result:</h3>
        <div
          class="col-sm-6"
          v-for="room in searchRooms.slice(0, 10)"
          :key="room.ID"
        >
					<div class="card mb-2 mt-1" style="width:85%; height:95%">
						<div class="card-body bg-gradient row" style=" background-color: var(--bg-color);">
			<router-link :to="{ name: 'roomdetails', params: { id: room.id } }">
							<h5 class="card-title text-center">
								{{ room.id }}
							</h5>
			</router-link>
							<div class="row">
								<div class="card-text col-sm-7">
									<h6>Name: {{ room.name }}      </h6>
									<h6> City: {{ room.city }}	  </h6>
								</div>
								<div class="card-text col-sm-5">
									<h6>Status: {{ room.status }}</h6>
									<h6>District: {{ room.district }}</h6>
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
      searchValues: {
		roomname: "",
        city: "",
        district: "",
        roomid: "",
        status: "",
      },
      rooms: [
        { id: 123456, name: "Nguyen Van A", city: "ha noi", district: "Ha Noi", status: "active" },
        { id: 234456, name: "Tran Nguyen Thi Ngoc Quynh", city: "New Yord", district: "Ca Mau", status: "active" },
        {
          id: 3,
          name: "c",
          city: "gf",
          district: "abcccc",
          status: "active",
        },
        {
          id: 4,
          name: "d",
          city: "rew",
          district: "abccccc",
          status: "active",
        },
        { id: 5, name: "a", city: "oo", district: "abcc", status: "active" },
        { id: 6, name: "b", city: "eqw", district: "abccc", status: "active" },
        {
          id: 7,
          name: "c",
          city: "bvc",
          district: "abcccc",
          status: "active",
        },
        {
          id: 8,
          name: "d",
          city: "gdg",
          district: "abccccc",
          status: "active",
        },
        { id: 9, name: "a", city: "hfg", district: "abcc", status: "active" },
        {
          id: 10,
          name: "b",
          city: "rw4",
          district: "abccc",
          status: "active",
        },
        {
          id: 11,
          name: "c",
          city: "bcvbcv",
          district: "abcccc",
          status: "active",
        },
        {
          id: 12,
          name: "d",
          city: "mjt",
          district: "abccccc",
          status: "active",
        },
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
      //alert(1245);
      return this.searchRooms();
    },
  },
  computed: {
    searchRooms() {
      return this.rooms.filter(
        (rooms) =>
			rooms.city.startsWith(this.searchValues.city) &&
			rooms.district.startsWith(this.searchValues.district) &&
			rooms.name.startsWith(this.searchValues.roomname)&&
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
</style>
