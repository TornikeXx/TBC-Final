import { Route } from "react-router-dom";
import { POLICIES_PATHS } from "../index.enum";
import { lazy, Suspense } from "react";
import Loading from "../../../components/Loading";

const CommunityGuidelinesPage = lazy(
  () => import("../../../pages/policies/community-guidelines"),
);
const LicensesPage = lazy(() => import("../../../pages/policies/licenses"));
const PrivacyPolicyPage = lazy(
  () => import("../../../pages/policies/privacy-policy"),
);
const PrivacyPreferencesPage = lazy(
  () => import("../../../pages/policies/privacy-prefences"),
);
const SafetyTipsPage = lazy(
  () => import("../../../pages/policies/safety-tips"),
);
const TermsOfServicePage = lazy(
  () => import("../../../pages/policies/terms-of-service"),
);

export const POLICIES_ROUTE = [
  <Route
    path={POLICIES_PATHS.COMMUNITY_GUIDELINES}
    element={
      <Suspense fallback={<Loading />}>
        <CommunityGuidelinesPage />
      </Suspense>
    }
  />,
  <Route
    path={POLICIES_PATHS.LICENSES}
    element={
      <Suspense fallback={<Loading />}>
        <LicensesPage />
      </Suspense>
    }
  />,
  <Route
    path={POLICIES_PATHS.PRIVACY_POLICY}
    element={
      <Suspense fallback={<Loading />}>
        <PrivacyPolicyPage />
      </Suspense>
    }
  />,
  <Route
    path={POLICIES_PATHS.PRIVACY_PREFERENCES}
    element={
      <Suspense fallback={<Loading />}>
        <PrivacyPreferencesPage />
      </Suspense>
    }
  />,
  <Route
    path={POLICIES_PATHS.SAFETY_TIPS}
    element={
      <Suspense fallback={<Loading />}>
        <SafetyTipsPage />
      </Suspense>
    }
  />,
  <Route
    path={POLICIES_PATHS.TERMS_OF_SERVICE}
    element={
      <Suspense fallback={<Loading />}>
        <TermsOfServicePage />
      </Suspense>
    }
  />,
];
