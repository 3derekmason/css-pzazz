import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import AboutPage from "@/views/AboutPage.vue";
import CardFlip from "../components/CardFlip.vue";
import HighwayScroll from "../components/HighwayScroll.vue";
import WaterDrop from "../components/WaterDrop.vue";
import WobbleIn from "../components/WobbleIn.vue";

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
  {
    path: "/highwayscroll",
    name: "HighwayScroll",
    component: HighwayScroll,
  },
  {
    path: "/waterdrop",
    name: "WaterDrop",
    component: WaterDrop,
  },
  {
    path: "/wobblein",
    name: "WobbleIn",
    component: WobbleIn,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
