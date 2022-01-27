<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link :to="{ name: 'HomePage' }">Home</router-link>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "AboutPage",
};
</script>
