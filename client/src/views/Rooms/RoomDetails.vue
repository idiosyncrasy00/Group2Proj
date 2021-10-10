<template>
  <div>
    <h1>Room details page</h1>
    <p>Room id is {{ id }}</p>
  </div>
</template>

<script>
//import { defineComponent } from '@vue/composition-api'
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
};
</script>

<style scoped>
</style>
