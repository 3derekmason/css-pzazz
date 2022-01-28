<template>
  <div>
    <div class="homelink">
      <p class="animated-word"><a href="/">Home</a></p>
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

a {
  color: #e3f2fd;
}
a:hover {
  color: #1de9b6;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
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
  margin-top: 32px;
  max-height: 16px;
  width: 100%;
  background: linear-gradient(#212121, #e3f2fd);
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
  outline-color: rgba(233, 233, 233, 0.5);
  outline-offset: 16px;
  transition: all 600ms cubic-bezier(0.2, 0, 0, 0.8);
}

.animated-word:hover {
  outline-color: rgba(20, 233, 182, 0);
  outline-offset: 300px;
}
</style>
