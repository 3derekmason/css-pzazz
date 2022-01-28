<template>
  <div>
    <div class="container">
      <div class="flipCard">
        <div class="front"><img src="../../library/cardFlip/card.png" /></div>
        <div class="back"></div>
      </div>
    </div>
    <div class="homelink">
      <p class="animated-word"><a href="/">Home</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardFlip",
};
</script>

<style language="css" scoped>
a {
  color: #009688;
}
a:hover {
  color: #1de9b6;
}

.container {
  width: 200px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 750px;
  transform-style: preserve-3d;
}

.container .front {
  transition: 0.8s;
}

.container .front img {
  width: 100%;
  border-radius: 8px;
}

.container .back {
  background: url("../../library/cardFlip/back.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  transition: 0.8s;
}

.flipCard {
  position: relative;
  transition: 0.8s;
  transform-style: preserve-3d;
}

.flipCard .front {
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  z-index: 100;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}

.flipCard .back {
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  z-index: 99;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  width: 200px;
  height: 300px;
  transform: rotateY(180deg);
}

.container:hover .front {
  transform: rotateY(-180deg);
  transition: 0.8s;
}

.container:hover .back {
  transform: rotateY(0deg);
  transition: 0.8s;
}

.homelink {
  margin-top: 32px;
  max-height: 16px;
  width: 100%;
  background: linear-gradient(#212121, #263238, #212121);
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
  outline-offset: 16px;
  transition: all 600ms cubic-bezier(0.2, 0, 0, 0.8);
}

.animated-word:hover {
  outline-color: rgba(20, 233, 182, 0);
  outline-offset: 300px;
}
</style>
