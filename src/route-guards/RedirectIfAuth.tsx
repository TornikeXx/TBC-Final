import { useAtomValue } from "jotai";
import { Navigate } from "react-router-dom";
import { userAtom } from "../store/auth";

const RedirectIfAuth = ({ children }: { children: React.ReactNode }) => {
  const user = useAtomValue(userAtom);

  return user ? <Navigate to="/" replace /> : <>{children}</>;
};

export default RedirectIfAuth;
