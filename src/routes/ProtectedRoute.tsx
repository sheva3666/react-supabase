import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "./routes";
import { supabase } from "../lib/helpers/supabaseClient";
import { User } from "@supabase/supabase-js";

type ProtectedRouteProps = {
  component: React.ComponentType;
};

const ProtectedRoute = ({ component: Component }: ProtectedRouteProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  console.log(user);

  useEffect(() => {
    const checkAuth = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    <Navigate to={ROUTES.login} />;
  }

  return <Component />;
};

export default ProtectedRoute;
