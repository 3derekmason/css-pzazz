<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link to="/about">About</router-link>
    <div class="nav">
      <button class="homeBtn">
        <router-link to="/cardflip">Card Flip</router-link>
      </button>
      <button class="homeBtn">
        <router-link to="/highwayscroll">Highway Scroll</router-link>
      </button>
      <button class="homeBtn">
        <router-link to="/waterdrop">Water Drop</router-link>
      </button>
      <button class="homeBtn">
        <router-link to="/wobblein">Wobble In</router-link>
      </button>
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomePage",
};
</script>

<style>
a {
  text-decoration: none;
}
a:visited {
  color: white;
}
a:active {
  color: green;
}
a:hover {
  color: #009688;
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
  border-color: #009688;
  color: #fff;
  box-shadow: 0 0 40px 40px #009688 inset, 0 0 0 0 #009688;
  -webkit-transition: all 150ms ease-in-out;
  transition: all 0.33s ease-in-out;
}
.homeBtn:hover {
  box-shadow: 0 0 10px 0 #009688 inset, 0 0 10px 4px #009688;
  color: #00796b;
}
</style>
