import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { AUTH_PATHS } from "../index.enum";
import Loading from "../../../components/Loading";
import RedirectIfAuth from "../../../route-guards/RedirectIfAuth";

const RegisterPage = lazy(() => import("../../../pages/register"));

export const REGISTER_ROUTE = [
  <Route
    path={AUTH_PATHS.REGISTER}
    element={
      <Suspense fallback={<Loading />}>
        <RedirectIfAuth>
          <RegisterPage />
        </RedirectIfAuth>
      </Suspense>
    }
  />,
];
