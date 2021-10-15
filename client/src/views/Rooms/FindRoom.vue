<template>
  <div>
    <Nav />
    <div id="search-sec">
      <div class="container">
        <form action="#" method="post" novalidate="novalidate"></form>
        <div class="row">
          <div class="col-lg-12">
            <div class="row">
              <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                <input
                  type="text"
                  class="form-control search-slt"
                  placeholder="Enter City"
                  v-model="searchValues.city"
                />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                <input
                  type="text"
                  class="form-control search-slt"
                  placeholder="Enter District"
                  v-model="searchValues.district"
                />
              </div>
              <div class="col-lg-3 col-md-3 col-sm-12 p-0">
                <input
                  type="text"
                  class="form-control search-slt"
                  placeholder="Enter Room name"
                  v-model="searchValues.roomname"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="search-res">
      <div class="row">
        <h1>Search Result:</h1>
        <div
          class="col-sm-3"
          v-for="room in searchRooms.slice(0, 9)"
          :key="room.ID"
        >
          <router-link :to="{ name: 'roomdetails', params: { id: room.id } }">
            <div class="card">
              <div class="card-body" style="width: 18rem">
                <div class="card-title">
                  <h1>{{ room.id }}</h1>
                </div>
                <div class="card-text">
                  <h6>Name: {{ room.name }}</h6>
                  <h6>City: {{ room.city }}</h6>
                  <h6>District: {{ room.district }}</h6>
                  <h6>Status: {{ room.status }}</h6>
                </div>
              </div>
            </div>
          </router-link>
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
        city: "",
        district: "",
        roomname: "",
        status: "",
      },
      rooms: [
        { id: 1, name: "a", city: "c", district: "abcc", status: "active" },
        { id: 2, name: "b", city: "rwe", district: "abccc", status: "active" },
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
          rooms.name.startsWith(this.searchValues.roomname)
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
</style>
