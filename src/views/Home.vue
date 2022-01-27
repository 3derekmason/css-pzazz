<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>HOME</h2>
    <div class="nav">
      <router-link to="/about">About</router-link>
      <router-link to="/cardflip">Card Flip</router-link>
      <router-view />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomePage",
  // components: {
  //   HelloWorld,
  // },
};
</script>

<style>
.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
</style>
