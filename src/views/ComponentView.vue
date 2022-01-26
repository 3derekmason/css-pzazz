<template>
  <div class="container">
    <CardFlip />
    <WaterDrop />
  </div>
</template>

<script>
import CardFlip from "../components/CardFlip.vue";
import WaterDrop from "../components/WaterDrop.vue";

export default {
  name: "ComponentView",
  components: {
    CardFlip,
    WaterDrop,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
