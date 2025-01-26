import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { AUTH_PATHS } from "../index.enum";
import Loading from "../../../components/Loading";
import RedirectIfAuth from "../../../components/RouteGuards/RedirectIfAuth";

const LogInPage = lazy(() => import("../../../pages/sign-in"));

export const LOGIN_ROUTE = [
  <Route
    path={AUTH_PATHS.SIGN_IN}
    element={
      <Suspense fallback={<Loading />}>
        <RedirectIfAuth>
          <LogInPage />
        </RedirectIfAuth>
      </Suspense>
    }
  />,
];
