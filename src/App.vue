<template>
  <div id="app">
    <!-- <CardFlip /> -->
    <!-- <HighwayScroll /> -->
    <!-- <WobbleIn /> -->
    <!-- <WaterDrop /> -->
    <ComponentView />
  </div>
</template>

<script>
// import CardFlip from "./components/CardFlip.vue";
// import HighwayScroll from "./components/HighwayScroll.vue";
// import WobbleIn from "./components/WobbleIn.vue";
// import WaterDrop from "./components/WaterDrop.vue";
import ComponentView from "./components/ComponentView.vue";

export default {
  name: "App",
  components: {
    // CardFlip,
    // HighwayScroll,
    // WobbleIn,
    // WaterDrop,
    ComponentView,
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
}
</style>
