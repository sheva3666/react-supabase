import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { supabase } from ".././lib/helpers/supabaseClient";

const useAuth = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    try {
      supabase.auth
        .getSession()
        .then((data) => setUser(data.data.session?.user));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return { user };
};

export default useAuth;
