import Home from "../components/pages/Home";
import Following from "../components/pages/Following";
import Profile from "../components/pages/Profile";
const publicRoutes = [
  { path: "/", element: Home },
  { path: "/following", element: Following },
  { path: "/profile", element: Profile },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
