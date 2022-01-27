<template>
  <div class="about">
    <router-link :to="{ name: 'HomePage' }">Home</router-link>

    <h1>About Css Pizazz</h1>
    <p>By Derek Mason</p>
    <h3>
      Just a little place made with Vue3 to show off some animations I've been
      playing around with! Most animations are entirely CSS built into the Vue
      components. I hope you enjoy!
    </h3>
    <h5>
      <a href="https://github.com/3derekmason/css-pzazz" target="_new"
        >View this code and more at my github profile</a
      >
    </h5>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped>
a:visited {
  color: #fff;
}
a:hover {
  color: #1de9b6;
}

.about {
  width: 50vw;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  color: #fff;
  flex-direction: column;
}
</style>
