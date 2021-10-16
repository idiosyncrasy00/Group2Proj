<template>
  <div>
    <h1>Room details page</h1>
    <p>Room id is {{ id }}</p>
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
import DataServices from "@/services/DataServices.js";
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  components: {
    DataServices,
  },
  created() {
    DataServices.getRoomInfo(this.id)
    .then(res => {
      this.event = res.data;
    })
    .catch(err => {
      console.log(err);
    })
  }
};
</script>

<style scoped>
</style>
