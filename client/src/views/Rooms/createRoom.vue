<template>
  <div>
    <Nav />
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

export default {
  name: "createRoom",
  data() {
    return {
      meeting: "",
      meetings: [],
    };
  },
  methods: {
    addMeeting() {
      this.meetings.push(this.meeting);
      this.meeting = "";
    },
    deleteMeeting(meeting) {
      this.meetings = this.meetings.filter((item) => {
        return meeting != item;
      });
    },
  },
  components: {
    Nav,
  },
};
</script>

<style>
</style>
