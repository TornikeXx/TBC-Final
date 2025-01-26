import { useAtomValue } from "jotai";
import { Navigate } from "react-router-dom";
import { userAtom } from "../store/auth";

const RequireAuth = ({ children }: { children: React.ReactNode }) => {
  const user = useAtomValue(userAtom);

  return user ? <>{children}</> : <Navigate to="/sign-in" replace />;
};

export default RequireAuth;
