import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login, logout, register } from "../../../supabase/auth";
import { MAIN_PATHS } from "../../../routes/main/index.enum";
import { AUTH_PATHS } from "../../../routes/auth/index.enum";

export const useHandleRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["register"],
    mutationFn: register,
    onSuccess: () => {
      navigate("/" + AUTH_PATHS.SIGN_IN);
    },
  });
};
export const useHandleLogIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate(MAIN_PATHS.HOME);
    },
  });
};
export const useHandleLogOut = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => navigate("/" + AUTH_PATHS.SIGN_IN),
  });
};
