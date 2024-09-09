import LoginRegisterLayout from "../pages/LoginRegisterLayout/LoginRegisterLayout";
import ProtectedPage from "../pages/ProtectedPage/ProtectedPage";
import ProtectedRoute from "./ProtectedRoute";

export const ROUTES = {
  home: "/",
  login: "/login",
  register: "/register",
  protected: "/protected",
};

export const openRoutes = [
  { path: ROUTES.home },
  { path: ROUTES.login, Component: LoginRegisterLayout },
  { path: ROUTES.register, Component: LoginRegisterLayout },
  { path: ROUTES.register, Component: ProtectedPage },
];

export const protectedRoutes = [
  {
    path: ROUTES.protected,
    Component: () => ProtectedRoute({ component: ProtectedPage }),
  },
];
