import { useState } from "react";

export type HandleChangeProps = {
  value: string;
  key: string;
};

export type UserInfo = {
  email: string;
  password: string;
};

const useHandleForm = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: "",
    password: "",
  });

  const handleChange = ({ value, key }: HandleChangeProps) => {
    setUserInfo((prevState) => ({ ...prevState, [key]: value }));
  };

  return { userInfo, handleChange };
};

export default useHandleForm;
