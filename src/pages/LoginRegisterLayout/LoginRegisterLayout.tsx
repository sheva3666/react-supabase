import { useLocation, useNavigate } from "react-router";
import Form from "../../components/Form/Form";
import { supabase } from "../../lib/helpers/supabaseClient";
import useHandleForm, {
  HandleChangeProps,
  UserInfo,
} from "./hooks/useHandleForm";
import { ROUTES } from "../../routes/routes";

type GetInputsProps = {
  handleChange: ({ value, key }: HandleChangeProps) => void;
  userInfo: UserInfo;
};

const getInputs = ({ handleChange, userInfo }: GetInputsProps) => [
  {
    value: userInfo.email,
    placeholder: "Email",
    onChange: (value: string) => handleChange({ value, key: "email" }),
  },
  {
    value: userInfo.password,
    placeholder: "Password",
    onChange: (value: string) => handleChange({ value, key: "password" }),
    type: "password",
  },
];

const LoginRegisterLayout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isLogin = pathname === "/login";

  const { userInfo, handleChange } = useHandleForm();

  const onLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      password: userInfo.password,
      email: userInfo.email,
    });
    if (error) {
      // Handle error case
      console.error("Error signing in:", error.message);
      alert(`Sign-in failed: ${error.message}`);
      return;
    }

    if (data?.user) {
      navigate(ROUTES.home);
    }
  };

  const inputs = getInputs({ handleChange, userInfo });

  const onRegister = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    try {
      await supabase.auth.signUp({
        password: userInfo.password,
        email: userInfo.email,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form
      onSubmit={isLogin ? onLogin : onRegister}
      inputs={inputs}
      submitText={isLogin ? "Login" : "Register"}
    />
  );
};

export default LoginRegisterLayout;
