<template>
  <div>
    <div class="homelink">
      <router-link :to="{ name: 'HomePage' }">Home</router-link>
      <router-view />
    </div>
    <div class="container">
      <div class="wordsBottom">
        <h2>WORDS</h2>
      </div>
      <div class="wordsTop">
        <h2>WORDS</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WobbleIn",
};
</script>

<style language="css" scoped>
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  background: #000;
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25vh;
  color: #fff;
}

.wordsBottom {
  position: absolute;
  animation: fadeIn 8s infinite;
}
@keyframes fadeIn {
  0% {
    color: #000;
    scale: (0.5);
    text-shadow: (1px 1px 3px #000);
  }
  75% {
    scale: (1);
    text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.85);
  }
  100% {
    color: #ddd;
    scale: (1.5);
    text-shadow: 1px 1px 15px rgba(255, 255, 255, 0.85);
  }
}

.wordsTop {
  position: absolute;
  animation: wobble 0.05s infinite;
  color: #000;
  opacity: 0.15;
}
@keyframes wobble {
  0% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(-3deg);
  }
}

.homelink {
  color: #fff;
  text-decoration: none;
  z-index: 10000;
  width: 100vw;
  position: absolute;
  text-align: center;
}
</style>
