<template>
  <div>
    <div class="homelink">
      <p class="animated-word"><a href="/">Home</a></p>
    </div>
    <div class="container">
      <div class="infinite">
        <div class="shadow"></div>
      </div>
      <div class="box">
        <div class="square"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HighwayScroll",
};
</script>

<style language="css" scoped>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

a {
  color: #ff0;
}
a:hover {
  color: #80d8ff;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background: #e1f5fe;
}

/* * * * * HIGHWAY * * * * */

.infinite {
  position: relative;
  width: 800px;
  height: 160px;
  background: #525252;
  transform-origin: bottom;
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(30deg);
}

.infinite::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  height: 10px;
  background: linear-gradient(
    90deg,
    #ff0 0%,
    #ff0 70%,
    #525252 70%,
    #525252 100%
  );
  background-size: 120px;
  animation: animateHighway 1s linear infinite;
}

@keyframes animateHighway {
  0% {
    background-position: 0;
  }
  100% {
    background-position: -120px;
  }
}

.infinite::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 30px;
  background: #333;
  bottom: -30px;
  left: 0;
  transform-origin: top;
  transform: perspective(500px) rotateX(-25deg);
}

.shadow {
  position: absolute;
  left: 50%;
  width: 95%;
  transform: translateX(-50%);
  height: 60px;
  bottom: -93px;
  background: linear-gradient(rgba(0, 0, 0, 0.25), transparent);
}

/* * * * * Box * * * * */

.box {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-reflect: below 1px
    linear-gradient(transparent, transparent, transparent, #0004);
  animation: animateBox 1s linear infinite;
}

@keyframes animateBox {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-100px);
  }
}

.square {
  position: relative;
  width: 100px;
  height: 100px;
  background: radial-gradient(#00b0ff, #40c4ff, #80d8ff);
  transform-origin: bottom right;
  animation: spins 1s linear infinite;
}

@keyframes spins {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}

.homelink {
  margin-top: 16px;
  max-height: 16px;
  width: 100%;
  background: linear-gradient(#212121, #e1f5fe);
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
  outline-color: rgba(233, 233, 0, 0.5);
  outline-offset: 8px;
  transition: all 600ms cubic-bezier(0.2, 0, 0, 0.8);
}

.animated-word:hover {
  outline-color: rgba(20, 233, 182, 0);
  outline-offset: 300px;
}
</style>
