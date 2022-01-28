<template>
  <div class="home">
    <div class="homelink">
      <p class="animated-word"><a href="/about">About</a></p>
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1><strong>Css Pizazz</strong> <em>with Vue</em></h1>
    <div class="nav">
      <button class="homeBtn third">
        <router-link to="/cardflip">Card Flip</router-link>
      </button>
      <button class="homeBtn third">
        <router-link to="/highwayscroll">Highway Scroll</router-link>
      </button>
      <button class="homeBtn third">
        <router-link to="/waterdrop">Water Drop</router-link>
      </button>
      <button class="homeBtn third">
        <router-link to="/wobblein">Wobble In</router-link>
      </button>
      <button class="homeBtn third">
        <router-link to="/glowingDotHover">Glowing Dot Hover</router-link>
      </button>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style>
body {
  background: #212121;
}

a {
  text-decoration: none;
  color: #fff;
}
.home a:visited {
  color: #fff;
}
.home a:active {
  color: green;
}
.home a:hover {
  color: #009688;
}
h1 {
  color: #1de9b6;
  font-variant: small-caps;
  letter-spacing: 2px;
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.homeBtn {
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  letter-spacing: 2px;
  width: 104px;
  height: 80px;
  text-decoration: none;
  border-radius: 8px;
}

.third {
  border-color: #009688;
  color: #fff;
  box-shadow: 0 0 40px 40px #009688 inset, 0 0 0 0 #009688;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 0.33s ease-in-out;
}
.third:hover {
  box-shadow: 0 0 10px 0 #009688 inset, 0 0 10px 4px #009688;
  color: #00796b;
}

.homelink {
  text-decoration: none;
  z-index: 10000;
  width: 100vw;
  margin-top: 32px;
  max-height: 16px;
  width: 100%;
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
