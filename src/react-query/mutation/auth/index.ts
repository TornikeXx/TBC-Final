import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login, logout, register } from "../../../supabase/auth";

export const useHandleRegister = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["register"],
    mutationFn: register,
    onSuccess: () => {
      navigate("/sign-in");
    },
  });
};
export const useHandleLogIn = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => {
      navigate("/");
    },
  });
};
export const useHandleLogOut = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: logout,
    onSuccess: () => navigate("/sign-in"),
  });
};
