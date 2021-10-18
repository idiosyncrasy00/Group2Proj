<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="wrapper">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <AppFooter></AppFooter>
  </div>

</template>

<script>
import Nav from './Nav.vue'
import Footer from './Footer.vue'
export default {
  name: 'AppLayout',
  components: {
    Nav,
    Footer
  }
}
</script>