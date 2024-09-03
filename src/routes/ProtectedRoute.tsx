import React from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import { supabase } from "../lib/helpers/supabaseClient";

type ProtectedRouteProps = {
  component: React.ComponentType;
};

const checkAuth = async () => {
  return (await supabase.auth.getSession()).data.session?.user;
};

const ProtectedRoute = ({ component: Component }: ProtectedRouteProps) => {
  const user = checkAuth();

  if (!user) {
    <Navigate to={ROUTES.login} />;
  }

  return <Component />;
};

export default ProtectedRoute;
