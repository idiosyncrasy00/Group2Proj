<template>
  <div>
    <input type="text" v-model="meeting" />
    <button type="button" @click="addMeeting">Add</button>
    <div v-for="meeting in meetings" :key="meeting">
      {{ meeting }}
      <button type="button" @click="modifyMeeting">Modify</button>
      <button type="button" @click="deleteMeeting(meeting)">Delete</button>
    </div>
  </div>
</template>

<script>
import Nav from "../../components/Nav.vue";
//import DataServices from "../services/DataServices";

export default {
  name: "createRoom",
  data() {
    return {
      meeting: "",
      meetings: [],
    };
  },
  create: function () {
    this.addMeeting();
  },
  methods: {
    addMeeting() {
      this.meetings.push(this.meeting);
      this.meeting = "";
    },

    // DataServices.create(data).then(res => {
    //   this.meeting = res.data.meeting;
    //   console.log(res.data);
    // }).catch(e => {
    //   console.log(e);
    // }),

    // deleteMeeting(meeting) {
    //   this.meetings = this.meetings.filter((item) => {
    //     return meeting != item;
    //   });
    // },
    newRoom() {
      this.submitted = false;
      this.rooms = {};
    },
  },
  components: {
    Nav,
  },
};
</script>

<style>
</style>
