const { createApp, h } = Vue;
import Home from "./views/Home.vue";
import About from "./views/About.vue";

const NotFoundComponent = { template: "<p>Page not found</p>" };

const routes = {
  "/": Home,
  "/about": About,
};

const router = {
  data: () => ({
    currentRoute: window.location.pathname,
  }),
  computed: {
    CurrentComponent() {
      return routes[this.currentRoute] || NotFoundComponent;
    },
  },

  render() {
    return h(this.CurrentComponent);
  },
};

createApp(router).mount("#app");
