<script setup>
import Navbar from './components/NavbarComponent.vue'
import Buttons from './components/Buttons.vue';
import Cards from './components/Cards.vue';
</script>

<template>
  <div id="app">
  <Navbar/>
  <Buttons/>
  <Cards/>
</div>
</template>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
  position: relative;
  height: auto;
  overflow: auto;
  background-color: white;
}
</style>
