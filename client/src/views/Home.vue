<template>
  <p>Some home contents</p>
  <Header />
  <Container />
  <router-view />
  <div class="row">
    <div class="col col-md-1 themed-grid-col">fhaskd</div>
    <div class="col col-md-1 themed-grid-col">fhaskd</div>
    <div class="col col-md-1 themed-grid-col">fhaskd</div>
    <div class="col col-md-1 themed-grid-col">fhaskd</div>
    <div class="col col-md-1 themed-grid-col">fhaskd</div>
    <div class="col col-md-1 themed-grid-col">fhaskd</div>
  </div>
  <div class="row">
    <div class="col col-md-1 themed-grid-col">fhaskd</div>
    <div class="col col-md-1 themed-grid-col">fhaskd</div>
    <div class="col col-md-1 themed-grid-col">fhaskd</div>
    <div class="col col-md-1 themed-grid-col">fhaskd</div>
    <div class="col col-md-1 themed-grid-col">fhaskd</div>
    <div class="col col-md-1 themed-grid-col">fhaskd</div>
  </div>
  <button @click="showText">Show text</button>
  <Footer />
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Container from "@/components/Container.vue";

export default {
  name: "home",
  components: {
    Header,
    Footer,
    Container,
    //HelloWorld,
  },
  method: {},
};
</script>

<style scoped>
.themed-grid-col {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  background-color: rgba(86, 61, 124, 0.15);
  border: 1px solid rgba(86, 61, 124, 0.2);
}

.themed-container {
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  background-color: rgba(0, 123, 255, 0.15);
  border: 1px solid rgba(0, 123, 255, 0.2);
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
