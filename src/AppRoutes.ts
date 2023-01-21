import MainPage from "./views/pages/MainPage/MainPage";
import NewsPage from "./views/pages/NewsPage/NewsPage";

export const AppRoutes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/news/:id",
    component: NewsPage,
  },
];
