import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import AboutPage from "@/views/AboutPage.vue";
import CardFlip from "../components/CardFlip.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
  },
  {
    path: "/about",
    name: "AboutPage",
    component: AboutPage,
  },
  {
    path: "/cardflip",
    name: "CardFlip",
    component: CardFlip,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
