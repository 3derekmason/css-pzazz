<template>
  <div>
    <div class="homelink">
      <p class="animated-word"><a href="/">Home</a></p>
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
a {
  color: #009688;
}
a:hover {
  color: #1de9b6;
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
  text-decoration: none;
  z-index: 10000;
  width: 100vw;
  position: absolute;
  margin-top: 32px;
  max-height: 16px;
  width: 100%;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}
.animated-word {
  font-family: Helvetica;
  letter-spacing: 0.4em;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  color: #009688;
  cursor: pointer;
  max-width: 160px;
  outline: 3px solid;
  outline-color: rgba(20, 233, 182, 0.5);
  outline-offset: 8px;
  transition: all 600ms cubic-bezier(0.2, 0, 0, 0.8);
}

.animated-word:hover {
  outline-color: rgba(20, 233, 182, 0);
  outline-offset: 300px;
}
</style>
