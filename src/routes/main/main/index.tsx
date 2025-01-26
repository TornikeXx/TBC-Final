import { Route } from "react-router-dom";
import { MAIN_PATHS } from "../index.enum";
import { lazy, Suspense } from "react";
import Loading from "../../../components/Loading";
import RequireAuth from "../../../route-guards/RequireAuth";

const HomePage = lazy(() => import("../../../pages/home"));
const ExplorePage = lazy(() => import("../../../pages/explore"));
const ContactUsPage = lazy(() => import("../../../pages/contact-us"));
const ProfilePage = lazy(() => import("../../../pages/profile"));
const SinglePetPage = lazy(() => import("../../../pages/single-pet"));

export const MAIN_ROUTE = [
  <Route
    path={MAIN_PATHS.HOME}
    element={
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    }
  />,
  <Route
    path={MAIN_PATHS.EXPLORE}
    element={
      <Suspense fallback={<Loading />}>
        <ExplorePage />
      </Suspense>
    }
  />,
  <Route
    path={MAIN_PATHS.CONTACT_US}
    element={
      <Suspense fallback={<Loading />}>
        <ContactUsPage />
      </Suspense>
    }
  />,
  <Route
    path={MAIN_PATHS.PROFILE}
    element={
      <Suspense fallback={<Loading />}>
        <RequireAuth>
          <ProfilePage />
        </RequireAuth>
      </Suspense>
    }
  />,
  <Route
    path={MAIN_PATHS.PET + "/:id"}
    element={
      <Suspense fallback={<Loading />}>
        <SinglePetPage />
      </Suspense>
    }
  />
];
