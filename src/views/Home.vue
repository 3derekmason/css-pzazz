<template>
  <div class="home">
    <div>
      <button class="homeBtn second">
        <router-link to="/about">About</router-link>
      </button>
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

.second {
  margin-left: 16px;
  margin-right: 16px;
  height: fit-content;
  width: fit-content;
  font-size: 1.5em;
  border-radius: 4px;
  border-color: #1abc9c;
  color: #fff;
  background-image: -webkit-linear-gradient(
    left,
    rgba(26, 188, 156, 0.6),
    rgba(26, 188, 156, 0.6) 5%,
    #009688 5%,
    #009688 10%,
    rgba(26, 188, 156, 0.6) 10%,
    rgba(26, 188, 156, 0.6) 15%,
    #009688 15%,
    #009688 20%,
    rgba(26, 188, 156, 0.6) 20%,
    rgba(26, 188, 156, 0.6) 25%,
    #009688 25%,
    #009688 30%,
    rgba(26, 188, 156, 0.6) 30%,
    rgba(26, 188, 156, 0.6) 35%,
    #009688 35%,
    #009688 40%,
    rgba(26, 188, 156, 0.6) 40%,
    rgba(26, 188, 156, 0.6) 45%,
    #009688 45%,
    #009688 50%,
    rgba(26, 188, 156, 0.6) 50%,
    rgba(26, 188, 156, 0.6) 55%,
    #009688 55%,
    #009688 60%,
    rgba(26, 188, 156, 0.6) 60%,
    rgba(26, 188, 156, 0.6) 65%,
    #009688 65%,
    #009688 70%,
    rgba(26, 188, 156, 0.6) 70%,
    rgba(26, 188, 156, 0.6) 75%,
    #009688 75%,
    #009688 80%,
    rgba(26, 188, 156, 0.6) 80%,
    rgba(26, 188, 156, 0.6) 85%,
    #009688 85%,
    #009688 90%,
    rgba(26, 188, 156, 0.6) 90%,
    rgba(26, 188, 156, 0.6) 95%,
    #009688 95%,
    #009688 100%
  );
  background-image: linear-gradient(
    to right,
    rgba(26, 188, 156, 0.6),
    rgba(26, 188, 156, 0.6) 5%,
    #009688 5%,
    #009688 10%,
    rgba(26, 188, 156, 0.6) 10%,
    rgba(26, 188, 156, 0.6) 15%,
    #009688 15%,
    #009688 20%,
    rgba(26, 188, 156, 0.6) 20%,
    rgba(26, 188, 156, 0.6) 25%,
    #009688 25%,
    #009688 30%,
    rgba(26, 188, 156, 0.6) 30%,
    rgba(26, 188, 156, 0.6) 35%,
    #009688 35%,
    #009688 40%,
    rgba(26, 188, 156, 0.6) 40%,
    rgba(26, 188, 156, 0.6) 45%,
    #009688 45%,
    #009688 50%,
    rgba(26, 188, 156, 0.6) 50%,
    rgba(26, 188, 156, 0.6) 55%,
    #009688 55%,
    #009688 60%,
    rgba(26, 188, 156, 0.6) 60%,
    rgba(26, 188, 156, 0.6) 65%,
    #009688 65%,
    #009688 70%,
    rgba(26, 188, 156, 0.6) 70%,
    rgba(26, 188, 156, 0.6) 75%,
    #009688 75%,
    #009688 80%,
    rgba(26, 188, 156, 0.6) 80%,
    rgba(26, 188, 156, 0.6) 85%,
    #009688 85%,
    #009688 90%,
    rgba(26, 188, 156, 0.6) 90%,
    rgba(26, 188, 156, 0.6) 95%,
    #009688 95%,
    #009688 100%
  );
  background-position: 0 0;
  background-size: 100%;
  -webkit-transition: background 300ms ease-in-out;
  transition: background 300ms ease-in-out;
}
.second:hover {
  background-position: 100px;
  color: #fff;
}
</style>
