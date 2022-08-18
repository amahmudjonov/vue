import Main from "@/pages/Main";
import CommentPage from "@/pages/commentPage";
import About from "@/pages/about";
import CommentDetail from "@/pages/commentDetails";
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/comment",
    component: CommentPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/comment/:id",
    component: CommentDetail,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
