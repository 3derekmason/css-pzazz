<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>HOME</h2>
    <router-link to="/about">About</router-link>
    <div class="nav">
      <router-link to="/cardflip">Card Flip</router-link>
      <router-link to="/highwayscroll">Highway Scroll</router-link>
      <router-link to="/waterdrop">Water Drop</router-link>
      <router-link to="/wobblein">Wobble In</router-link>
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
</style>
