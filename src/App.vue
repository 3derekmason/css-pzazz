<template>
  <div id="app">
    <!-- <CardFlip /> -->
    <HighwayScroll />
  </div>
</template>

<script>
// import CardFlip from "./components/CardFlip.vue";
import HighwayScroll from "./components/HighwayScroll.vue";

export default {
  name: "App",
  components: {
    // CardFlip,
    HighwayScroll,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
