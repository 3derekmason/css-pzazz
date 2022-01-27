<template>
  <div>
    <div class="homelink">
      <router-link :to="{ name: 'HomePage' }">Home</router-link>
      <router-view />
    </div>
    <div class="container">
      <div class="drop"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WaterDrop",
};
</script>

<style language="css" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #e3f2fd;
}

.drop {
  position: relative;
  width: 150px;
  height: 150px;
  box-shadow: inset 10px 10px 10px rgba(0, 0, 0, 0.05),
    15px 25px 10px rgba(0, 0, 0, 0.05), 15px 20px 20px rgba(0, 0, 0, 0.05),
    inset -10px -10px 15px rgba(255, 255, 255, 0.9);
  border-radius: 50%;
}

.drop::before {
  content: "";
  position: absolute;
  top: 35px;
  left: 25px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
}

.drop::after {
  content: "";
  position: absolute;
  top: 25px;
  left: 50px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fff;
}

.homelink {
  width: 100vw;
  position: absolute;
  text-align: center;
}
</style>
