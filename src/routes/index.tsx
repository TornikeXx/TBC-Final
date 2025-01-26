import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/default";
import PoliciesLayout from "../layouts/policies";
import { POLICIES_ROUTES } from "./policies";
import { MAIN_ROUTES } from "./main";
import { AUTH_ROUTES } from "./auth";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        {MAIN_ROUTES} {AUTH_ROUTES}
      </Route>
      <Route element={<PoliciesLayout />}>{POLICIES_ROUTES}</Route>
    </Routes>
  );
};
export default AppRoutes;
