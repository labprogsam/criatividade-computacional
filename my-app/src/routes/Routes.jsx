import Onboarding from "../pages/onboarding"
import History from "../pages/history";

export const PublicRoutes = [
  {
    name: "Home",
    component: Onboarding,
    path: "/",
  },
  {
    name: "Home",
    component: History,
    path: "/history",
  },
]
